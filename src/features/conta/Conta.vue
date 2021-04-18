<template>

    <v-main class="blue lighten-5">
      <v-container class="d-flex justify-center">
        <v-card width="70%">
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="title pl-0">
              Criar Conta
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>

        <v-card-text width="70%" >
          <div class="justify-center">
            <v-form
            ref="form"
            @submit.prevent="save()"
            v-model="valid"
            lazy-validation
          >

          <v-text-field
            v-model="dados.numero"
            label="Numero Conta"
            :rules=numeroRules
            required
          ></v-text-field>

            <v-text-field
              v-model.lazy="valorSemMask"
              label="Valor"
              v-money="valor"
              required
            ></v-text-field>

            <v-btn
              color="success"
              class="mr-4 botao"
              type="submit"
            > Criar Conta
            </v-btn>
          </v-form>
          </div>
        </v-card-text>
      </v-card>
      </v-container>
    </v-main>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import Vue from 'vue';
import money from 'v-money';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);
Vue.use(money, { precision: 4 });

export default {
  data: () => ({
    dados: {},
    valid: false,
    valorSemMask: null,
    valor: {
      decimal: ',',
      thousands: '.',
      prefix: 'R$ ',
      suffix: '',
      precision: 2,
      masked: false, /* doesn't work with directive */
    },
    numeroRules: [
      (v) => !!v || 'Número da conta é obrigatório',
      (v) => (v && v.length === 6) || 'O número deve conter 6 digitos',
      // eslint-disable-next-line no-restricted-globals
      (v) => (v && !isNaN(v)) || 'O campo só deve conter números',
    ],
  }),
  computed: {
    ...mapState('conta', ['conta']),
  },
  created() {

  },
  methods: {
    ...mapActions('conta', ['ActionCriarConta']),

    async save() {
      if (this.$refs.form.validate()) {
        this.retiraMaskValor(this.valorSemMask);

        if (this.dados.valor > 0) {
          await this.criarConta();
        } else {
          Vue.swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'É necessário informar um maior maior que zero.',
            timer: 2000,
          });
        }
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Preencha os campos obrigatórios',
          timer: 2000,
        });
      }
    },

    async criarConta() {
      await this.ActionCriarConta(this.dados);
      if (this.conta.status === 201) {
        Vue.swal.fire({
          icon: 'success',
          title: 'Salvo',
          text: this.conta.message,
          timer: 2000,
        });
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: this.conta.message,
          timer: 2000,
        });
      }
    },

    retiraMaskValor(valor) {
      let resultado = valor.replace('R$ ', '');
      resultado = resultado.replace('.', '');
      this.dados.valor = resultado.replace(',', '.');
    },
  },
};
</script>

<style lang="scss">
.botao{
  float:right
}
</style>
