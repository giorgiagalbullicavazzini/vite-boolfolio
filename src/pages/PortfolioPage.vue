<script>
import { store } from '../store';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'PortfolioPage',
    data() {
        return {
            store,
        }
    },
    components: {
        ProjectCard,
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
    <section>
      <h1 class="mt-5 mb-3">Portfolio</h1>
      <div class="container">
          <div class="row my-4 gy-4">
              <div class="col col-md-4" v-for="project in store.projects">
                  <ProjectCard :project="project" />
              </div>
          </div>
      </div>
      </section>
</template>

<style scoped lang="scss">

</style>