export type SeachAPI = {
  categories: string[];
  items: Item[];
};

export type SeachDetailAPI = {
  categories: string[];
  item?: Item & {
    sold_quantity: number,
    description: string
  };
};

export type Item = {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
  region: string;
}