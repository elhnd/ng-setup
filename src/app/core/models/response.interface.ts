export interface IResponse<T> {
    items: T,
    totalItems: number,
    itemsPerPage: number,
    page: number,
    totalPages: number
}