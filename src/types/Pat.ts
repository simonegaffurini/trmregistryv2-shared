export interface Pat {
    id: string,
    scopes: string[],
    createdAt: Date,
    description: string
    masked?: string,
    token?: string,
    lastUsedAt?: Date,
    expiresAt?: Date
}