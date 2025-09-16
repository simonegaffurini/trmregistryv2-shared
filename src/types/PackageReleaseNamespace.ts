export interface PackageReleaseNamespace {
    namespace: string,
    descriptions?: {
        owner: string,
        description: string,
        language: string
    }[]
}