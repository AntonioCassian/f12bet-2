<template>
    <div class="carousel">
        <div class="caroulsel-inner">
            <Indicadors 
            :total="slides.length" 
            :current-index="currentSlide"
            @switch="switchSlide($event)"
            ></Indicadors>
             <carousel-item 
                v-for="(slide, index) in slides" 
                :key="`item-${index}`"
                :slide="slide"
                :current-slide="currentSlide"
                :index="index"
                :direction="direction"
                ></carousel-item>
                <Controls @prev="prev" @next="next"></Controls>
        </div>
    </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue'
import Controls from './Controls.vue'
import Indicadors from './Indicadores.vue'
    export default {
        name: 'CarolseApp',
        props: ['slides'],
        components: {CarouselItem, Controls, Indicadors},
        data: () => ({
            currentSlide: 0,
            slideInterval: null,
            direction: 'right'
        }),
        methods:{
            setCurrentSlide(index) {
                this.currentSlide= index;
            },
            prev(step = -1){
                const index = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length -1;
                this.setCurrentSlide(index);
                this.direction = "left"
                this.startSlideTimer();
            },
            _next(step = 1){
                const index = this.currentSlide < this.slides.length -1 ? this.currentSlide + step : 0;
                this.setCurrentSlide(index);
                this.direction = "right"
            },
            next(step = 1) {
                this._next(step);
                this.startSlideTimer();
            },
            startSliderTimer() {
                this.stopSlideTimer();
                this.slideInterval = setInterval(() => {
                    this._next();
                }, 5000)
            },
            stopSlideTimer(){
                clearInterval(this.slideInterval);
            },
            switchSlide(index){
                const step = index - this.currentSlide
                if(step > 0){
                    this.next(step)
                } else {
                    this.prev(step)
                }
            }
        },
        mounted() {
            this.startSlideTimer()
        },
        beforeUnmount() {
            this.stopSlideTimer();
        },
        
    }
</script>

<style scoped>
    .carousel{
        display: flex;
        justify-content: center;
    }
    .caroulsel-inner{
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
    }
</style>
