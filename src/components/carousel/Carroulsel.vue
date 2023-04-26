<template>
    <Carousel :slides="slides"></Carousel>
</template>

<script>
import Carousel from "./Carolse.vue"
    export default{
        name: 'CarouselApp',
        components: {Carousel},
        data:() => ({
            slides:[
                "https://f12.bet/uploads/6421ff4d9441e.png",
                "https://f12.bet/uploads/641b4dd2b53fe.png"
                
            ]
        })
    }
</script>

<style scoped>

</style>