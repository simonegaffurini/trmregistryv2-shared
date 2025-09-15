export interface SearchSuggestion {
  name: string;
  description?: string;
  version: string;
  downloads: number;
  maintainers: string[];
  releaseDate: Date;
  private: boolean;
  verified: boolean;
  organization?: string;
  license?: string;
}