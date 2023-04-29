<template>
    <tr class="times-compet" :jogoFut="jogoFut" >
                
        <td class="data-time">
            <span class="data">{{ jogoFut.data }}</span><span class="sep">|</span><span class="time">{{ jogoFut.hora }}</span>
        </td>

    <td class="nomes">
        <div >
            <a href="">
                <span class="competidor">{{ jogoFut.time1 }}</span> 
                <span> - </span> 
                <span class="competidor">{{ jogoFut.time2 }}</span></a>
        </div>
    </td>

    <td class="number">
        <a href=""><span @click.prevent="addUm">{{ jogoFut.casa }}</span></a>
    </td>

    <td style="width: 3px"></td>

        <td class="number">
            <a href=""><span >{{ jogoFut.empat }}</span></a>
        </td>

        <td style="width: 3px"></td>

            <td class="number">
                <a href=""><span>{{ jogoFut.fora }}</span></a>
            </td>
            
            <td class="apostadores">
                <span class="pes">{{ jogoFut.pessoas }}</span>
            </td>
    </tr>
</template>




<script>
export default {
    name: "TableFut",
    computed:{
        futebol_jogos(){
            return this.$store.state.futebol_jogos
        }
    },
    props:{jogoFut: Object},
    methods:{
        addUm(){
            this.$store.commit('addUm', this.jogoFut)
        },
    }

}
</script>





<style scoped>

.title-pop{
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 26px;
}
.tabela{
    text-align: center;
    width: 100%;
}
.number> a > span{
    background: #232520;
    border-radius: 5px;
    position: relative;
    top: 6px;
    color: #fff;
    padding: 5px;
}
.number> a > span:hover{
    background: #C9F73C;
    color: #232520;
}
.number >a {
    margin-left: 0;
}
.apostadores{
    width: 40px;
    text-align: center;
}
.pes{
    color: #C9F73C;
    font-size: 12px;
    position: relative;
    top: 6px;
    right: 8px;
}
.times-compet{
    border-top: 2px solid #81817f;
    padding: 3px 1px;
    background: #3d3d3c;
}
.times-compet:hover{
    background: #2e2e2d;
}
.nomes {
    font-size: 12px;
    color: #fff !important;
    position: relative;
    float: left;
    top: 10px;
    font-weight: 500;
}
.competidor{
    color: #fff;
}
.data-time{
    color: #C9F73C;
    font-size: 11px;
    width: 50px;
    padding: 4px;
}
.data{
    display: block;
}
.time{
    display: block;
}
.sep{
    display: none;
    color: transparent;
    padding: 0 2px;
}



</style>

<!--
    <table>
                

                <!--Basquete

                
                <!--Tênis 

                <tbody v-else-if="selecionado === 'ten'">
                    <tr class="titulo-tr">
                        <td colspan="2"></td>
                        <td colspan="3">
                            <span class="titulo-tab">
                                2 vias
                            </span>
                        </td>
                        <td class=""></td>
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
                    </tr>

                    <!--conteudo da tabela 

                    <tr class="times-compet" v-for="jogo in tenis_jogos" :key="jogo.id">
            
                    <td class="data-time">
                        <span class="data">{{ jogo.data }}</span><span class="sep">|</span><span class="time">{{ jogo.hora }}</span>
                    </td>

                    <td class="nomes">
                        <div >
                        <a href="">
                            <span class="competidor">{{ jogo.time1 }}</span> 
                        <span> - </span> 
                        <span class="competidor">{{ jogo.time2 }}</span></a>
                        </div>
                    </td>

                    <td class="number">
                        <a href=""><span>{{ jogo.um }}</span></a>
                    </td>

                    <td style="width: 3px"></td>

                    <td class="number">
                        <a href=""><span>{{ jogo.dois }}</span></a>
                    </td>

                    
                    <td class="apostadores">
                        <span class="pes">{{ jogo.pessoas }}</span>
                        </td>
                    </tr>


                </tbody>
                
    </table>
-->