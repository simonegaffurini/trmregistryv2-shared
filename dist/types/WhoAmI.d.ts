import { User } from "./User";
export interface WhoAmI extends User {
    email: string;
    newsletter: boolean;
    planType: 'free' | 'pro';
    planStart: Date;
    planEnd: Date;
}
//# sourceMappingURL=WhoAmI.d.ts.map