import { PackageMaintainer } from "./PackageMaintainer";
export interface SearchSuggestion {
    name: string;
    description?: string;
    version: string;
    downloads: number;
    maintainers: PackageMaintainer[];
    releaseDate: Date;
    private: boolean;
    verified: boolean;
    organization?: string;
    license?: string;
}
//# sourceMappingURL=SearchSuggestion.d.ts.map