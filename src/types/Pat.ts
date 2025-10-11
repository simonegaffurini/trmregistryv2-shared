export interface Pat {
    scopes: string[],
    created_at: Date,
    masked?: string,
    token?: string,
    last_used_at?: Date,
    expires_at?: Date,
    description?: string
}