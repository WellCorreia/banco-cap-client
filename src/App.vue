<template>
  <v-app>
    <navbar-component-vue>
      <router-view/>
    </navbar-component-vue>
  </v-app>
</template>

<script>
import NavbarComponentVue from './components/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponentVue,
  },
};
</script>
