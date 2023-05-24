<template>
    <section class="section-menu">
        <Carousel />
        <article class="link">
            <span>Cassino</span>
          <div class="line-menu">
            <div class="line-winner">
              <div class="filter">
                <div class="comp-filt">
                  <span>Filtrar</span>
                </div>

                <div class="menu-filter">
                  <div class="left border-item"><</div>
                  <ul class="men">
                    <li class="men-item border-item">
                      <span>Populares</span>
                    </li>
                    <li class="men-item border-item">
                      <span>Em Alta</span>
                      </li>
                    <li class="men-item border-item">
                      <span>Lançamentos</span>
                    </li>
                  </ul>
                  <div class="left right">></div>
                </div>

                <div class="form">
                  <form action="" class="form-content">
                    <input type="text" placeholder="Buscar">
                    <button>II</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

</template>

<script>
    import Carousel from '../carousel/Carroulsel.vue'
export default {
    components:{
        Carousel
    }
}
</script>

<style scoped>
.section-menu{
  position: relative;
}
.link{
  position: absolute;
  width: 100%;
  bottom: 4px;
}
.link> span{
    text-align: center;
    position: relative;
    background: #36373c;
    right: 50%;
    left: 48%;
    top: 0;
    border-top: 2px solid #c9f73c;
    border-radius: 19px 18px 0px 0px;
    border-left: 2px solid #c9f73c;
    border-right: 2px solid #c9f73c;
    line-height: 18px;
    padding: 4px 20px;
    z-index: 8;
}
.link > span{
  font-size: 11px;
  font-weight: 900;
  text-transform: uppercase;
}

.line-menu{
  background: #36373c;
  border-top: 2px solid #c9f73c;
  width: 100%;
  position: fixed;
  z-index: 5;
}
.line-winner{
  background: #36373c;
  position: fixed;
  width: 100%;
}

.filter{
  display: flex;
  justify-content: space-around;
}
.comp-filt{
  width: 200px;
  height: 30px;
  line-height: 24px;
  border: 2px solid #c9f73c; 
  border-radius: 40px;
  text-align: center;
  margin-top: 3px;
  margin-top: 3px;
}
.comp-filt > span{
  font-size: 11px;
  text-transform: uppercase;
  font-weight: bold;
}
.menu-filter{
  background: #36373c;
  display: flex;
}
.men{
  display: flex;
  justify-content: space-bettwen;
  text-align: center;
  line-height: 40px;
}
.border-item{
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}
.men-item{
  width: 187px;
  font-size: 12px; 
}
.left{
  line-height: 40px;
  width: 25px;
  text-align: center;
  background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
  color: #000;
}
.right{

}
.form{
  margin-top: 5px;
}
.form-content{
  width: 100%;
  position: relative;
}
.form-content button{
  position: absolute;
  top: 4px;
  right: 6px;
  z-index: 9999;
  width: 20px;
  height: 20px;
}
input{
  background: #31343b;
  border-radius: 20px;
  border: none;
  height: 30px;
  font-size: 11px;
  width: 100%;
  color: #fff;
  padding: 0px 0px 0px 14px;
}
</style>