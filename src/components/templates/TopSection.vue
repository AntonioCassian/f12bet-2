<template>
    <section>
          <div class="line-principal">
          <div>
            <span>{{ top }}</span>
            <p class="conted"></p>
          </div>
          <span>Show All</span>
        </div>
          <slot />
        </section>
</template>

<script>
export default{
    props:['top',]
}
</script>



<style scoped>
section{
  color: #fff;
  margin-top: 90px;
}
.line-principal{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #c9f73c;
}
.conted{
  content: '';
  height: 3px;
  background: #c9f73c;
}
.jogoPos{
  position: absolute;
  top: 0px;
  right: 0px;
}

</style>