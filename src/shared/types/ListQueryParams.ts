import { OrdinationParams } from "./OrdinationParams";
import { PaginationParams } from "./PaginationParams";

export type ListQueryParams<TFilters = {}> = PaginationParams & OrdinationParams & TFilters;