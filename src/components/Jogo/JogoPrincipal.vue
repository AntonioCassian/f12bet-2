<template>
  <div class="jogoPopular">
    <div class="jogoMais">
      <div class="nomeJogo">
        <span>Luva Melhor do Mundo</span>
      </div>
  </div>
  <div class="jogoPos">
    <span class="jogoTag">Popular</span>
  </div>
</div>
</template>

<style scoped>
.jogoPopular{
  margin: 10px;
  width: 750px;
  height: 430px;
  position: relative;
}
.jogoMais{
  height: 100%;
  width: 100%;
  background-Color: #ccc;
  border-radius: 22px;
}
.jogoPos{
  position: absolute;
  top: 0px;
  right: 0px;
}
.jogoTag{
  color: #fff;
  background-color: #fe9900;
  font-size: 14px;
  float: right;
  padding: 8px;
  border-radius: 0px 20px 0px 17px;
}
.nomeJogo >span{
  position: absolute;
  top: 60px;
  left: 123px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  display: none;
  opacity: 0;
}
.jogoMais:hover{
  background: rgba(0, 0, 0, 0.75) url(http://localhost:8080/img/playhover.79441bb3.png);
  background-repeat: no-repeat;
  background-size: 174px;
  position: absolute;
  top: 0;
  background-position: center;
  
}
.jogoMais:hover .nomeJogo > span{
  display: block;
  opacity: 1;
}

</style>