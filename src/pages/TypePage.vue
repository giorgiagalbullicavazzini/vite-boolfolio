<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: "TypePage",
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
            type: null
        }
    },
    methods: {
        getType() {
            axios.get(`${this.store.api}/types/${this.$route.params.slug}`)
                .then((response) => {
                    this.type = response.data.results;
                })
        }
    },
    created() {
        this.getType();

        this.$watch(
            () => this.$route.params,
            (/* toParams, previousParams */) => {
                // console.log({toParams})
                //console.log({previousParams})
                this.getType();
            }
        )
    }
}
</script>


<template>
    <section v-if="type">
        <div class="container">
            <h1 class="mt-5 mb-3">Type Page: {{ type.name }}</h1>

            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in type.projects">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped></style>