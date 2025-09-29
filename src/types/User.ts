export interface User {
    username: string;
    organizations: string[];
    contactEmail?: string;
    github?: string;
    linkedin?: string;
    sapBlog?: string;
    bio?: string;
    birthday?: Date;
}