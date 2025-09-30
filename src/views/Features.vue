<template>
  <section class="features">
    <h1 class="features--title">{{ $t('features.title') }}</h1>
    <p class="features--description">{{ $t('features.description') }}</p>
    <div class="features--wrapper" data-aos="fade-up" data-aos-duration="750">
      <div class="features--wrapper__item" v-for="feature in features" :key="`feature-${feature}`">
        <div class="features--wrapper__item--icon">
          <img :src="`/general/features/icon_${feature}.png`" :alt="$t(`features.${feature}_title`)" />
        </div>
        <div class="features--wrapper__item--content">
          <h2 class="features--wrapper__item--content__title">{{ $t(`features.${feature}_title`) }}</h2>
          <p class="features--wrapper__item--content__description">{{ $t(`features.${feature}_description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Features',
  data() {
    return {
      features: ['list', 'information', 'documents', 'realtime']
    }
  },
}
</script>

<style lang="scss">
.features {
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
        .features--wrapper__item--icon {
          @apply bg-orange-lighter;
        }
      }
      &--icon {
        @apply bg-blue-lighter rounded-full flex items-center justify-center shadow-sm;
        height: 40px;
        aspect-ratio: 1;
        img {
          height: 24px;
          filter: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
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
  .features {
    @apply py-20;
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