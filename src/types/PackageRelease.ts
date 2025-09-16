import { PackageAuthorizations } from "./PackageAuthorizations";
import { PackageMaintainer } from "./PackageMaintainer";
import { PackageReleaseDependant } from "./PackageReleaseDependant";
import { PackageReleaseDependency } from "./PackageReleaseDependency";

export interface PackageRelease {
  organization?: string,
  name: string,
  version: string,
  shortDescription?: string,
  license?: string,
  releaseDate: Date,
  downloads: number,
  private: boolean,
  verified: boolean,
  maintainers: PackageMaintainer[],
  deprecated: boolean,
  deprecatedNote?: string,
  readme?: string,
  website?: string,
  git?: string,
  namespace: boolean,
  dependencies: PackageReleaseDependency[],
  dependants: PackageReleaseDependant[],
  versions: string[],
  keywords?: string[],
  authorizations: PackageAuthorizations
}