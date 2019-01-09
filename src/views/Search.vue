<template>
  <div class="home row">
    <div class="col-sm-12">
      <SearchResults :search-term="searchTerm" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchResults from '@/components/SearchResults.vue';

@Component({
  components: {
    SearchResults,
  },
})
export default class Home extends Vue {
  get searchTerm() {
    return this.$route.params.searchTerm;
  }
}
</script>
