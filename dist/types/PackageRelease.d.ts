import { PackageReleaseDependant } from "./PackageReleaseDependant";
import { PackageReleaseDependency } from "./PackageReleaseDependency";
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
    dependencies: PackageReleaseDependency[];
    dependants: PackageReleaseDependant[];
}
//# sourceMappingURL=PackageRelease.d.ts.map