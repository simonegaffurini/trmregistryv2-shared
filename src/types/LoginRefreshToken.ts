export interface LoginRefreshToken {
    tokens: {
        accessToken: string,
        expiresIn: number
    }
}