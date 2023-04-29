<template>
    <div class="boletim">
        <div class="title">
            <span>A=-</span>
            <span>Boletim de Aposta</span>
        </div>
        <div>
            <table>
                <tbody>
                    <div class="jogo" v-for="aposta in boletim" :key="aposta.id">
                        <tr class="titulo-tr">
                                <td colspan="5">
                                    <span class="competidor">{{aposta.time1}} - {{ aposta.time2 }}</span>
                                </td>
                        </tr>

                        <tr class="sec-minitab">
                            <td class="" >
                                <span class="jogada" >1</span>
                                <span class="jogada" >1x2</span>
                            </td>
                            <td class="number" >
                                <span class="jogada">{{aposta.casa}}</span>
                                <span class="jogada cancel" >x</span>
                            </td>
                        </tr>
                        <tr class="line">
                            <td colspan="5"></td>
                        </tr>
                    </div>
                    
                </tbody>
            </table>
        </div>
        <div>
            <table>
                <tbody>
                    <tr class="newA">
                        <td></td>
                        <td>
                            <button class="btn">Nova aposta</button>
                        </td>
                    </tr>
                    <tr class="sec-minitab">
                        <td><span class="jogada">Seleções</span></td>
                        <td><span class="jogada">{{ $store.state.boletim.length }}</span></td>
                    </tr>
                    <tr class="sec-minitab">
                        <td><span class="jogada">Odds totais</span></td>
                        <td><span class="jogada">4.54</span></td>
                    </tr>
                    <tr class="sec-minitab">
                        <td><span class="jogada">Aposta</span></td>
                        <td><span class="jogada"><input type="text" class="valorInp"></span></td>
                    </tr>
                    <tr class="sec-minitab">
                        <td>
                            <span class="jogada">Aceitar mudanças das odds</span>
                        </td>
                            <td>
                                <span><input type="checkbox" class="check" name="" id=""></span>
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
                <div class="ganho-max">
                    <span class="txt-gan">Ganho máximo</span>
                    <span class="valor-G">0.00</span>
                </div>
                <div class="reload">
                    <button class="ultBtn btn">Nova aposta</button>
                </div>
    </div>
</template>

<script>
export default {
    name: 'BoletimAposta',
    data(){
        return{
            aposta: null
        }
    },
    computed:{
        boletim(){
            return this.$store.state.boletim
        },
    }
}
</script>

<style scoped>
.boletim{
    width: 295px;
    background: #31343b;
}
table{
    width: 100%;
}

.jogo{
    width: 100%;
    display: inline-table;
}
.selecoes{
    background-color: #232429;

}
.reload{
    text-align: center;
}
.ganho-max{
    background: #892;
    padding: 0px -8px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background: #31343b;
    color: #fff;
}
.txt-gan{
    background: #000;
    text-transform: uppercase;
    font-size: 14px;
    text-align: center;
    width: 220px;
    border-radius: 5px 5px 0 0;
}
.title{
    background-color: #232429;
    color: #FFF;
    padding: 5px 0 5px 18px;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 16px;
    border-top: 2px solid #000;
    position: relative;
}
.titulo-tr{
    background: #232429;
    color: #fff;
    width: 100%;
}
.competidor{
    display: inline-flex;
    font-size: 10px;
    text-transform: uppercase;
    padding: 2px 10px;
}
.sec-minitab{
    background: #31343b;
}
.line{
    content: '';
    height: 2px;
    background: #0cb980;
    line-height: 23px;
}
.newA{
}
.btn{
    cursor: pointer;
    background: #232429;
    color: #fff;
    text-transform: uppercase;
    padding: 3px 10px;
    border: none;
    border-radius: 3px;
    font-size: 10px;
}
.ultBtn{
    width: 50%;
}
.jogada{
    color: #fff;
    font-size: 11px;
    padding: 2px;
    margin-left: 2px;
}
.valorInp{
    width: 50px;
}
.number{
    text-align: end;
}

.cancel{

}
</style>