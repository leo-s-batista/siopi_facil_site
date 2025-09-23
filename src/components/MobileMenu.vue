<template>
    <div :class="['mobile--menu', { active }]">
        <div @click="close()" class="mobile--menu__close">
            <img src="/general/close.png" alt="Close" />
        </div>
        <ul class="mobile--menu__navigation">
            <li @click="close()" class="mobile--menu__navigation--item" v-for="section in sections" :key="`mobile-section-item-${section}`">
                <router-link :to="$t(`routes.${section}`)">{{ $t(`sections.${section}`) }}</router-link>
            </li>
            <li @click="close()" class="mobile--menu__navigation--item">
                <a href="https://painel.siopifacil.com.br" target="_blank">{{ $t(`sections.login`) }}</a>
            </li>
            <li @click="close()" class="mobile--menu__navigation--item startNow">
                <router-link to="/comecar-agora">{{ $t(`sections.startNow`) }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'MobileMenu',
    props: {
        sections: {
            type: Array,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        close() {
            this.$emit('close')
        }
    }
}
</script>

<style lang="scss">
.mobile--menu {
    @apply fixed z-50 w-full h-full left-0 top-0 bg-blue pointer-events-none opacity-0 transition-all duration-300 ease-in-out;
    transform: scale(0.9);
    
    &.active {
        transform: scale(1);
        @apply pointer-events-auto opacity-100;
    }

    &__close {
        @apply absolute right-0 top-0 flex items-center justify-center;
        padding: 2.25rem 1.25rem;
    }

    &__navigation {
        @apply grid gap-y-8 h-full content-center justify-items-center;

        &--item {
            @apply text-white text-xl font-bold uppercase;

            &.startNow {
                @apply mt-6 py-4 px-6 text-blue font-semibold bg-white shadow-md rounded-xl text-sm;
            }

            &:not(.startNow).router-link-exact-active {
                @apply text-orange;
                text-shadow: 0 0 5px rgba(0,0,0,0.25);
            }
        }
    }
}
</style>