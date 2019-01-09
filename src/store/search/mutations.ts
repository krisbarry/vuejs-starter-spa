import { MutationTree } from 'vuex';
import { SearchState, SearchResult } from './types';

export const mutations: MutationTree<SearchState> = {

  resultsFound(state, payload: SearchResult[]) {
    state.error = {};
    state.searching = false;
    state.searchResults = payload;
  },

  searchError(state, payload: object) {
    state.error = payload;
    state.searching = false;
    state.searchResults = [];
  },
};
