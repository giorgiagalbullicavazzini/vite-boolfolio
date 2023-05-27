<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
  // methods: {
  //   getProjects() {
  //     axios.get(this.store.api + this.store.apiUrls.projects)
  //     .then((response) => {
  //       this.store.projects = response.data.results;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //   }
  // },
  // created() {
  //   this.getProjects();
  // }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>