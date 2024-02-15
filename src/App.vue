<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import MainComponent from './components/main/MainComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';
import axios from 'axios';

export default {
    components: { HeaderComponent, MainComponent, FooterComponent },
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/portfolio',
            projects: [],
            currentPage: 1,
            lastPage: 0
        }
    },
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
        next() {
            if (this.currentPage < this.lastPage) {
                this.currentPage++;
            }
            this.getProjects();
        },
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
    <HeaderComponent />
    <MainComponent :projects="projects" :currentPage="currentPage" />
    <div class="text-center">
        <a href="#" class="btn btn-dark text-light me-3 px-3 rounded-5" @click="prev()">Prev</a>
        <a href="#" class="btn btn-dark text-light px-3 rounded-5" @click="next()">Next</a>
    </div>
    <FooterComponent />
</template>

<style lang="scss">
@use './style/main.scss' as*;
</style>