<template>
  <div class="layout">
    <CustomMenu />
    <Home v-intersect="{ handler: sectionEnter, once: false, threshold: 0.5 }" />
    <Features v-intersect="{ handler: sectionEnter, once: false, threshold: 0.5 }" />
    <Benefits v-intersect="{ handler: sectionEnter, once: false, threshold: 0.5 }" />
    <Testimonials v-intersect="{ handler: sectionEnter, once: false, threshold: 0.5 }" />
    <Plans v-intersect="{ handler: sectionEnter, once: false, threshold: 0.5 }" />
    <Contact v-intersect="{ handler: sectionEnter, once: false, threshold: 0.5 }" />
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
  data() {
    return {
      canGotoSection: true,
      canIntersect: false,
      pageEnter: []
    }
  },
  computed: {
      ...mapGetters(['loading']),
      section() {
        return this.$route.params.section
      }
  },
  async created() {
    await this.$store.dispatch('setAccessToken').then(() => {

      const section = this.$route.params.section || 'home'

      this.$store.dispatch('setAccessEvent', {
        event: 'page_enter',
        value: section
      })
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    window.onload = () => {
      if (this.$route.params.section) {
        this.goToSection(this.$route.params.section)

         setTimeout(() => {
            this.canIntersect = true
          }, 100)
      }
    }



    const _this = this
    this.$nextTick(() => {
      const links = document.querySelectorAll('a[target="_blank"]')
      links.forEach((link) => {
        link.addEventListener('click', () => {
          const href = link.getAttribute('href')

          if (href) {
            _this.$store.dispatch('setAccessEvent', {
              event: 'external_link',
              value: href
            })
          }
        })
      })
    })

  },
  watch: {
    section(section) {
      this.goToSection(section)
    }
  },
  methods: {
    sectionEnter(event) {

      if (!this.canIntersect) return

      const section = event.target.className

      this.canGotoSection = false

      if (this.$route.fullPath !== this.$t(`routes.${section}`)) {
        this.$router.push(this.$t(`routes.${section}`))
      }

      if (!this.pageEnter.includes(section)) {
        this.$store.dispatch('setAccessEvent', {
          event: 'page_enter',
          value: section
        })
        this.pageEnter.push(section)
      }

      setTimeout(() => {
        this.canGotoSection = true
      }, 100)
    },
    goToSection(section) {
      if (!this.canGotoSection) return      

      const sectionSummary = {
        'recursos': 'features',
        'beneficios': 'benefits',
        'depoimentos': 'testimonials',
        'planos': 'plans',
        'contato': 'contact'
      }

      if (section) {
        section = sectionSummary[section]
      } else {
        section = 'home'
      }

        const elSection = document.querySelector(`section.${section}`)
        if (elSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight
            let top = elSection.offsetTop - navbarHeight

            if (section === 'home') {
                top = 0
            }

            window.scrollTo({
                top,
                behavior: 'smooth'
            })
        }
    },
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
