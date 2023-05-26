<script>
import HelloApp from './components/HelloApp.vue';
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      api: 'http://127.0.0.1:8000/api',
      apiUrls: {
        projects: '/projects'
      },
      projects: []
    }
  },
  components: {
    HelloApp
  },
  methods: {
    getProjects() {
      axios.get(this.api + this.apiUrls.projects)
      .then((response) => {
        this.projects = response.data.results;
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
  <HelloApp />
  <div class="container">
    {{ console.log(this.projects) }}
  </div>
</template>

<style lang="scss">
  //versione 1 - inclusione via app.vue
  // @use './assets/scss/main.scss' as *;
</style>