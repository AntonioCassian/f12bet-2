<template>
    <div class="boletim">
        <div class="title">
            <span>A=-</span>
            <span>Boletim de Aposta</span>
        </div>
            <!--<h5 v-if="boletin"></h5>-->
        <div class="verificacao" >
            <div>
            <table>
                <tbody>
                    <div class="apres-not" v-if="boletim == ''">
                        <span>Não há seleções disponíveis</span>
                    </div>
                    <div class="jogo" v-for="aposta in boletim" :key="aposta.id">
                        <tr class="titulo-tr">
                                <td colspan="5">
                                    <span class="competidor">{{aposta.time1}} - {{ aposta.time2 }}</span>
                                </td>
                        </tr>

                        <tr class="sec-minitab">
                            <td class="">
                                <span class="jogada" >1</span>
                                <span class="jogada" >1x2</span>
                            </td>
                            <td class="number" >
                                <span class="jogada">{{aposta.casa}}</span>
                                <span class="jogada cancel" @click="removeUm">x</span>
                            </td>
                        </tr>
                        <tr class="line">
                            <td colspan="5"></td>
                        </tr>
                    </div>
                    
                </tbody>
            </table>
            </div>
        <div >
            <table >
                <tbody v-if="boletim != ''">
                    <tr class="newA">
                        <td></td>
                        <td>
                            <button class="btn">Nova aposta</button>
                        </td>
                    </tr>
                    <tr class="sec-minitab">
                        <td><span class="jogada">Seleções</span></td>
                        <td><span class="jogada">{{ contagem }}</span></td>
                    </tr>
                    <tr class="sec-minitab">
                        <td><span class="jogada">Odds totais</span></td>
                        <td><span class="jogada">{{odds}}</span></td>
                    </tr>
                    <tr class="sec-minitab">
                        <td><span class="jogada">Aposta</span></td>
                        <td><span class="jogada">
                        <input 
                            type="text" 
                            class="valorInp" 
                            value="0.00" 
                            v-model="ganho"
                            placeholder="0.00"
                            /></span></td>
                    </tr>
                    <tr class="sec-minitab">
                        <td>
                            <span class="jogada">Aceitar mudanças das odds</span>
                        </td>
                            <td>
                                <span><input type="checkbox" class="check" name="" id=""></span>
                            </td>
                    </tr>
                    <tr>
                        
                        <td class="ganho-max" colspan="4">
                            <span class="txt-gan">Ganho máximo</span>
                            <div class="valor-G">
                                <span>{{ ganho * 2 }}</span>
                            </div>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
        </div >
        </div>
      
                <div class="reload">
                    <button class="ultBtn btn">Nova aposta</button>
                </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'BoletimAposta',
    data(){
        return{
            ganho: ''
        }
    },
    computed:{
        ...mapGetters('table', {
            odds: 'odds',
            boletim: 'bol',
            contagem: 'contagem'    
        })
    },
    methods: {
        removeUm(){
            const remove = this.$store.state.boletim.id
            
            this.$store.commit('removeUm', remove)
        }
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
.apres-not{
    color: #fff;
    font-size: 11px;
    background: #464852;
    padding: 4px;
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
    background: #31343b;
    color: #fff;
    text-align: center;
}
.txt-gan{
    background: #000;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
    padding: 1px 6px;
    border-radius: 5px 5px 0 0;
    display: block;
}
.valor-G{
    text-align: center;
    color: #c9f73c;
    font-size: 30px;
    line-height: 36px;
    background: #414247;
    border: 2px solid #000;
    border-radius: 0px 0px 5px 5px;
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
    padding: 10px 0;
    font-size: 12px;
    margin: 8px;
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
    cursor: pointer;
}
</style>