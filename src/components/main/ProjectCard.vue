<script>
export default {
    name: 'ProjectCard',
    props: ['title', 'description'],
}
</script>

<template>
    <div class="card d-flex h-100">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ description }}</p>
            <a href="#" class="btn btn-primary">Dettaglio</a>
        </div>
    </div>
</template>