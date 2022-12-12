
export interface IUser {
    login: string
    id: number
    avatar_url: string
    name: string
    location: string
    public_repos: number
    followers: number
}

export interface IRepository {
    id: number
    name: string
    owner: IUser
    html_url: string
    description: string
    fork: boolean
    url: string
    created_at: string
    pushed_at: string
    language: string
}