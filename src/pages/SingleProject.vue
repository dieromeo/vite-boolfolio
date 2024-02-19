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
                if (response.data.data) {
                    this.project = response.data.data;
                    console.log(response.data.data);
                } else {
                    this.$router.push({ path: '/page-not-found' })
                }
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
            <p><router-link :to="{ name: 'progetti', query: { page: store.api.currentPage, key: store.searchKey } }">Torna ai
                    progetti</router-link></p>
        </div>
    </main>
</template>