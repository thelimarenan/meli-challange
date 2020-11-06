import { asClass, AwilixContainer, createContainer, Lifetime } from "awilix";

import { SearchService, CategoriesService } from "../services";
import { Search } from '../controllers';

const loader: AwilixContainer = createContainer();
loader.register({
  searchController: asClass(Search, {
    lifetime: Lifetime.SCOPED
  }),
  searchService: asClass(SearchService, {
    lifetime: Lifetime.SCOPED
  }),
  categoriesService: asClass(CategoriesService, {
    lifetime: Lifetime.SCOPED
  })
});

export default loader;
