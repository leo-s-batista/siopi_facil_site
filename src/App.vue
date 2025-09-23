<template>
  <div class="layout">
    <CustomMenu />
    <Home />
    <Features />
    <Benefits />
    <CustomFooter />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CustomMenu from './components/CustomMenu'
import CustomFooter from './components/CustomFooter'
import Home from './views/Home'
import Features from './views/Features'
import Benefits from './views/Benefits'

export default {
  name: 'App',
  components: {
    CustomMenu,
    CustomFooter,
    Home,
    Features,
    Benefits
  },
  computed: {
      ...mapGetters(['loading'])
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      
      this.$store.dispatch('setScrollTop', scrollTop)
    }
  }
}
</script>

<style lang="scss">

.layout {
  @apply grid;
  grid-template-rows: auto 1fr auto;
}
</style>
