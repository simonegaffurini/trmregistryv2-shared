export interface Pat {
    masked: string,
    scopes: string[],
    created_at: Date,
    token?: string,
    last_used_at?: Date,
    expires_at?: Date,
    description?: string
}