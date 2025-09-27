<template>
  <section class="testimonials">
    <h1 class="testimonials--title">{{ $t('testimonials.title') }}</h1>
      <div class="testimonials--list">
        <div class="testimonials--list__item" v-for="(testimonial, index) in testimonials" :key="`testimonial-${testimonial.name}`" :data-aos="testimonial.aos" data-aos-duration="750" :data-aos-delay="index * 200" data-aos-anchor=".testimonials--list">
          <div class="testimonials--list__item--header">
            <div class="testimonials--list__item--header__avatar">
              <img :src="testimonial.avatar" :alt="testimonial.name" />
            </div>
            <div class="testimonials--list__item--header__infos">
              <span class="name"> {{ testimonial.name }}</span>
              <span class="role"> {{ testimonial.role }}</span>
            </div>
          </div>
          <div class="testimonials--list__item--description">
            "{{ testimonial.description }}"
          </div>
        </div>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Testimonials',
  data() {
    return {
      testimonials: [
        {
          aos: 'zoom-in',
          avatar: '/general/testimonials/1.jpg',
          name: 'Mateus Batista',
          role: 'Engenheiro - Leite Riberti',
          description: "Perdia muito tempo acessando a ordem de serviço em campo, agora não tenho mais esse problema. Acompanho todas as ordens em tempo real e com muita praticidade."
        },
        {
          aos: 'zoom-in',
          avatar: '/general/testimonials/2.jpg',
          name: 'André Matos',
          role: 'Gerente - ML Laudos',
          description: 'Queria ter conhecido antes!! Interface intuitiva e funcionalidades completas. Recomendo para toda empresa do credenciada.'
        },
        {
          aos: 'zoom-in',
          avatar: '/general/testimonials/3.jpg',
          name: 'Roberto Lima',
          role: 'Diretor - J.P. Engenharia',
          description: 'Triplicamos nossa eficiência desde que começamos a usar o Siopi Fácil. Fica muito mais fácil e rápido acessar/filtrar as Ordens de Serviço.'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  @apply p-8 grid gap-y-8;
  &--title {
    @apply text-center uppercase font-bold text-lg;
  }
  &--list {
    @apply grid gap-y-8;

    &__item {
      @apply grid gap-y-4 p-8 bg-white rounded-xl h-full shadow-default transition-all duration-500 ease-in-out cursor-default;

      &--header {
        @apply grid items-center gap-x-4;
        grid-template-columns: auto 1fr;;
        &__avatar {
          img {
            @apply h-12 bg-blue rounded-full object-cover;
            aspect-ratio: 1;
            filter: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
          }
        }
        &__infos {
          @apply grid gap-y-0;
          .name {
            @apply font-semibold text-sm;
          }
          .role {
            @apply text-xs font-light;
          }
        }
      }

      &--description {
        @apply text-sm italic;
      }
    }
  }
}

@screen lg {
  .testimonials {
    @apply py-20 gap-y-16;
    &--title {
      @apply text-xl;
    }
    &--list {
      @apply grid-cols-3 mx-auto gap-x-6;
      max-width: 1280px;

      &__item {
        @apply grid gap-y-4 p-8 bg-white rounded-xl h-full shadow-default transition-all duration-500 ease-in-out cursor-default;

        &--header {
          @apply grid items-center gap-x-4;
          grid-template-columns: auto 1fr;
          &__avatar {
            img {
              @apply h-16;
            }
          }
          &__infos {
            .name {
              @apply text-base;
            }
            .role {
              @apply text-sm;
            }
          }
        }

        &--description {
          @apply text-base;
        }
      }
    }
  }
}

</style>