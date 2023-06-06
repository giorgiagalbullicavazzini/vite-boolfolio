<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.api}/types`)
                .then((response) => {
                    this.types = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    },
    created() {
        this.getTypes();
    }
}
</script>
<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Seleziona un tipo
        </button>
        <ul class="dropdown-menu">
            <li :key="type.id" v-for="type in types">
                <router-link :to="{name :'type', params:{slug: type.slug}}" class="dropdown-item">{{ type.name }}</router-link>
            </li>
        </ul>
    </div>
</template>