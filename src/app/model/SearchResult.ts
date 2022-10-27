export interface SearchResult<T> {
  data: T[],
  pagination: {
    _page: number,
    _limit: number,
    _totalRows: number
  }
}
