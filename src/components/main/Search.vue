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
            <button class="btn btn-primary">Cerca</button>
        </div>
    </form>
</template>