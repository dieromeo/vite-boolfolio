<script>
import store from '../../store';

export default {
    name: 'Search',
    data() {
        return {
            store
        }
    },
    methods: {
        search() {
            this.store.api.currentPage = 1;
            this.$router.push({
                name: 'progetti',
                query: { page: 1, key: this.store.searchKey }
            })
            this.$emit('searchProject');
        }
    },
    emits: ['searchProject']
}
</script>

<template>
    <form action="" @submit.prevent="search">
        <div class="form-floating mb-3">
            <input type="text" class="form-control" id="searchProject" placeholder="cerca" v-model="store.searchKey">
            <label for="searchProject">Cerca un progetto</label>
            <button class="btn btn-primary m-3">Cerca</button>
        </div>
    </form>
</template>