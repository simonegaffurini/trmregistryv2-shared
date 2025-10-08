export interface Pat {
    id: string,
    jti: string,
    name: string,
    scopes: string[],
    token?: string,
    expiresAt?: Date,
    revokedAt?: Date,
    lastUsedAt?: Date,
    lastUsedIp?: string
}