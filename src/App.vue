<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  methods: {
    getProjects() {
      axios.get(this.store.api + this.store.apiUrls.projects)
      .then((response) => {
        this.store.projects = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getProjects();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style lang="scss">
  //versione 1 - inclusione via app.vue
  // @use './assets/scss/main.scss' as *;
</style>