import { OrganizationAuthorizations } from "./OrganizationAuthorizations";

export interface Organization {
    organization: string,
    members: string[],
    website?: string,
    contactEmail?: string,
    authorizations: OrganizationAuthorizations
}