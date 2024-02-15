<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'mainComponent',
    props: ['projects'],
    components: { ProjectCard },
}
</script>

<template>
    <main>
        <div class="container py-5">
            <div class="row g-4">
                <div class="col col-md4 col-lg-3" v-for="project in projects">
                    <ProjectCard :title="project.title" :description="project.description" />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    height: 100%;
}
</style>