<script>
import axios from 'axios';

export default {
    name: 'SingleProject',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/project',
            project: {},
        }
    },
    methods: {
        getProject() {
            axios.get(this.apiUrl + '/' + this.$route.params.slug).then(response => {
                this.project = response.data.data;
                console.log(this.project);
            })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
        </div>
    </main>
</template>