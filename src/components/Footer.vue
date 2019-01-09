<template>
  <div class="footer">
    <b-nav vertical>
      <b-nav-item :to="{name: 'about'}">
        About Us
      </b-nav-item>
      <b-nav-item :to="{name: ''}">
        Careers
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<style lang="scss">
</style>
