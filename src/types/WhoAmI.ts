import { User } from "./User";

export interface WhoAmI extends User {
    email: string;
    newsletter: boolean;
    planType: 'free' | 'pro';
    planStart?: Date;
    planEnd?: Date;
    authorizations: {
        createOrg: boolean
    }
}