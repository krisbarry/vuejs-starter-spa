<template>
  <div id="app" class="container">
    <Header />
    <div class="body">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Footer, Header,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
  .body {
    margin: 5px 15px 10px;
  }
  .title {
    font-size: 1.25em;
    margin: 0 10px 10px;
  }
</style>
