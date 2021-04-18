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

          <v-card-text width="70%" row>
            <div class="justify-center">
              <v-form
              ref="form"
              @submit.prevent="save()"
              v-model="valid"
              lazy-validation
            >
            <v-text-field
              v-model="dados.numero"
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

      <v-container class="d-flex justify-center">
      <v-card width="70%" row v-if="status === 200">
        <v-card-title class="mt-8">
            <p class="ml-3">
             Número da Conta: {{saldo.conta.numero}}
            </p>
            <p class="ml-3">
              Saldo atual é: R${{saldo.conta.valor}}
            </p>
          </v-card-title>

        <v-card-text>
          <div class="font-weight-bold ml-8 mb-2">
            Ultimas Operações
          </div>

          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              v-for="transacao in saldo.conta.transacoes"
              :key="transacao.id"
              :color="'green'"
              small
            >
              <div>
                <div class="font-weight-normal">
                  <strong>{{transacao.tipo}}: </strong>
                   {{ transacao.created_at | formatDate }}
                </div>
                <div><strong>Valor: </strong>R${{ transacao.valor }}</div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>

      </v-container>
    </v-main>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import Vue from 'vue';
import moment from 'moment';
import VueSweetalert2 from 'vue-sweetalert2';

Vue.use(VueSweetalert2);

/*eslint-disable */
Vue.filter('formatDate', (value) => {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm');
  }
});

export default {
  data: () => ({
    dados: {},
    status: null,
    valid: false,
    numeroRules: [
      (v) => !!v || 'Número da conta é obrigatório',
      (v) => (v && v.length === 6) || 'O número deve conter 6 digitos',
      (v) => (v && !isNaN(v)) || 'O campo só deve conter números',
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
      if (this.$refs.form.validate()) {
        await this.getSaldo();
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: 'Preencha os campos obrigatórios',
          timer: 2000,
        });
      }
    },

    async getSaldo() {
      await this.ActionGetSaldo(this.dados);
      if (this.saldo.status === 200) {
        this.status = this.saldo.status;
        Vue.swal.fire({
          icon: 'success',
          title: 'Consultado',
          text: this.saldo.message,
          timer: 2000,
        });
      } else {
        Vue.swal.fire({
          icon: 'error',
          title: 'Erro',
          text: this.saldo.message,
          timer: 2000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
  #logo {
    padding-right: 20px;
  }
  .class {
    padding: 20px;
  }
  .valor-conta {
    color: #10acdb;
  }
</style>
