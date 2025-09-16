import { User } from "./User";

export interface WhoAmI extends User {
    email: string,
    newsletter: boolean,
    plan?: {
        start: Date,
        end: Date
    },
}