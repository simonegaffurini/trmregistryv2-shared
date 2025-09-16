export interface PackageRelease {
    organization?: string;
    name: string;
    version: string;
    shortDescription?: string;
    license?: string;
    releaseDate: Date;
    downloads: number;
    private: boolean;
    verified: boolean;
    maintainers: string[];
    deprecated: boolean;
    deprecatedNote?: string;
    readme?: string;
    website?: string;
    git?: string;
    namespace?: string;
}
//# sourceMappingURL=PackageRelease.d.ts.map