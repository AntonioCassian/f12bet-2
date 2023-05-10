<template>
    <section class="tabela">

        <div class="popular">
            <div class="sec-popular">
                <p class="title-pop">Mais popular</p>
            </div>
        </div>
        <div class="sec">
            <div class="btns">
                <button class="btn" @click="Fut" :class="activeFut">Futebol</button>
                <button class="btn" @click="Bas" :class="activeBas">Basquete</button>
                <button class="btn" @click="Ten" :class="activeTen">Tênis</button>
            </div>
        </div>
        <div >
            <table>
                <tbody v-if="selecionado === 'fut'">
                        <tr class="titulo-tr">
                            <td colspan="2"></td>
                            <td colspan="5">
                                <span class="titulo-tab">1X2</span>
                            </td>
                            <td></td>
                        </tr>
                        <tr class="titulo-tr-sec">
                            <td colspan="2"></td>
                            <td class="bd-td">
                                <span>1</span>
                            </td>
                            <td class="widt"></td>
                            <td class="bd-td">
                                <span>X</span>
                            </td>
                            <td class="widt"></td>
                            <td class="bd-td">
                                <span>2</span>
                            </td>
                            <td></td>
                        </tr>
                        <TableFut 
                        v-for="jogoFut in  futebol_jogos" :key="jogoFut.id" :jogoFut="jogoFut"
                        />
                        
                </tbody>
            
                    
                <tbody v-else-if="selecionado === 'bas'">
                    <tr class="titulo-tr">
                        <td colspan="2"></td>
                        <td colspan="3" class="td-pad">
                            <span>
                                Vencedor (inc. Tempo extra)
                            </span>
                        </td>
                        <td class="widt"></td>
                        <td></td>
                    </tr>
                    <tr class="titulo-tr-sec">
                        <td colspan="2"></td>
                        <td class="bd-td">
                            <span>1</span>
                        </td>
                        <td class="widt"></td>
                        
                        <td class="bd-td">
                            <span>2</span>
                        </td>
                        <td class="widt"></td>
                        <td></td>
                    </tr>

                    <!--conteudo da tabela-->

                <TableBas
                    v-for="jogoBas in  basquete_jogos" :key="jogoBas.id" :jogoBas="jogoBas"
                />
                  
                </tbody>

                <tbody v-else-if="selecionado === 'ten'">
                    <tr class="titulo-tr">
                        <td colspan="2"></td>
                        <td colspan="3">
                            <span class="titulo-tab">
                                2 vias
                            </span>
                        </td>
                        <td class=""></td>
                        <td></td>
                    </tr>
                    <tr class="titulo-tr-sec">
                        <td colspan="2"></td>
                        <td class="bd-td">
                            <span>1</span>
                        </td>
                        <td class="widt"></td>
                        
                        <td class="bd-td">
                            <span>2</span>
                        </td>
                        <td></td>
                        <td></td>
                    </tr>

                    <TableTen 
                        v-for="jogoTen in  tenis_jogos" :key="jogoTen.id" :jogoTen="jogoTen"
                    />
                </tbody>
            </table>
            
        </div>
    </section>
</template>

<script>
import TableFut from './TableFut.vue'
import TableBas from './TableBas.vue'
import TableTen from './TableTen.vue'
export default {
    name:'TabelaMain',
    data(){
        return {
            selecionado: 'fut',
            seq: 1
        }
    },
    components:{TableFut, TableBas, TableTen},
    computed: {
        activeFut() {
            return{
                active: this.selecionado === 'fut' 
            }
        },
        activeBas() {
            return {
                active: this.selecionado === 'bas' 
            }
        },
        activeTen() {
            return {
                active: this.selecionado === 'ten' 
            }
        },
        futebol_jogos(){
            return this.$store.state.futebol_jogos
            //return this.$store.state.jogos
        },
        basquete_jogos(){
            return this.$store.state.basquete_jogos
        },
        tenis_jogos(){
            return this.$store.state.tenis_jogos
        }
    },
    
    methods: {
        Fut(){
            this.selecionado = 'fut'   
        },
        Bas() {
            this.selecionado = 'bas'
        },
        Ten(){
            this.selecionado = 'ten'
        },
        
        //id: Number, data: String, hora: String, time1: String, time2:String, casa: Number, empat: Number, fora: Number, pessoas: String,
    },
    mounted(){
        this.$store.dispatch('getJogos')
    }
    
}
</script>

<style scoped>
.btns{
    display: flex;
    margin: 5px 0;
}
.btn{
    border: none;
    cursor: pointer;
    background: rgb(1, 1, 15);
    color:#fff;
    padding: 4px 70px;
    font-size: 12px;
    text-transform: uppercase;
    border-right: 1px solid;
}
.btn:hover{
    background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
    color: #232520;  
}
.active{
    background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
    color: #232520;  
}
.sec{
    width: 100%;
    background: #31343b;
}
.popular{
    background: linear-gradient(90deg, #355a15 0%, #83bf4e 100%);
    width: 100%;
    text-align: start;
}
.sec-popular{
    padding: 6px;
}

table{
    border-spacing: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    background: #fff;
}
.titulo-tr{
    background: #36373c;
    color: #fff;
    font-size: 14px;
}
.td-pad{
    padding: 3px;
}
.titulo-tr-sec{
    background: #31343b;
    color: #fff;
}
.titulo-tab{
    font-size: 13px;
    text-transform: uppercase;
}
.title-pop{
    color: #fff;
    line-height: 26px;
    font-size: 12px;
    text-transform: uppercase;
}
.bd-td{
    font-size: 11px;
    padding: 2px 3px;
    width: 40px;
}
.widt{
    width: 3px;
}

</style>