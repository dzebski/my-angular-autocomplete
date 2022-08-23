export interface Movie {
  Search: MoviesSearchResults[]
  totalResults: string
  Response: string
}

export interface MoviesSearchResults {
  Poster: string
  Title: string
  Type: string
  Year: number
  imdbID: string
}
