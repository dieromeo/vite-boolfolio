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
        }
    },
    methods: {

        //metodo per chiamata axios
        getProjects() {
            axios.get(this.apiUrl).then(response => {
                this.projects = response.data.data;
            })
        }
    },
    created() {
        this.getProjects();
    }
}

</script>

<template>
    <HeaderComponent />
    <MainComponent :projects="projects" />
    <FooterComponent />
</template>

<style lang="scss">
@use './style/main.scss'
</style>