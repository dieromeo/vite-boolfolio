<script>
export default {
    name: 'HeaderLinks',
    data() {
        return {
            links: ['Home', 'Progetti', 'About']
        }
    }
}
</script>

<template>
    <ul class="d-flex m-0">
        <li v-for="link in links" class="list-unstyled"><router-link :to="{ name: link.toLowerCase() }"
                class="text-decoration-none text-white ms-3">{{ link }}</router-link>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
li:hover {
    text-decoration: underline;
}
</style>