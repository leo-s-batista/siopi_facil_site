<template>
  <section class="contact">
    <div class="contact--title">{{ $t('contact.title') }}</div>
    <div class="contact--form">
        <div class="contact--form__field">
            <label for="name">{{ $t('contact.name') }}</label>
            <input  v-validate="'required'" type="text" id="name" name="name" v-model="form.name" />
            <small :class="{ active: errors.has('name') }">{{ errors.first('name') }}</small>
        </div>
        <div class="contact--form__field">
            <label for="email">
                {{ $t('contact.email') }}
            </label>
            <input v-validate="'required|email'" type="email" id="email" name="email" v-model="form.email" />
            <small :class="{ active: errors.has('email') }">{{ errors.first('email') }}</small>
        </div>
        <div class="contact--form__field">
            <label for="phone">
                {{ $t('contact.phone') }}
            </label>
            <input v-validate="'required|custom_phone'" v-mask="'(##) #####-####'" type="tel" id="phone" name="phone" v-model="form.phone" />
            <small :class="{ active: errors.has('phone') }">{{ errors.first('phone') }}</small>
        </div>
        <div class="contact--form__field">
            <label for="message">
                {{ $t('contact.message') }}
                <span>Opcional</span>
            </label>
            <textarea id="message" name="message" v-model="form.message" required></textarea>
        </div>
        <div class="contact--form__button">
            <button v-if="sent">
                <img src="/general/contact/check.png" alt="Loading" />
                {{ $t('contact.sent') }}
            </button>
            <button v-else-if="sending">
                <img src="/general/contact/sending.gif" alt="Loading" />
                {{ $t('contact.sending') }}
            </button>
            <button @click="send()" v-else>
                {{ $t('contact.send') }}
            </button>
        </div>
    </div>

    <a href="https://wa.me/5518988120272" target="_blank" class="contact--whatsapp">
        <img src="/general/contact/whatsapp.png" alt="Whatsapp" />
        <span>{{ $t('contact.whatsapp') }}</span>
    </a>
  </section>
</template>

<script>




 import { Validator  } from 'vee-validate';
 import ptBR from 'vee-validate/dist/locale/pt_BR'

Validator.localize('pt_BR', {
  messages: ptBR.messages,
  attributes: {
    name: 'nome',
    email: 'e-mail',
    phone: 'telefone',
    message: 'mensagem'
  },
  custom: {
    name: {
      required: 'Por favor, digite seu nome completo.'
    },
    email: {
      required: 'Informe seu e-mail.',
      email: 'Digite um e-mail válido (ex.: nome@dominio.com).'
    },
    phone: {
      required: 'Informe seu telefone.',
      custom_phone: 'Use o formato (99) 99999-9999.'
    },
  }
})


 Validator.extend('custom_phone', {
  validate: value => {
    const regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    return { valid: regex.test(value) };
  }
});

export default {
  name: 'Contact',
  data() {
    return {
        sending: false,
        sent: false,
        form: {
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }
  },
  methods: {
    send() {
        this.$validator.validateAll().then(result => {
            console.log(result)
            if (result) {
                this.sending = true;
                setTimeout(() => {
                    this.sent = true;
                    this.sending = false;
                }, 2000);
            }
        });
    }
  }
}
</script>

<style lang="scss">
.contact {
    @apply p-8 grid gap-y-10 bg-blue;
    &--title {
        @apply text-center uppercase font-bold text-lg text-white;
    }
    &--form {
        @apply grid gap-y-4;

        &__field {
            @apply grid gap-y-1;

            label {
                @apply flex gap-x-1 items-center text-xs uppercase text-white;
                span {
                    @apply italic font-light;
                    font-size: 9px;
                }
            }
            input, textarea {
                @apply p-2 text-black bg-white rounded-md shadow transition-all duration-300 border border-transparent outline-none outline-transparent text-sm;

                &[aria-invalid="true"] {
                    @apply border-orange;
                }
            }
            small {
                @apply text-orange text-xs;
                height: 16px;
            }
            textarea {
                @apply h-36;
            }
        }
        &__button {
            @apply mt-8 flex justify-center;

            button {
                @apply block bg-orange text-white font-bold py-2 px-16 rounded-lg shadow transition-all duration-300 cursor-pointer;
                &:hover {
                    @apply bg-orange-darker;
                }
            }
        }
    }

    &--whatsapp {
        @apply flex justify-center items-center gap-x-2 underline text-white text-sm;
        img {
            @apply h-4;
        }
    }
}

@screen lg {
    .contact {
        @apply py-20 gap-y-10;
        &--title {
            @apply text-xl;
        }
        &--form {
            @apply mx-auto;
            width: 500px;

            &__field {
                @apply grid gap-y-1;

                label {
                    @apply text-sm;
                    span {
                        font-size: 10px;
                    }
                }
                input, textarea {
                    @apply text-base;
                }
            }
            &__button {
                @apply mt-8 flex justify-center;

                button {
                    @apply py-3 px-16;
                }
            }
        }

        &--whatsapp {
            @apply text-base cursor-pointer;
        }
    }

}
</style>