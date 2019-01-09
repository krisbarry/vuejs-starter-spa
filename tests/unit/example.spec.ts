import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import SearchResults from '@/components/SearchResults.vue';

describe('SearchResults.vue', () => {
  it('tests the rendering of the search results component', () => {
    const searchResultsTitle = 'Search results for "test"';
    const wrapper = shallowMount(SearchResults, {
      propsData: { searchTerm: 'test' },
    });
    expect(wrapper.text()).to.include(searchResultsTitle);
  });
});
