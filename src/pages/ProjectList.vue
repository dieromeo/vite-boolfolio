<script>
import axios from 'axios';
import ProjectCard from '../components/main/ProjectCard.vue';

export default {
    name: 'ProjectList',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/portfolio',
            projects: [],
            currentPage: 1,
            lastPage: 0
        }
    },
    components: { ProjectCard },
    methods: {

        //metodo per chiamata axios
        getProjects() {
            axios.get(this.apiUrl, {
                params: {
                    page: this.currentPage
                }
            }).then(response => {
                this.projects = response.data.data.data;
                this.lastPage = response.data.data.last_page;
                console.log(this.lastPage)
            })
        },

        //metodo per pagina successiva
        next() {
            if (this.currentPage < this.lastPage) {
                this.currentPage++;
            }
            this.getProjects();
        },

        //metodo per pagina precedente
        prev() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
            this.getProjects();
        }
    },
    created() {
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <div class="row g-4">
                <div class="col col-md4 col-lg-3" v-for="project in projects">
                    <ProjectCard :title="project.title" :description="project.description" :slug="project.slug" />
                </div>
            </div>
            <div class="text-center">
                <div class="mt-5">
                    <a href="#" class="btn btn-dark text-light me-3 px-3 rounded-5" @click="prev()">Prev</a>
                    <a href="#" class="btn btn-dark text-light px-3 rounded-5" @click="next()">Next</a>
                </div>
            </div>
        </div>
    </main>
</template>