export interface Movie {
  Search: SearchResults[]
  totalResults: string
  Response: string
}

export interface SearchResults {
  Poster: string
  Title: string
  Type: string
  Year: number
  imdbID: string
}
