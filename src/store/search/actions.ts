import { ActionTree } from 'vuex';
import { SearchState } from './types';
import { SearchService } from './service';

const searchService = new SearchService();

export const actions: ActionTree<SearchState, any> = {

  async search({ commit, state }, searchTerm) {
    state.searching = true;
    const searchResults = await searchService.search(searchTerm);
    commit('resultsFound', searchResults);
  },
};
