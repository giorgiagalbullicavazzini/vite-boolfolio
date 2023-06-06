<script>
export default {
    name: 'ProjectCard',
    props: {
        project: Object,
    }
}
</script>

<template>
    <main>
        <div class="card">
            <img :src="project.image" class="card-img-top" :alt="project.title">
            <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <h6 class="card-title">{{ project.status }}</h6>
                <h6 class="card-title" v-if="project.type">{{ project.type.name }}</h6>
                <div class="my-3" v-if="project.technologies">
                    <span class="badge text-bg-warning me-1" v-for="technology in project.technologies">{{ technology.name }}</span>
                </div>
                <p class="card-text">{{ project.description }}</p>
                <router-link :to="{ name: 'project', params: { slug: project.slug } }" class="btn btn-primary">
                    Details
                </router-link>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>