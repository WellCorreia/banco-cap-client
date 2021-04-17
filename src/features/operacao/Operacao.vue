<template>

    <v-main class="blue lighten-5">
      <v-container class="d-flex justify-center">
        <v-card width="70%">
          <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)">
            <v-toolbar-title class="title pl-0">
              Operações
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
            v-model="dados_operacao.numeroConta"
            label="Numero Conta"
            :rules="[v => !!v || 'É necessário Informar o número da conta']"
            required
          ></v-text-field>

          <v-select
            v-model="dados_operacao.tipo"
            :items="this.tipo_operacao"
            :rules="[v => !!v || 'É requerido um tipo de operação']"
            item-text="nome"
            item-value="value"
            label="Tipo de Operação"
            required
          ></v-select>

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
            >
              Realizar Operação
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
    tipo_operacao: [
      {
        nome: 'Depósito',
        value: 'deposito',
      },
      {
        nome: 'Saque',
        value: 'saque',
      },
    ],
    dados_operacao: {},
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
      (v) => !!v || 'Número da Conta é obrigatório',
      (v) => (v && v.length < 6 && v.length > 6) || 'O número deve conter 6 digitos',
    ],
  }),
  computed: {
    ...mapState('operacao', ['operacao']),
  },
  created() {
    this.ActionListTipoOperacao();
  },
  methods: {
    ...mapActions('operacao', ['ActionDepositarSacar']),

    async save() {
      this.retiraMaskValor(this.valorSemMask);

      if (this.dados_operacao.valor > 0) {
        await this.realizarDepositoDebito();
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
      await this.ActionDepositarSacar(this.dados_operacao);
      if (this.operacao.status === 200) {
        Vue.swal.fire({
          icon: 'success',
          title: 'Salvo',
          text: this.operacao.message,
          timer: 2000,
        });
        this.$router.push({ name: 'saldo' });
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: this.operacao.message,
          timer: 2000,
        });
      }
    },

    retiraMaskValor(valor) {
      let resultado = valor.replace('R$ ', '');
      resultado = resultado.replace('.', '');
      this.dados_operacao.valor = resultado.replace(',', '.');
    },
  },
};
</script>

<style lang="scss">
.botao{
  float:right
}
</style>
