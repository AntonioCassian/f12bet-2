<template>
    <div>
      <div class="jogoItem">
        <div class="jogoMais">
          <div class="nomeJogo">
            <span>Spaceman</span>
          </div>
        </div>
      <div class="jogoPos">
        <span class="tagPop">Popular</span>
      </div>
      </div>
    </div>
</template>

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
.jogoPos{
  position: absolute;
  top: 0;
  right: 0;
}
.tagPop{
  color: #fff;
  background-color: #fe9900;
  font-size: 14px;
  float: right;
  padding: 8px;
  border-radius: 0px 20px 0px 17px;
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