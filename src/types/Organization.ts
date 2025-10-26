import { OrganizationAuthorizations } from "./OrganizationAuthorizations";
import { OrganizationData } from "./OrganizationData";
import { OrganizationOwner } from "./OrganizationOwner";

export interface Organization extends OrganizationData {
    organization: string,
    members: string[],
    owners: OrganizationOwner[],
    invited?: string[],
    settings?: {
        defaultMaintainer: boolean
    },
    authorizations: OrganizationAuthorizations
}