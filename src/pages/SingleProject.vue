<script>
import axios from 'axios';
import store from '../store';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: {},
        }
    },
    methods: {
        getProject() {
            axios.get(this.store.api.baseUrl + '/' + this.$route.params.slug).then(response => {
                this.project = response.data.data;
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