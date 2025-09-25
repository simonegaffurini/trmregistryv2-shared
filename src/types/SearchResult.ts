import { SearchSuggestion } from "./SearchSuggestion";

export interface SearchResult {
    total: number,
    results: SearchSuggestion[]
}