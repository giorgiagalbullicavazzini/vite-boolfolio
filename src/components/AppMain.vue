<script>
export default {
    name: 'AppMain',
    props: {
        data: Object
    }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="project in data">
                    <div class="card">
                        <img :src="project.image" class="card-img-top" :alt="project.title">
                        <div class="card-body">
                            <h5 class="card-title">{{ project.title }}</h5>
                            <h6 class="card-title">{{ project.status }} || {{ project.type.name }}</h6>
                                <ul class="list-unstyled list-group list-group-horizontal gap-2">
                                    <li v-for="technology in project.technologies">{{ technology.name }}</li>
                                </ul>
                            <p class="card-text">{{ project.description }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped lang="scss">

</style>