import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";

import { CategoriesService, SearchService } from "../services";
import { ISerachMeli, ISearchMeliResults, ISearchMeliItemDetail, ICategoriesMeli, IApiItemsResponse, IApiItemDetailResponse, IItem, ISearchMeliItemDescription } from '../interfaces/';

type Dependencies = {
  searchService: SearchService;
  categoriesService: CategoriesService
};

type ResponseFailed = {
  message: string;
  statusCode: number;
};

@Controller("api")
export default class Search {

  /**
   * @var {SearchService} searchService
   */
  protected searchService: SearchService;
  protected categoriesService: CategoriesService;

  /**
   * @param {Dependencies}
   */
  constructor({ searchService, categoriesService }: Dependencies) {
    this.searchService = searchService;
    this.categoriesService = categoriesService;
  }

  @Get("items")
  public async getItems(
    req: Request,
    res: Response,
  ): Promise<Response> {
    res.set("Access-Control-Allow-Origin", process.env.CORS_ACCESS_CONTROL_ALLOW_ORIGIN);

    const query: string = req.query.q as string;

    try {
      const response: ISerachMeli = await this.searchService.getQuery(query);
      const statusCode: number = 200;

      const responseBody: IApiItemsResponse = await this.parseResponseList(response);

      return res.status(statusCode).json(responseBody);
    } catch (error) {
      console.log(error);
      const responseBody: ResponseFailed = {
        message: "Internal server error",
        statusCode: 500,
      };

      return res.status(responseBody.statusCode).json(responseBody);
    }
  }

  @Get("items/:id")
  public async getItemsById(
    req: Request,
    res: Response,
  ): Promise<Response> {
    res.set("Access-Control-Allow-Origin", process.env.CORS_ACCESS_CONTROL_ALLOW_ORIGIN);

    const itemID: string = req.params.id as string;

    try {
      const response: ISearchMeliItemDetail = await this.searchService.getByID(itemID);
      const statusCode: number = 200;

      const responseBody: IApiItemDetailResponse = await this.parseResponseDetail(response);

      return res.status(statusCode).json(responseBody);
    } catch (error) {
      console.log(error);
      const responseBody: ResponseFailed = {
        message: "Internal server error",
        statusCode: 500,
      };

      return res.status(responseBody.statusCode).json(responseBody);
    }
  }

  private async parseResponseList(searchResult: ISerachMeli): Promise<IApiItemsResponse> {
    const categories: string[] = [];
    const items: IItem[] = [];

    if(searchResult.results && searchResult.results.length > 0) {
      const parseItemList: () => void = () => new Promise((resolve) => {
        searchResult.results.forEach((item: ISearchMeliResults) => {
          const amount: number = Number(item.price.toString().split('.')[0]);
          const decimals: number = Number(item.price.toString().split('.')[1]);
          items.push({
            id: item.id,
            title: item.title,
            condition: item.condition,
            picture: item.thumbnail,
            free_shipping: item.shipping.free_shipping,
            price: {
              currency: item.currency_id,
              amount,
              decimals: Number.isNaN(decimals) ? 0 : decimals
            },
            region: item.address.state_name
          });
        });
        resolve();
      });

      const parseCategories: () => void = async () => {
        const responseCategory: ICategoriesMeli = await this.getCategories(searchResult.results[0].category_id);

        responseCategory.path_from_root.forEach((category) => {
          categories.push(category.name);
        });
      };

      await Promise.all([parseItemList(), parseCategories()]);
    }


    return {
      categories,
      items,
    }
  }

  private async parseResponseDetail(itemDetail: ISearchMeliItemDetail): Promise<IApiItemDetailResponse> {
    const parsed: IApiItemDetailResponse = {
      categories: []
    }

    const parseItemDetail: () => void = async () => {
      const description: ISearchMeliItemDescription = await this.searchService.getDescription(itemDetail.id);
      const amount: number = Number(itemDetail.price.toString().split('.')[0]);
      const decimals: number = Number(itemDetail.price.toString().split('.')[1]);

      parsed.item = {
        id: itemDetail.id,
        title: itemDetail.title,
        condition: itemDetail.condition,
        picture: itemDetail.thumbnail,
        free_shipping: itemDetail.shipping?.free_shipping,
        price: {
          currency: itemDetail.currency_id,
          amount,
          decimals: Number.isNaN(decimals) ? 0 : decimals
        },
        region: itemDetail.seller_address.state.name,
        sold_quantity: itemDetail.sold_quantity,
        description: description.plain_text
      }
    };

    const parseCategories: () => void = async () => {
      const responseCategory: ICategoriesMeli = await this.getCategories(itemDetail.category_id);

      responseCategory.path_from_root.forEach((category) => {
        parsed.categories.push(category.name);
      });
    };

    await Promise.all([parseItemDetail(), parseCategories()]);

    return parsed;
  }

  private async getCategories(categoryID: string): Promise<ICategoriesMeli> {
    const responseCategory: ICategoriesMeli = await this.categoriesService.getCategories(categoryID);

    return responseCategory;
  }
}
