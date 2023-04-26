<template>
    <div class="indicadors">
        <button 
        class="indicadors-item" v-for="(item, index) in total" 
        :key="index"
        :class="{active: currentIndex === index}"
        @click="$emit('switch', index)"
        ></button>
    </div>
</template>

<script>
export default {
    name: 'ControlsCarousel',
    emits: ['switch'],
    props: ['total', "currentIndex"],
}
</script>

<style scoped>
.indicadors {
    position: absolute;
    transform: tranlateX(-550);
    left: 50%;
    bottom: 1.5em;
    z-index: 2;
}

.indicadors-item{
    width: 15px;
    height: 15px;
    border: none;
    background: #fff;
    opacity: 0.5;
    margin: 0.2em;
    border-radius: 50%;
    cursor: pointer;
}
.active{
    opacity: 1;
}
</style>