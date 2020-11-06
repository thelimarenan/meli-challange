interface ISerachMeli {
  site_id: string,
  query: string,
  paging: {
    total: number,
    primary_results: number,
    offset: number,
    limit: number
  },
  results: ISearchMeliResults[],
  secondary_results: ISearchMeliResults[],
  related_results: ISearchMeliResults[],
  sort: {
    id: string,
    name: string
  },
  available_sorts: {
    id: string,
    name: string
  }[],
  filters: {
    id: string,
    name: string,
    type: string,
    values: {
      id: string,
      name: string,
      path_from_root: {
        id: string,
        name: string
      }[]
    }[]
  }[],
  available_filters: {
    id: string,
    name: string,
    type: string,
    values: {
      id: string,
      name: string,
      results: number
    }[]
  }[]
}

interface ISearchMeliResults {
  id: string,
  site_id: string,
  title: string,
  seller: {
    id: number,
    permalink: string,
    registration_date: string,
    car_dealer: boolean,
    real_estate_agency: boolean,
    tags: string[],
    eshop: {
      nick_name: string,
      eshop_rubro: number | any,
      eshop_id: number,
      eshop_locations: string[],
      site_id: string,
      eshop_logo_url: string,
      eshop_status_id: number,
      seller: number,
      eshop_experience: number
    },
    seller_reputation: any
  },
  price: number,
  prices: {},
  sale_price: number | null,
  currency_id: string,
  available_quantity: number,
  sold_quantity: number,
  buying_mode: string,
  listing_type_id: string,
  stop_time: string,
  condition: string,
  permalink: string,
  thumbnail: string,
  accepts_mercadopago: string,
  installments: {
    quantity: number,
    amount: number,
    rate: number,
    currency_id: string
  },
  address: {
    state_id: string,
    state_name: string,
    city_id: string,
    city_name: string
  },
  shipping: {
    free_shipping: boolean,
    mode: string,
    tags: string[],
    logistic_type: string,
    store_pick_up: boolean
  },
  seller_addres: {
    id: string,
    comment: string,
    address_line: string,
    zip_code: string,
    country: {
      id: string,
      name: string
    },
    state: {
      id: string,
      name: string
    },
    city: {
      id: string,
      name: string
    },
    latitude: string,
    longitude: string
  },
  attributes: {
    id: string,
    value_struct: number | null,
    source: number,
    attribute_group_id: string,
    attribute_group_name: string,
    name: string,
    value_id: number | null,
    value_name: string,
    values: {
      source: number,
      id: string | null,
      name: string,
      struct: string | null
    }[]
  }[],
  original_price: number | null,
  category_id: string,
  official_store_id: string | null,
  domain_id: string,
  catalog_product_id: string | null,
  tags: string[],
  order_backend: number
}

interface ISearchMeliItemDetail {
  id: string,
  site_id: string,
  title: string,
  subtitle: null | string,
  seller_id: number,
  category_id: string,
  official_store_id: null | string,
  price: number,
  base_price: number,
  original_price: null | number,
  currency_id: string,
  initial_quantity: number,
  available_quantity: number,
  sold_quantity: number,
  sale_terms: [],
  buying_mode: string,
  listing_type_id: string,
  start_time: string,
  stop_time: string,
  condition: string,
  permalink: string,
  thumbnail_id: string,
  thumbnail: string,
  secure_thumbnail: string,
  pictures: string[],
  video_id: string,
  descriptions: [],
  accepts_mercadopago: true,
  non_mercado_pago_payment_methods: string[],
  shipping: {
    free_shipping: boolean,
    mode: string,
    tags: string[],
    logistic_type: string,
    store_pick_up: boolean
  },
  international_delivery_mode: string,
  seller_address: {
    id: string,
    comment: string,
    address_line: string,
    zip_code: string,
    country: {
      id: string,
      name: string
    },
    state: {
      id: string,
      name: string
    },
    city: {
      id: string,
      name: string
    },
    latitude: string,
    longitude: string
  },
  seller_contact: null | string,
  location: {},
  coverage_areas: string[],
  attributes: {
    id: string,
    value_struct: number | null,
    source: number,
    attribute_group_id: string,
    attribute_group_name: string,
    name: string,
    value_id: number | null,
    value_name: string,
    values: {
      source: number,
      id: string | null,
      name: string,
      struct: string | null
    }[]
  }[],
  warnings: string[],
  listing_source: string,
  variations: string[],
  status: string,
  sub_status: string[],
  tags: [],
  warranty: string,
  catalog_product_id: null | string,
  domain_id: string,
  parent_item_id: null | string,
  differential_pricing: null | string,
  deal_ids: string[],
  automatic_relist: boolean,
  date_created: string,
  last_updated: string,
  health: number,
  catalog_listing: boolean
}

interface ISearchMeliItemDescription {
  text: string,
  plain_text: string
}

export { ISerachMeli, ISearchMeliResults, ISearchMeliItemDetail, ISearchMeliItemDescription };