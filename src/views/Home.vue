<template>
  <section class="home">
    <div class="home--left">
      <div class="home--left__title">
          <vue-typed-js :strings="['Agilidade', 'Facilidade', 'Eficiência']" :loop="true" :typeSpeed="75" :backSpeed="40" :backDelay="1000">
            <h1 v-html="$t('home.title')"></h1>
          </vue-typed-js>
      </div>
      <div class="home--left__description">
        <p v-html="$t('home.description')"></p>
      </div>
      <div class="home--left__action">
        <button>
          {{ $t('home.startNow') }}
        </button>
        <a>{{ $t('home.demo') }}</a>
      </div>
    </div>
    <div class="home--right">
      <div class="home--right__wrapper">
        <picture>
          <source srcset="/general/home/mobile_siopi_list.png" media="(max-width: 1023px)" />
          <img src="/general/home/desktop_siopi_list.png" alt="SiopiFácil Lista Ordens de Serviço" />
        </picture>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'home'
}
</script>

<style lang="scss">
.home {
  @apply pb-8 grid gap-y-8;
  padding-top: calc(80px + 2rem);
  background: linear-gradient(0deg,rgba(230, 240, 254, 1) 0%, rgba(230, 240, 254, 1) 52%, rgba(255, 255, 255, 1) 95%);

  &--left {
    @apply grid gap-y-8;
    &__title {
      @apply text-center text-2xl font-medium text-primary mx-auto;
      max-width: 345px;

      span {
        @apply font-bold uppercase text-blue
      }
    }

    &__description {
      @apply px-6 text-center;
    }

    &__action {
      @apply grid gap-y-4 justify-items-center;

      button {
        @apply py-3 px-6 text-white font-semibold bg-orange shadow-md rounded-xl transition-all duration-300 ease-in-out;
        &:hover {
            @apply bg-orange-darker;
        }
      }
      
      a {
        @apply text-blue underline text-sm cursor-pointer;
        &:hover {
            @apply text-blue-darker;
        }
      }

    }
  }

  &--right {
    @apply px-6;
    &__wrapper {
      @apply bg-white rounded-xl shadow-lg p-4;
      img {
        @apply w-full object-contain;
      }
    }
  }
}

@screen lg {
  .home {
    @apply pb-40 gap-x-10 items-center;

    padding-top: calc(96px + 2rem);

    padding-left: 8.25%;
    padding-right: 4.125%;

    grid-template-columns: auto 1fr;

    &--left {
      @apply grid gap-y-8 justify-items-start;
      &__title {
        @apply text-left text-4xl mx-0;
        max-width: unset;
        span {
          @apply mt-4 inline-block text-5xl;
        }
      }

      &__description {
        @apply px-0 text-left;
        max-width: 500px;
        br {
          @apply hidden;
        }
      }

      &__action {
        @apply mt-10 flex gap-x-4 items-center;
      }
    }

    &--right {
      @apply px-0;
      &__wrapper {
        @apply p-6 justify-self-end;
        max-width: 950px;
      }
    }
  }
}

</style>