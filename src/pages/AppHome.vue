<script>
import "@fontsource/playfair-display";
export default {
    name: 'AppHome'
}
</script>

<template>
    <main>
        <div class="container row mx-auto">
            <div class="left col-8 ">
                <h1>Web Developer</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum laudantium dolorum at tempora non
                    voluptate eius aspernatur? Non placeat corrupti optio ducimus quos incidunt blanditiis! Consequatur
                    harum molestias possimus voluptate.</p>
            </div>
            <div class="right col-4 p-4 my-auto">
                <img src="https://thumbs.dreamstime.com/b/uomo-grigio-del-segnaposto-della-foto-persona-generica-siluetta-grigia-dell-su-un-fondo-bianco-144511705.jpg"
                    alt="" class="img-fluid">
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
.container {
    margin: 50px 0;

    h1 {
        font-size: 70px;
        font-family: "Playfair Display";
        font-weight: bolder;
        background: -webkit-linear-gradient(158deg, rgba(149, 158, 156, 1) 32%, rgba(14, 14, 14, 1) 67%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    p {
        padding-top: 30px;
    }
}
</style>