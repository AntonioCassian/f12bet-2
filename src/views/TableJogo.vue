<template>
    <div class="tableJogo">
        <Header />
    
      <div class="container">
        <aside>
          <MenuBar />
        </aside>

    <main>
        
                <div class="apresentacao">
                <div class="fechar"><span class=valu-fech>x</span></div>
                <div class="dataTime">
                    <span>02/05/2023</span>
                    <span>17:00</span>
                </div>
                <div class="timePais">
                    <span>Futebol / Colômbia - Primera B, Apertura</span>
                </div>
                <div class="time">
                    <span>ATLETICO FC</span> 
                    <span>-</span> 
                    <span>BOCA JUNIORS DE CALI</span>
                </div>
            </div>
            <div class="scroll">
            <div class="botoes">
        <button>Tudo</button>
        <button>Padrão</button>
        <button>Principal</button>
        <button>Acima/Abaixo</button>
        <button>Handicaps</button>
        <button>Ambas Marcam</button>
        <button>1°Tempo</button>
        <button>2°Tempo</button>
        <button>Casa</button>
        <button>Visitante</button>
        <button>HT/FT</button>
        <button>Combo</button>
        <button>Placar Correto Multi</button>
        <button>Multigols</button>
        <button>Cartões</button>
        <button>Escanteios</button>
        <button>Minutos</button>
        <button>Especiais</button>
        <button>Marcadores</button>
            </div>
            <div class="tables">

                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>1X2</span></td>
                    </tr>
                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">1</span>
                        <span class="value">1.99</span>
                    </td>
                    <td class="sep"></td>

                    <td class="td-compo">
                        <span class="num">X</span>
                        <span class="value">3.19</span>
                    </td>
                    <td class="sep"></td>

            
                    <td class="td-compo">
                        <span class="num">2</span>
                        <span class="value">3.78</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>


                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>Dupla Chance</span></td>
                    </tr>
                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">1X</span>
                        <span class="value">1.23</span>
                    </td>
                    <td class="sep"></td>

                    <td class="td-compo">
                        <span class="num">12</span>
                        <span class="value">1.30</span>
                    </td>
                    <td class="sep"></td>

            
                    <td class="td-compo">
                        <span class="num">X2</span>
                        <span class="value">1.73</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>



                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>Empate anula aposta</span></td>
                    </tr>
                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">1</span>
                        <span class="value">1.37</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">2</span>
                        <span class="value">2.60</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>

                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>Total de Gols</span></td>
                    </tr>
                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">0.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">-</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">16.53</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">1.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.17</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">4.64</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">2.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.56</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">2.33</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">3.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">2.40</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.53</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">4.50</td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Acima</span>
                        <span class="value">4.11</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">1.21</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">5.50</td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Acima</span>
                        <span class="value">7.33</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.07</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">6.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">12.39</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.01</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>

                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>Handicap Asiático - Total</span></td>
                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(-0.75)</span>
                        <span class="value">1.20</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(+0.75)</span>
                        <span class="value">4.02</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(-0.50)</span>
                        <span class="value">1.17</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(+0.50)</span>
                        <span class="value">4.40</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(-0.25)</span>
                        <span class="value">1.09</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(+0.25)</span>
                        <span class="value">6.05</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(+0.50)</span>
                        <span class="value">1.02</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(-0.50)</span>
                        <span class="value">9.88</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(+0.75)</span>
                        <span class="value">-</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(-0.75)</span>
                        <span class="value">12.55</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>

                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>1º Tempo - Handicap Asiático - Total</span></td>
                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(-0.75)</span>
                        <span class="value">2.97</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(+0.75)</span>
                        <span class="value">1.35</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(-0.50)</span>
                        <span class="value">2.23</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(+0.50)</span>
                        <span class="value">1.58</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(-0.25)</span>
                        <span class="value">1.72</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(+0.25)</span>
                        <span class="value">2.01</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa</span>
                        <span class="value">1.40</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora</span>
                        <span class="value">2.74</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(+0.25)</span>
                        <span class="value">1.28</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(-0.25)</span>
                        <span class="value">3.32</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Casa(+0.50)</span>
                        <span class="value">1.19</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo td-compo2">
                        <span class="num">Fora(-0.50)</span>
                        <span class="value">4.23</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>

                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>Acima/Abaixo Asiático - Total</span></td>
                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">0.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.07</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">6.20</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">0.75</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.08</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">5.60</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">1.00</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.10</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">5.20</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">1.25</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.25</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">3.40</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">1.50</td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Acima</span>
                        <span class="value">1.39</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">2.65</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">1.75</td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Acima</span>
                        <span class="value">1.49</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">2.33</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">2.00</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.66</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">2.01</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                </tbody>
                </table>

                <table class="table">
                <tbody>
                    <tr class="title">
                    <td class="sep"></td>
                    <td colspan="4"><span>1º Tempo - Acima/Abaixo Asiático - Total</span></td>
                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">0.50</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.54</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">2.50</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">0.75</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">1.76</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">2.07</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">1.00</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">2.28</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">1.64</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">1.25</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">2.85</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.43</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">1.50</td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Acima</span>
                        <span class="value">3.45</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Abaixo</span>
                        <span class="value">1.32</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim">1.75</td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Acima</span>
                        <span class="value">4.60</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.20</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">2.00</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">7.80</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.08</span>
                    </td>
                    <td class="sep"></td>

                    </tr>

                    <tr>
                    <td class="sep"></td>
                    <td class="tot-prim  totalgols">2.25</td>
                    <td class="sep"></td>
                    <td class="td-compo">
                        <span class="num">Acima</span>
                        <span class="value">8.40</span>
                    </td>
                    <td class="sep"></td>
                    <td class="td-compo  totalgols">
                        <span class="num">Abaixo</span>
                        <span class="value">1.07</span>
                    </td>
                    <td class="sep"></td>

                    </tr>
                </tbody>
                </table>
                <div class="scroll"></div>
            </div>
            </div>
    </main>

    <aside>
        <Boletim />
    </aside>
      </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Boletim from '../components/Boletim.vue'
