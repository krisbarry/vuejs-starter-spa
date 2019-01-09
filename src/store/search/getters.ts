import { GetterTree } from 'vuex';
import { SearchState, SearchResult } from './types';

export const getters: GetterTree<SearchState, any> = {

  error(state): object {
      return state.error;
  },

  searching(state): boolean {
      return state.searching;
  },

  searchResults(state): SearchResult[] {
    return state.searchResults;
  },
};
