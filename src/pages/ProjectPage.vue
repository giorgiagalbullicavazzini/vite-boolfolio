<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'ProjectPage',
    data() {
        return {
            store,
        }
    },
    methods: {
      getProjects() {
        axios.get(this.store.api + this.store.apiUrls.projects + '/' + this.$route.params.slug)
        .then((response) => {
          this.store.project = response.data.results;
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
    <section v-if="this.store.project">
        <div class="container">
            <h1 class="mt-5 mb-3">{{ this.store.project.title }}</h1>
            <h2>
                <router-link :to="{ name: 'type', params: {slug: this.store.project.type.slug} }" class="nav-link">
                    Type: {{ this.store.project.type.name }}
                </router-link>
            </h2>
            <p>{{ this.store.project.description }}</p>
            <hr>
            <div class="my-3" v-if="this.store.project.technologies.length">
                <span class="badge text-bg-warning me-1" v-for="technology in this.store.project.technologies">{{ technology.name }}</span>
            </div>
        </div>
    </section>
    <section v-else>
        <div class="container">
            <p>404</p>
        </div>
    </section>
</template>

<style scoped lang="scss">

</style>