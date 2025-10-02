import { OrganizationAuthorizations } from "./OrganizationAuthorizations";
import { OrganizationOwner } from "./OrganizationOwner";
export interface Organization {
    organization: string;
    members: string[];
    owners: OrganizationOwner[];
    website?: string;
    contactEmail?: string;
    authorizations: OrganizationAuthorizations;
}
//# sourceMappingURL=Organization.d.ts.map