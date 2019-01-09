<template>
  <div class="header">
    <b-navbar toggleable="md">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand :to="{name: 'home'}">Vue.js Starter SPA</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item :to="{name: 'home'}" sm="9">
            Home
          </b-nav-item>
          <template>
            <b-nav-item-dropdown>
              <template slot="button-content">
                <a class="more-link">More</a>
              </template>
              <b-dropdown-item :to="{name: 'faqs'}">
                FAQs
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Contact Us
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </template>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit="onSearch">
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" v-model="query" />
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  private query: string = '';

  private onSearch(evt: any) {
    evt.preventDefault();
    if (this.query) {
      this.$router.push({name: 'search', params: { searchTerm: this.query }});
    }
  }
}
</script>
