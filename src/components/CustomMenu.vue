<template>
    <header>

        <nav :class="['navbar', { scrollTop }]">
            <router-link to="/" class="navbar--logo">
                <img src="/general/menu/logo.png" alt="SiopiFácil" />
            </router-link>
            <ul class="navbar--navigation">
                <router-link tag="li" class="navbar--navigation__item" v-for="section in sections" :key="`section-item-${section}`" :to="$t(`routes.${section}`)">{{ $t(`sections.${section}`) }}</router-link>
            </ul>

            <ul class="navbar--right">
                <li class="navbar--right__item">
                    <a href="https://painel.siopifacil.com.br" target="_blank">{{ $t(`sections.login`) }}</a>
                </li>
                <li class="navbar--right__item startNow">
                    <a href="https://wa.me/5518988120272?text=Desejo começar grátis agora!!" target="_blank">{{ $t(`sections.startNow`) }}</a>
                </li>
            </ul>

            <div @click="mobileMenu = true" class="navbar--menu">
                <img src="/general/menu/menu.png" alt="Menu" />
            </div>
        </nav>

        <MobileMenu :active="mobileMenu" @close="mobileMenu = false" :sections="sections" @goto="gotoSection" />

    </header>
</template>

<script>
import { mapGetters } from 'vuex'
import MobileMenu from './MobileMenu.vue'

export default {
    name: 'CustomMenu',
    components: {
        MobileMenu
    },
    data() {
        return {
            sections: ['features','benefits', 'testimonials', 'plans', 'contact'],
            mobileMenu: false
        }
    },
    computed: {
        ...mapGetters(['scrollTop'])
    },
    methods: {
        gotoSection(section) {
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
        }
    }
}
</script>

<style lang="scss">
header {
    .navbar {
        @apply fixed w-full p-4 flex items-center justify-between z-40 transition-all duration-300 ease-in-out;

        &.scrollTop {
            @apply bg-white;
        }
        
        &--logo {
            @apply cursor-pointer;
            img {
                height: 48px;
            }
        }
        &--navigation,
        &--right {
            @apply hidden;
        }
        // &--menu {}
    }
}
@screen lg {
    header {
        .navbar {
            @apply left-1/2 py-6 px-0 grid gap-x-10;
            grid-template-columns: auto auto 1fr;
            transform: translateX(-50%);
            padding-left: 8.25%;
            padding-right: 8.25%;

            &--navigation {
                @apply flex gap-x-2 items-center;
                &__item {
                    @apply text-blue p-2 bg-blue bg-opacity-0 rounded-lg transition-all duration-300 ease-in-out cursor-pointer;

                    &.router-link-exact-active {
                        @apply text-orange bg-orange bg-opacity-10;
                    }

                    &:hover {
                        @apply shadow-sm bg-opacity-10;
                    }
                }
            }
            &--right {
                @apply flex gap-x-2 items-center justify-self-end;
                &__item {
                    @apply text-blue p-2 bg-blue bg-opacity-0 rounded-lg transition-all duration-300 ease-in-out cursor-pointer;

                    &.startNow {
                        @apply py-3 px-4 text-white font-semibold bg-blue shadow-md rounded-xl;

                        &:hover {
                            @apply bg-blue-darker;
                        }
                    }

                    &:not(.startNow):hover {
                        @apply shadow-sm bg-opacity-10;
                    }
                }
            }
            &--menu {
                @apply hidden;
            }
        }
    }
}
</style>