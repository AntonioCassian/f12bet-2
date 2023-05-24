<template>
    <div class="cassino">
      <ComHeader />
      <HeaderNav />
      <main class="principal">
        <div class="container-min">
          <Section top="Popular(43)">
            <div class="jogos">
              <jogoPrin />
              <div class="listJogo">
                <JogoNovo/>
                <JogoNovo/>
                <JogoOrig/>
                <JogoNovo/>
                <JogoPop/>
                <JogoPop/>
                <JogoNovo/>
                <JogoPop/>
              </div>
            </div>
          </Section>
              
          <Section top="Em Alta(22)">
            <div class="jogos">
              <jogoPrin />
              <div class="listJogo">
                <JogoNovo/>
                <JogoNovo/>
                <JogoOrig/>
                <JogoNovo/>
                <JogoPop/>
                <JogoPop/>
                <JogoNovo/>
                <JogoPop/>
              </div>
            </div>
          </Section>

          <Section top="Lançamentos(33)">
            <div class="jogos">
              <jogoPrin />
              <div class="listJogo">
                <JogoNovo/>
                <JogoNovo/>
                <JogoOrig/>
                <JogoNovo/>
                <JogoPop/>
                <JogoPop/>
                <JogoNovo/>
                <JogoPop/>
              </div>
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
</template>
  
<script>
  import ComHeader from '@/components/Headers/Header.vue'
  import  HeaderNav from '@/components/Headers/HeaderPag.vue'
  import Section from '@/components/templates/TopSection.vue'
  import JogoPrin from '@/components/Jogo/JogoPrincipal.vue'
  import JogoNovo from '@/components/Jogo/JogoItemNovo.vue'
  import JogoOrig from '@/components/Jogo/JogoItemOrig.vue'
  import JogoPop from '@/components/Jogo/JogoItemPopular.vue'
  import Footer from '@/components/Footer.vue'
  export default {
      name: 'CassinoView',
      components: {
          ComHeader,
          HeaderNav,
          Section,
          JogoPrin,
          JogoNovo,
          JogoOrig,
          JogoPop,
          Footer
      }
  }
</script>
  
<style scoped>
.cassino{
  background: #000;
  color: #fff;
}
.principal{
  margin-top: 50px;
}
.container-min{
  margin: 0px 20px 0px 20px;
}

.jogos{
  display: flex;
}

.listJogo{
  display: flex;
  align-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
}
</style>