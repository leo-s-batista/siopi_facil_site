<template>
  <div class="layout">
    <CustomMenu />
    <Home />
    <Benefits />
    <Features />
    <CustomFooter />
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import CustomMenu from './components/CustomMenu'
import CustomFooter from './components/CustomFooter'
import Home from './views/Home'
import Benefits from './views/Benefits'
import Features from './views/Features'

export default {
  name: 'App',
  components: {
    CustomMenu,
    CustomFooter,
    Home,
    Benefits,
    Features
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
