<script>
import HeaderComponent from './components/header/HeaderComponent.vue';
import MainComponent from './components/main/MainComponent.vue';
import FooterComponent from './components/footer/FooterComponent.vue';

export default {
    components: { HeaderComponent, MainComponent, FooterComponent }
}

</script>

<template>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
</template>

<style lang="scss">
@use './style/main.scss'
</style>