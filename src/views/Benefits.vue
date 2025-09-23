<template>
  <section class="benefits">
    <h1 class="benefits--title">{{ $t('benefits.title') }}</h1>
    <div class="benefits--wrapper">

      <div class="benefits--wrapper__list">
        <div class="benefits--wrapper__list--item" v-for="benefit in benefits" :key="`benefit-${benefit}`">
          <div class="benefits--wrapper__list--item__title">
            <span class="benefits--wrapper__list--item__title--icon">
              <img src="/general/benefits/check.png" alt="SiopiFácil" />
            </span>
            {{ $t(`benefits.${benefit}_title`) }}
          </div>
          <div class="benefits--wrapper__list--item__description">
            {{ $t(`benefits.${benefit}_description`) }}
          </div>
        </div>
      </div>
      <div class="benefits--wrapper__image">
        <img src="/general/benefits/image_1.png" alt="SiopiFácil" />
      </div>

    </div>
  </section>
</template>

<script>

export default {
  name: 'Benefits',
  data() {
    return {
      benefits: ['agility', 'organization', 'security', 'productivity', 'reliability', 'convenience']
    }
  }
}
</script>

<style lang="scss">
.benefits {
  @apply bg-gray-lighter p-8 grid gap-y-8;
  &--title {
    @apply text-center uppercase font-bold text-lg;
  }
  &--wrapper {
    @apply grid gap-y-8;
    &__list {
      @apply grid gap-y-8;
      &--item {
        &:nth-child(even) {
          .benefits--wrapper__list--item__title--icon {
            @apply bg-orange;
          }
        }
        &__title {
          @apply flex items-center gap-x-2 font-bold;
          &--icon {
            @apply bg-blue rounded-full p-0 shadow-md;
            img {
              height: 14px;
              aspect-ratio: 1;
            }
          }
        }
        &__description {
          @apply text-sm text-justify
        }
      }
    }
    &__image {
      img {
        @apply w-full rounded-2xl shadow-lg;
      }
    }
  }
}

@screen lg {
  
    .benefits {
      @apply py-20 gap-y-8; 

      padding-left: 8.25%;
      padding-right: 8.25%;

      &--title {
        @apply text-left text-xl;
      }
      &--wrapper {
        @apply gap-x-40;
        grid-template-columns: auto 1fr;
        &__list {
          &--item {
            @apply grid gap-y-2;
            &__title {
              &--icon {
                @apply p-1;
                img {
                  height: 18px;
                }
              }
            }
            &__description {
              @apply text-base text-left;
              padding-left: calc(18px + 1rem);
            }
          }
        }
        &__image {
          img {
            @apply h-full object-cover;
          }
        }
      }
    }
}

</style>