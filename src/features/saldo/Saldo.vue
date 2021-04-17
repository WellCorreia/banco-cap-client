<template>

    <v-main class="blue lighten-5">
      <v-container class="d-flex justify-center">
        <v-card width="70%">
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="title pl-0">
              Saldo da Conta
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
            v-model="dados_operacao.numero"
            label="Numero da Conta"
            :rules=numeroRules
            required
          ></v-text-field>

            <v-btn
              color="success"
              class="mr-4 botao"
              type="submit"
            >
              Consultar Saldo
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
    dados_operacao: {
      tipo_operacao: {},
    },
    valid: false,
    valorSemMask: null,
    numeroRules: [
      (v) => !!v || 'Número da Conta é obrigatório',
      (v) => (v && v.length < 6 && v.length > 6) || 'O número deve conter 6 digitos',
    ],
  }),
  computed: {
    ...mapState('conta', ['saldo']),
  },
  created() {
  },
  methods: {
    ...mapActions('conta', ['ActionGetSaldo']),

    async save() {
      this.retiraMaskValor(this.valorSemMask);
      this.dados_operacao.user_id = this.user.id;
      this.dados_operacao.tipo_operacao_id = this.dados_operacao.tipo_operacao.id;

      if (this.dados_operacao.valor > 0) {
        if (this.dados_operacao.tipo_operacao.slug === 'transferencia') {
          await this.realizarTransferencia();
        } else {
          await this.realizarDepositoDebito();
        }
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'É necessário informar um maior maior que zero.',
          timer: 2000,
        });
      }
    },

    async realizarDepositoDebito() {
      await this.ActionGetSaldo(this.dados);
      if (this.conta.status === 'success') {
        Vue.swal.fire({
          icon: 'success',
          title: 'Salvo',
          text: this.conta.message,
          timer: 2000,
        });
        this.$router.push({ name: 'saldo' });
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: this.conta.message,
          timer: 2000,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.botao{
  float:right,
}
</style>
