<script>
import HeaderLInks from './HeaderLInks.vue';

export default {
    name: 'headerComponent',
    components: { HeaderLInks }
}
</script>

<template>
    <header>
        <!-- navbar -->
        <nav class="bg-dark text-white border-bottom border-body">
            <div class="container d-flex justify-content-between align-items-center ">
                <h1 class="py-3 m-0">Progetti</h1>
                <HeaderLInks />
            </div>

        </nav>
    </header>
</template>
