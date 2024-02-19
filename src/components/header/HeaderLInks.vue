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
    <div class="bg-light rounded-5 p-3">
        <ul class="d-flex m-0 p-0 gap-3">
            <li v-for="link in links" class="list-unstyled"><router-link :to="{ name: link.toLowerCase() }"
                    class="text-decoration-none text-dark">{{ link }}</router-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
li:hover {
    text-decoration: underline;
}
</style>