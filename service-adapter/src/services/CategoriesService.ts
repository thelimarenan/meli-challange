import axios, { AxiosRequestConfig } from "axios";

import { ICategoriesMeli } from '../interfaces/ICategoriesMeli';

export default class CategoriesService {
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
   * @param {string} categoryID
   * @returns {Promise<ICategoriesMeli>}
   */
  public async getCategories(categoryID: string, retry = this.WILL_FORCE_RETRY): Promise<ICategoriesMeli> {
    const endpoint: string = `/categories/${categoryID}`;

    const requestConfig: AxiosRequestConfig = {
      headers: { "Content-Type": "application/json" },
      baseURL: this.apiUrl
    };

    try {
      const { data } = await axios.get<ICategoriesMeli>(endpoint, requestConfig);

      return data;
    } catch (error) {
      console.error(error);
      if (retry) {
        return await this.getCategories(categoryID, false);
      }
      throw error;
    }
  }
}
