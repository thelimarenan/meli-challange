import axios, { AxiosRequestConfig } from "axios";

import { ISerachMeli, ISearchMeliItemDetail, ISearchMeliItemDescription } from '../interfaces/ISearchMeli';

export default class SearchService {
  /**
   * @var {string} apiUrl
   */
  private apiUrl: string = process.env.MELI_HOST_URL ?? "";

  /**
   * @var {boolean} WILL_FORCE_RETRY
   */
  private readonly WILL_FORCE_RETRY: boolean = true;

  /**
   * Get goods list
   *
   * @param {string} query
   * @returns {Promise<ISerachMeli>}
   */
  public async getQuery(query: string, retry = this.WILL_FORCE_RETRY): Promise<ISerachMeli> {
    const endpoint: string = 'sites/MLA/search';
    const requestConfig: AxiosRequestConfig = {
      headers: { "Content-Type": "application/json" },
      params: {
        q: query
      },
      baseURL: this.apiUrl
    };

    try {
      const { data } = await axios.get<ISerachMeli>(endpoint, requestConfig);

      return data;
    } catch (error) {
      console.error(error);
      if (retry) {
        return await this.getQuery(query, false);
      }
      throw error;
    }
  }

  /**
   * Get goods detail
   *
   * @param {string} itemID
   * @returns {Promise<ISearchMeliItemDetail>}
   */
  public async getByID(itemID: string, retry = this.WILL_FORCE_RETRY): Promise<ISearchMeliItemDetail> {
    const endpoint: string = `/items/${itemID}`;
    const requestConfig: AxiosRequestConfig = {
      headers: { "Content-Type": "application/json" },
      baseURL: this.apiUrl
    };

    try {
      const { data } = await axios.get<ISearchMeliItemDetail>(endpoint, requestConfig);

      return data;
    } catch (error) {
      console.error(error);
      if (retry) {
        return await this.getByID(itemID, false);
      }
      throw error;
    }
  }

  /**
   * Get goods detail description
   *
   * @param {string} itemID
   * @returns {Promise<ISearchMeliItemDescription>}
   */
  public async getDescription(itemID: string, retry = this.WILL_FORCE_RETRY): Promise<ISearchMeliItemDescription> {
    const endpoint: string = `/items/${itemID}/description`;
    const requestConfig: AxiosRequestConfig = {
      headers: { "Content-Type": "application/json" },
      baseURL: this.apiUrl
    };

    try {
      const { data } = await axios.get<ISearchMeliItemDescription>(endpoint, requestConfig);

      return data;
    } catch (error) {
      console.error(error);
      if (retry) {
        return await this.getDescription(itemID, false);
      }
      throw error;
    }
  }

}
