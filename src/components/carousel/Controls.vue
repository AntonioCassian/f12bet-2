<template>
    <div class="controls">
        <button class="carousel-control left" @click="$emit('prev')">Prev</button>
        <button class="carousel-control right" @click="$emit('next')">Next</button>
    </div>
</template>
<script>
export default {
    name: 'ControlsCarousel',
    emits: ['prev', 'next']
}
</script>
<style scoped>
    .carousel-control{
        background: rgba(0,0,0, .5);
        border: none;
        position: absolute;
        height: 50px;
        width: 70px;
        top: calc(50% - 25px);
        color: #f3f3f3;
        cursor: pointer;
    }
    .left{
        left: 0;
    }
    .right{
        right: 0;
    }
</style>