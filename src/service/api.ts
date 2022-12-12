import axios from 'axios'
import { IUser, IRepository } from '../shared/types';

export const api = axios.create({
    baseURL: "https://api.github.com"
})

export async function showUser(username: string): Promise<IUser> {
    return api.get(`/users/${username}`).then((response) => response.data)
}

export async function listRepositoriesByUser(username: string, page: number, perPage: number = 10,  ): Promise<IRepository[]> {
    return api.get(`/users/${username}/repos`, { params: {
        page,
        per_page: perPage,
    } }).then((response) => response.data)
}
