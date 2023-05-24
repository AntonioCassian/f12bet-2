<template>
  <div class="aovivo">
    <ComHeader></ComHeader>
    <div class="container">
      <aside>
        <MenuBar />
      </aside>

      <main>
        <Dropdown />
      </main>

      <aside>
        <Boletim />
      </aside>
    </div>
    <Footer />
  </div>
</template>




<script>
import ComHeader from '@/components/Headers/Header.vue'
import MenuBar from '@/components/MenuBar.vue'
import Footer from '@/components/Footer.vue'
import Boletim from '@/components/Boletim.vue'
import Dropdown from '@/components/Dropdown/DropDown.vue'
export default {
    name: 'AovivoView',
    components: {
        ComHeader, 
        Dropdown,
        Boletim,
        MenuBar,
        Footer
    }
}
</script>

<style scoped>
.aovivo{
  background: #000;
}
</style>
