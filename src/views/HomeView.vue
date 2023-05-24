<template>
  <div class="home">
    
    <Header />
    <div class="container">
      <aside>
        <ContentTop />
        <MenuBar />
      </aside>
      <main>
        <Carousel />
        <TabelaMain />
      </main>
      <aside>
        <BoletimAposta/>
      </aside>
    </div>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Headers/Header.vue'
import Carousel from '@/components/carousel/Carroulsel.vue'
import ContentTop from '@/components/ContetTop.vue'
import TabelaMain from '@/components/Table/Table.vue'
import BoletimAposta from '@/components/Boletim.vue'
import MenuBar from '@/components/MenuBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    ContentTop,
    MenuBar,
    TabelaMain,
    Carousel,
    BoletimAposta,
    Footer
  },
  computed:{
    jogo_Fut(){
        return this.$store.state.futebol_jogos
    },
    jogo_Bas(){
        return this.$store.state.basquete_jogos
      }
  }
}
</script>

<style scoped>
.home{
  background: #000000;
  overflow: auto;
}

</style>
