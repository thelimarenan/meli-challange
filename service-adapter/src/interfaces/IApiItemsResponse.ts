interface IApiItemsResponse {
  author?: {
    name: string
    lastname: string
  },
  categories: string[],
  items: IItem[]
}

interface IApiItemDetailResponse {
  author?: {
    name: string
    lastname: string
  },
  categories: string[],
  item?: IItem & {
    sold_quantity: number,
    description: string
  }
}

interface IItem {
  id: string,
  title: string,
  price: {
    currency: string,
    amount: number,
    decimals: number
  },
  picture: string,
  condition: string,
  free_shipping: boolean,
  region: string
}

export { IApiItemsResponse, IApiItemDetailResponse, IItem };