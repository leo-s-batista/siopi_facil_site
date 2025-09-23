<template>
  <section class="benefits">
    <h1 class="benefits--title">{{ $t('benefits.title') }}</h1>
    <p class="benefits--description">{{ $t('benefits.description') }}</p>
    <div class="benefits--wrapper">
      <div class="benefits--wrapper__item" v-for="benefit in benefits" :key="`benefit-${benefit}`">
        <div class="benefits--wrapper__item--icon">
          <img :src="`/general/benefits/icon_${benefit}.png`" :alt="$t(`benefits.${benefit}_title`)" />
        </div>
        <div class="benefits--wrapper__item--content">
          <h2 class="benefits--wrapper__item--content__title">{{ $t(`benefits.${benefit}_title`) }}</h2>
          <p class="benefits--wrapper__item--content__description">{{ $t(`benefits.${benefit}_description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Benefits',
  data() {
    return {
      benefits: ['list', 'information', 'documents', 'realtime']
    }
  }
}
</script>

<style lang="scss">
.benefits {
  @apply p-8 text-primary;

  &--title {
    @apply text-center uppercase font-bold text-lg;
  }
  &--description {
    @apply pt-2 text-center text-sm;
  }
  &--wrapper {
    @apply mx-10 pt-8 grid gap-y-8;
    &__item {
      @apply grid gap-y-4 p-8 bg-white rounded-xl h-full shadow-default transition-all duration-500 ease-in-out cursor-default;
      &:nth-child(even) {
        .benefits--wrapper__item--icon {
          @apply bg-orange-lighter;
        }
      }
      &--icon {
        @apply bg-blue-lighter rounded-full flex items-center justify-center;
        height: 40px;
        aspect-ratio: 1;
        img {
          height: 24px;
        }
      }
      &--content {
        @apply grid gap-y-4;
        &__title {
          @apply font-semibold;
        }
        &__description {
          @apply text-sm;
        }
      }
    }
  }
  
}

@screen lg {
  .benefits {
    @apply py-16;
    &--title {
      @apply text-xl;
    }
    &--description {
      @apply text-base;
    }
    &--wrapper {
      @apply pt-16 mx-auto gap-x-6 grid-cols-4;
      max-width: 1100px;
      &__item {
        @apply content-start;
        &:hover {
          @apply shadow-default-hover;
        }
        &--icon {
          height: 48px;
          img {
            height: 30px;
          }
        }
        &--content {
          &__description {
            @apply text-base;
          }
        }
      }
    }
    
  }
}

</style>