<template>
  <div class="layout">
    <CustomMenu />
    <Home />
    <Features />
    <Benefits />
    <Testimonials />
    <Plans />
    <Contact />
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
import Plans from './views/Plans'
import Testimonials from './views/Testimonials.vue'
import Contact from './views/Contact.vue'

export default {
  name: 'App',
  components: {
    CustomMenu,
    CustomFooter,
    Home,
    Features,
    Benefits,
    Testimonials,
    Plans,
    Contact
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
