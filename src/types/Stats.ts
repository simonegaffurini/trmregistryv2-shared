import { SearchSuggestion } from "./SearchSuggestion";

export interface Stats {
  totalPackages: number;
  totalDownloads: number;
  totalUsers: number;
  totalOrganizations?: number;
  popularPackages: Array<SearchSuggestion>;
}