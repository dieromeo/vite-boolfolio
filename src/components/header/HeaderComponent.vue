<script>
export default {
    name: 'headerComponent'
}
</script>

<template>
    <header>
        <!-- navbar -->
        <nav class="bg-dark text-white border-bottom border-body">
            <div class="container d-flex justify-content-between align-items-center ">
                <h1 class="py-3 m-0">Progetti</h1>
                <ul class="d-flex m-0">
                    <li class="list-unstyled"><router-link :to="{ name: 'home' }"
                            class="text-decoration-none text-white ms-3">Home</router-link></li>
                    <li class="list-unstyled"><router-link :to="{ name: 'projects' }"
                            class="text-decoration-none text-white ms-3">Progetti</router-link></li>
                    <li class="list-unstyled"><router-link :to="{ name: 'about' }"
                            class="text-decoration-none text-white ms-3">About</router-link></li>
                </ul>
            </div>

        </nav>
    </header>
</template>

<style lang="scss" scoped>
header ul li:hover {
    text-decoration: underline;
}
</style>