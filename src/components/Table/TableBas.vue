<template>
    <tr class="times-compet" :jogoBas="jogoBas" >
                
        <td class="data-time">
            <span class="data">{{ jogoBas.data }}</span><span class="sep">|</span><span class="time">{{ jogoBas.hora }}</span>
        </td>

    <td class="nomes">
        <div >
            <a href="">
                <span class="competidor">{{ jogoBas.time1 }}</span> 
                <span> - </span> 
                <span class="competidor">{{ jogoBas.time2 }}</span>
                </a>
        </div>
    </td>

    <td class="number">
        <a href=""><span @click.prevent="addUm">{{ jogoBas.casa }}</span></a>
    </td>

        <td style="width: 3px"></td>
        
            <td class="number">
                <a href=""><span>{{ jogoBas.fora }}</span></a>
            </td>

            <td style="width: 3px"></td>

            <td class="apostadores">
                <span class="pes">{{ jogoBas.pessoas }}</span>
            </td>
            
    </tr>
</template>



<script>
export default {
    name:"TableBas",
    props:{jogoFut: Object, jogoBas: Object},
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