<script>
import { store } from '../store';
import ProjectCard from './Main/ProjectCard.vue';

export default {
    name: 'AppMain',
    data() {
        return {
            store,
        }
    },
    components: {
        ProjectCard,
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in store.projects">
                    <ProjectCard :project="project" />
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>