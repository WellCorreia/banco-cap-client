<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="blue lighten-3"
      flat
    >
      <v-container class="py-0 fill-height">
        <!-- <v-card-media
        src="../../assets/logocap.png"
        height="200px">
        </v-card-media> -->
        <div id="logo">
          <img src="../assets/logocap.png" height="50px">
        </div>

        <v-btn text :to="{ name: 'conta' }">
          Conta
        </v-btn>

        <v-btn text :to="{ name: 'saldo' }">
          Saldo
        </v-btn>

        <v-btn text :to="{ name: 'operacao' }">
          Operações
        </v-btn>

        <v-spacer></v-spacer>

      </v-container>
    </v-app-bar>

    <router-view/>

  </v-app>
</template>

<script>

export default {
};
</script>
