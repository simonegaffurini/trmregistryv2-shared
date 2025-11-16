import { User } from "./User";
import { UserNotification } from "./UserNotification";

export interface WhoAmI extends User {
    email: string;
    newsletter: boolean;
    planType: 'free' | 'pro';
    planStart?: Date;
    planEnd?: Date;
    authorizations: {
        createOrg: boolean
    },
    notifications: UserNotification[]
}