<script>
import axios from 'axios';
import ProjectCard from '../components/main/ProjectCard.vue';
import store from '../store.js';
import Search from '../components/main/Search.vue';

export default {
    name: 'ProjectList',
    data() {
        return {
            store,
            projects: [],
            errors: []
        }
    },
    components: { ProjectCard, Search },
    methods: {

        //metodo per chiamata axios
        getProjects() {
            axios.get(this.store.api.baseUrl, {
                params: {
                    page: this.store.api.currentPage,
                    key: this.store.searchKey
                }
            }).then(response => {
                this.projects = response.data.data.data;
                this.store.api.lastPage = response.data.data.last_page;
            }).catch(error => {
                console.log(error);
                this.projects = [];
                console.log(error.response.data.message)
                this.errors = error.response.data.message
            })
        },

        //metodo per pagina successiva
        next() {
            if (this.store.api.currentPage < this.store.api.lastPage) {
                this.store.api.currentPage++;
                this.$router.push({
                    name: 'progetti',
                    query: { page: this.store.api.currentPage, key: this.store.searchKey }
                })
            }
            this.getProjects();
        },

        //metodo per pagina precedente
        prev() {
            if (this.store.api.currentPage > 1) {
                this.store.api.currentPage--;
                this.$router.push({
                    name: 'progetti',
                    query: { page: this.store.api.currentPage, key: this.store.searchKey }
                })
            }
            this.getProjects();
        }
    },
    created() {
        this.store.api.currentPage = this.$route.page ?? 1
        this.store.searchKey = this.$route.query.key ?? null
        this.getProjects();
    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <Search @searchProject="getProjects" />
            <div class="row g-4">
                <div v-if="errors.length > 1">{{ errors }}</div>
                <div class="col col-md4 col-lg-3" v-for="project in projects">
                    <ProjectCard :title="project.title" :description="project.description" :slug="project.slug" />
                </div>
            </div>
            <div class="text-center">
                <div class="mt-5">
                    <a href="#" class="btn btn-dark text-light me-3 px-3 rounded-5" @click="prev()"
                        v-if="store.api.currentPage > 1">Prev</a>
                    <a href="#" class="btn btn-dark text-light px-3 rounded-5" @click="next()"
                        v-if="store.api.currentPage < store.api.lastPage">Next</a>
                </div>
            </div>
        </div>
    </main>
</template>