import MenuBar from '@/components/MenuBar.vue'
export default {
    components:{Header, Boletim, MenuBar},
    data(){
        return{
            link: false
        }
    },
    props: ['id'],
    computed:{
        jogo(){
            return this.$store.state.jogo
        }
    },
    mounted(){
        this.$store.dispatch('getJogo', this.id)
    }
}
</script>







<style scoped>
.tableJogo{
    background: #000;
    position: fixed;
    height: 100%;
  }
.apresentacao{
    width: 100%;
    background-image: url("@/../public/img/background/bg-table.jpg");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: top center;
    background-size: cover;
    color: #fff;
    position: relative;
}
.fechar{
    position: absolute;
    right: 9px;
    top: 5px;
    z-index: 10;
}
.valu-fech{
    background: #000;
    padding: 0px 5px 2px;
    text-transform: lowercase;
    font-weight: 900;
    font-size: 11px;
    text-align: center;
}
.dataTime{
    font-size: 14px;
    color: #fff;
    margin-left: 12px;
    padding-top: 5px;
    margin-bottom: 2px;
}
.timePais{
    font-size: 14px;
    color: #fff;
    margin-left: 12px;
    margin-bottom: 3px;
}
.time{
    color: #fff;
    font-size: 15px;
    text-transform: uppercase;
    margin-left: 12px;
    line-height: 22px;
    padding-bottom: 6px;
}
  
  .botoes{
    background: #31343b;
  }
  button{
    background: #212429;
    font-size: 11px;
    outline: none;
    text-transform: uppercase;
    cursor: pointer;
    margin: 1px;
    padding: 7px;
    text-align: center;
    color: #fff;
    border: none;
  }
  .table{
    background: #232429;
    width: 100%;
    margin-top: 1px;
  }
  .td-compo{
    background: #55545a;
    border-radius: 7px;
    padding-right: 10px;
    width: 33.33336%
  }
  .td-compo2{
    width: 50%;
  }
  .title{
    color: #fff;
    font-size: 11px;
    text-align: left;
  }
  .num{
    background-color: rgba(51,51,51,0.9);
    padding: 11px;
    font-size: 11px;
    color: #fff;
    font-weight: bold;
    line-height: 33px;
    border-radius: 5px 0 0 5px;
  }
  .value{
    float: right;
    color: #fff;
    font-weight: bold;
    font-size: 11px;
    line-height: 33px;
  }
  .sep{
    width: 1px;
    margin: 4px;
    padding-bottom: 5px;
  }
  .totalgols{
    width: 45%;
  }
  .tot-prim{
    width: 10px;
    color: #fff;
    text-align: center;
    font-size: 11px;
  }

.scroll{
    overflow: hidden;
    overflow-y: scroll;
    height: 450px;
}

.scroll::-webkit-scrollbar {
    height: 15px;
    top: 0px;
}
 
.scroll::-webkit-scrollbar-track {
    background:#000;
}
 
.scroll::-webkit-scrollbar-thumb {
    background-color: rgba(47, 47, 47, 0.8);
    opacity: 0.4;
}
</style>