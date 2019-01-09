<template>
  <div class="search-results">
    <div class="row" v-if="loading">
      <div class="col-10 offset-1 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
        <b-progress :value="100" variant="info" :animated="animate"></b-progress>
      </div>
    </div>
    <div v-else>
      <p>Search results for "{{ searchTerm }}"</p>
      <div class="row result header">
        <div class="col-4 col-sm-3">Title</div>
        <div class="col-1">Relevance</div>
        <div class="col-7 col-sm-8">Description</div>
      </div>
      <div class="row result" v-for="result in results">
        <div class="col-4 col-sm-3">{{ result.title }}</div>
        <div class="col-1">{{ result.relevance }}</div>
        <div class="col-7 col-sm-8">{{ result.description }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Action, Getter } from 'vuex-class';
import { Component, Prop, Watch } from 'vue-property-decorator';
import { SearchState, SearchResult } from '../store/search/types';

const namespace: string = 'search';

@Component
export default class SearchResults extends Vue {
  private animate: boolean = true;

  @Prop()
  private searchTerm!: string;

  @Getter('searchResults', { namespace })
  private results!: SearchResult[];

  @Getter('error', { namespace })
  private error!: object;

  @Getter('searching', { namespace })
  private loading!: boolean;

  @Action('search', { namespace })
  private search: any;

  @Watch('searchTerm')
  private searchTermChanged(newVal: string, oldVal: string) {
    this.search(newVal);
  }

  private mounted() {
    this.search(this.searchTerm);
  }
}
</script>

<style lang="scss" scoped>
.result {
  font-size: .9rem;
}
</style>
