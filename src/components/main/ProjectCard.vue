<script>
export default {
    name: 'ProjectCard',
    props: ['title', 'description', 'slug'],
}
</script>

<template>
    <div class="card d-flex h-100">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <router-link :to="{ name: 'single-project', params: { slug: slug } }"
                class="btn btn-primary">Dettaglio</router-link>
        </div>
    </div>
</template>