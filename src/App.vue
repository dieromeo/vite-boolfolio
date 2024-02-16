<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';


export default {
    components: { HeaderComponent, FooterComponent },
}

</script>

<template>
    <HeaderComponent />
    <router-view></router-view>

    <FooterComponent />
</template>

<style lang="scss">
@use './style/main.scss' as*;
</style>