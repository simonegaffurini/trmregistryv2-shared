import { PackageAuthorizations } from "./PackageAuthorizations";
import { PackageMaintainer } from "./PackageMaintainer";
import { PackageOwner } from "./PackageOwner";
import { PackageReleaseDependant } from "./PackageReleaseDependant";
import { PackageReleaseDependency } from "./PackageReleaseDependency";
export interface PackageRelease {
    organization?: string;
    hasOrg: boolean;
    name: string;
    version: string;
    shortDescription?: string;
    license?: string;
    releaseDate: Date;
    downloads: number;
    private: boolean;
    verified: boolean;
    maintainers: PackageMaintainer[];
    owners: PackageOwner[];
    deprecated: boolean;
    deprecatedNote?: string;
    readme?: string;
    website?: string;
    git?: string;
    namespace: boolean;
    dependencies: PackageReleaseDependency[];
    dependants: PackageReleaseDependant[];
    versions: string[];
    distTags: Record<string, string>;
    keywords?: string[];
    authorizations: PackageAuthorizations;
}
//# sourceMappingURL=PackageRelease.d.ts.map