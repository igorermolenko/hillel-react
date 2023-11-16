import {delay} from '../utils'

export class FetchClient<T> {
    url: string
    delay: number

    constructor(url: string, delay: number = 500) {
        this.url = url
        this.delay = delay
    }

    async request<O>(path = '', method = 'GET', data?: T): Promise<O> {
        await delay(this.delay)

        const response = await fetch(`${this.url}${path}`, {
            method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.ok) {
            return response.json()
        }

        throw new Error(response.statusText)
    }


    async getAll(): Promise<T[]> {
        try {
            return await this.request<T[]>()
        } catch (e: any) {
            throw Error(`Can't fetch list of items from server: ${e.message}`)
        }
    }

    async get(id: number): Promise<T> {
        try {
            return await this.request<T>(String(id))
        } catch (e: any) {
            throw Error(`Can't fetch one item from server: ${e.message}`)
        }
    }

    async create(data: T): Promise<T> {
        try {
            return await this.request<T>('', 'POST', data)
        } catch (e: any) {
            throw Error(`Can't create item: ${e.message}`)
        }
    }

    async update(id: number, data: T): Promise<T> {
        try {
            return await this.request<T>(String(id), 'PUT', data)
        } catch (e: any) {
            throw Error(`Can't update item: ${e.message}`)
        }
    }

    async delete(id: number): Promise<void> {
        try {
            return await this.request<void>(String(id), 'DELETE')
        } catch (e: any) {
            throw Error(`Can't delete item: ${e.message}`)
        }
    }
}