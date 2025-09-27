<template>
  <section class="plans">
    <h1 class="plans--title">{{ $t('plans.title') }}</h1>
    <p class="plans--description">
      <span>{{ $t('plans.description') }}</span>
      <span class="trial">{{ $t('plans.trial') }}</span>
    </p>

    <div class="plans--wrapper">
      <div class="plans--wrapper__item" v-for="(plan, index) in plans" :key="`plan-${plan.title}`" :data-aos="plan.aos" data-aos-duration="1000" :data-aos-delay="200 + (index * 200)" data-aos-anchor=".plans--wrapper__item">
        <div class="plans--wrapper__item--tag" v-if="plan.tag">{{ plan.tag }}</div>
        <div class="plans--wrapper__item--title">{{ plan.title }}</div>
        <div class="plans--wrapper__item--price">
          <span class="price">R$ {{ plan.price.toFixed(2).replace('.', ',') }}</span>/mês
        </div>
        <div class="plans--wrapper__item--features">
          <div v-for="feature in plan.features" :key="`feature-${feature}`" class="plans--wrapper__item--features__item">
            <img :src="`/general/plans/check-${index % 2 != 0 ? 'orange' : 'blue'}.png`" />
            <span>{{ feature }}</span>
          </div>
        </div>

        <div class="plans--wrapper__item--button">
          <a>
            {{ $t('plans.choose') }}
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Plans',
  data() {
    return {
      plans: [
        {
          aos: 'fade-right',
          title: 'Básico',
          price: 49.9,
          features: ['Até 10 ordens/mês', 'Processamento automático dos e-mails da Caixa (convocação, conclusão)', '1 usuários', '1 e-mail conectado para receber ordens']
        },
        {
          aos: 'fade-up',
          tag: 'Mais Popular',
          title: 'Profissional',
          price: 89.9,
          features: ['Ordens ilimitadas', 'Processamento automático dos e-mails da Caixa (convocação, conclusão, pagamento)', '3 usuários', '3 e-mails conectados para receber ordens', 'Importação automática dos documentos do SIOPI.', 'Coordenadas baseadas na PFUI']
        },
        {
          aos: 'fade-left',
          title: 'Empresarial',
          price: 149.9,
          features: ['Ordens ilimitadas', 'Processamento automático dos e-mails da Caixa (convocação, conclusão, pagamento)', 'Usuários ilimitados', 'E-mails conectados ilimitados para receber ordens', 'Importação automática dos documentos do SIOPI.', 'Coordenadas baseadas na PFUI', 'Coordenadas automáticas para fotos da obra', 'Gestão de equipe']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.plans {
  @apply p-8 grid bg-gray-lighter;
  &--title {
    @apply text-center uppercase font-bold text-lg;
  }
  &--description {
    @apply pt-2 text-center text-sm;
    span {
      @apply block;

      &.trial {
        @apply text-orange pt-6 text-xs;
      }
    }
  }
  &--wrapper {
    @apply grid pt-8 gap-y-12;

    &__item {
      @apply bg-white grid justify-items-center gap-y-8 p-8 rounded-xl shadow-lg relative;

      &--tag {
        @apply absolute bg-orange text-white font-bold px-4 py-1 rounded-full text-sm shadow;
        top: -14px;
      }

      &:nth-child(even) {
        @apply border-2 border-orange;
        .plans--wrapper__item--button a {
          @apply bg-orange;
          &:hover {
            @apply bg-orange-darker;
          }
        }
        .price {
          @apply text-orange;
        }
      }
      &--title {
        @apply font-semibold;
      }
      &--price {
        @apply flex items-end gap-x-1 text-sm font-light text-gray;
        .price {
          @apply text-3xl font-black text-blue;
          letter-spacing: -2px;
        }
      }
      &--features {
        @apply grid gap-y-4 text-sm;
        &__item {
          @apply grid items-center gap-x-2;
          grid-template-columns: auto 1fr;
          img {
            @apply h-2;
          }
        }
      }
      &--button {
        @apply p-6;
        a {
          @apply block w-full bg-blue text-white font-bold py-2 px-10 rounded-lg shadow transition-all duration-300 cursor-pointer;
          &:hover {
            @apply bg-blue-darker;
          }
        }
        
      }
    }
  }
}

@screen lg {
  .plans {
    @apply py-20;
     &--title {
      @apply text-xl;
    }
    &--description {
      @apply text-base;

      span {
        &.trial {
          @apply text-sm;
        }
      }
    }
    &--wrapper {
      @apply pt-16 grid justify-center items-center gap-x-10 grid-cols-3 mx-auto;
      max-width: 1280px;

      &__item {
        @apply h-full p-10 content-start;

        grid-template-rows: auto auto 1fr auto;

        &--tag {
          @apply px-8;
        }
        &--title {
          @apply font-bold;
        }
        &--price {
          @apply text-base;
          .price {
            @apply text-4xl;
          }
        }
        &--features {
          @apply content-start;
        }
        &--button {
          @apply p-6;
          
        }
      }
    }
  }
}
</style>