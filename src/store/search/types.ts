
export interface SearchResult {
  title: string;
  relevance: number;
  description: string;
}

export interface SearchState {
  error: object;
  searching: boolean;
  searchResults: SearchResult[];
}
