<template>
    <tr class="times-compet" :jogoFut="jogoFut" >
                
        <td class="data-time">
            <span class="data">{{ jogoFut.data }}</span><span class="sep">|</span><span class="time">{{ jogoFut.hora }}</span>
        </td>

    <td class="nomes">
        <div>
            <router-link :to="{name: 'jogoID', params: {id: jogoFut.id}}">
                <span class="competidor">{{ jogoFut.time1 }}</span> 
                <span> - </span> 
                <span class="competidor">{{ jogoFut.time2 }}</span></router-link>
        </div>
    </td>

    <td class="number">
        <a href="">
            <span class="numBtn"
             @click.prevent="addUm" 
             :class="activeUm"
             >
                {{ jogoFut.casa }}
            </span>
        </a>
    </td>

    <td style="width: 3px"></td>

        <td class="number">
            <a href="">
                <span class="numBtn">
                    {{ jogoFut.empat }}
                </span>
            </a>
        </td>

        <td style="width: 3px"></td>

            <td class="number">
                <a href="">
                    <span class="numBtn">
                        {{ jogoFut.fora }}
                    </span>
                </a>
            </td>
            
            <td class="apostadores">
                <span class="pes">{{ jogoFut.pessoas }}</span>
            </td>
    </tr>
</template>




<script>
import { mapActions } from 'vuex'
export default {
    name: "TableFut",
    props:{jogoFut: Object},
    data(){
        return{
            selecionado: '',
            btn: false
        }
    },
    methods:{
        ...mapActions('table', ['addUmData']),
        //...mapActions({ addUmAction: 'addUmData' }),
        addUm(){
            //const data = this.jogoFut
            //this.addUmAction(data)
            this.addUmData(this.jogoFut)
            this.selecionado = 'Um'
            //this.$store.dispatch("addUmData", data)
            //this.$store.commit('addUmData', this.jogoFut)
            //this.$store.boletim.dispatch('addUm', this.jogoFut)
        },
        jogoid(){
            this.$router.push({name:'jogoID', params:{id: this.JogoFut.id}})
        },
    },
    computed: {
        activeUm() {
            return {
                active: this.selecionado === 'Um'
            }
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
.numBtn{
    background: #232520;
    border-radius: 5px;
    position: relative;
    top: 6px;
    color: #fff;
    padding: 7px;
    font-size: 11px;
    font-weight: bolder;
}
.numBtn:hover{
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

.active{
    background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
    color: #232520;  
}

</style>
