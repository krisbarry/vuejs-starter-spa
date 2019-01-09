import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { SearchState } from './types';

const state: SearchState = {
  error: {},
  searching: false,
  searchResults: [],
};

export const search: Module<SearchState, any> = {
  state,
  actions,
  getters,
  mutations,
  namespaced: true,
};
