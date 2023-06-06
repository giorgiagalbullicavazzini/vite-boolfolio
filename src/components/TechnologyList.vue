<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'TechnologyList',
    data() {
        return {
            store,
            technologies: []
        }
    },
    methods: {
        getTechnologies() {
            axios.get(`${this.store.api}/technologies`)
                .then((response) => {
                    this.technologies = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getTechnologies();
    }
}
</script>
<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Seleziona una tecnologia
        </button>
        <ul class="dropdown-menu">
            <li :key="technology.id" v-for="technology in technologies">
                <router-link :to="{name :'technology', params:{slug: technology.slug}}" class="dropdown-item">{{ technology.name }}</router-link>
            </li>
        </ul>
    </div>
</template>