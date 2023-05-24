<template>
    <div>
      <div class="jogoItem">
        <div class="jogoMais">
          <div class="nomeJogo">
            <span>Luva Super Goal</span>
          </div>
        </div>
      <div class="jogoPos">
        <span class="tagNovo">Novo</span>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  name:'jogoNovo'
}
</script>
<style scoped>
.jogoItem{
  margin: 10px;
  height: 200px;
  width: 200px;
  position: relative;
}

.jogoMais{
  height: 100%;
  width: 100%;
  background-Color: #ccc;
  border-radius: 22px;
}
.tagNovo{
  color: #fff;
  background-color: #fe0000;
  font-size: 14px;
  float: right;
  padding: 8px;
  border-radius: 0px 20px 0px 17px;
}
.jogoPos{
  position: absolute;
  top: 0;
  right: 0;
}
.nomeJogo >span{
  position: absolute;
  top: 15px;
  left: 67px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  display: none;
  opacity: 0;
}
.jogoMais:hover{
  background: rgba(0, 0, 0, 0.75) url(http://localhost:8080/img/playhover.79441bb3.png);
  background-repeat: no-repeat;
  background-size: 90px;
  position: absolute;
  top: 0;
  background-position: center;
  
}
.jogoMais:hover .nomeJogo > span{
  display: block;
  opacity: 1;
}
</style>