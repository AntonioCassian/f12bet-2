import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        futebol_jogos: [
            {id: 1, data:"04/04", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 2, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 3, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 4, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 5, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 6, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 7, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 8, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 9, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"},
            {id: 10, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", casa: 2.25, empat: 3.43, fora: 3.19, pessoas: "+1185"}
        ],
        basquete_jogos: [
                {id: 1, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", casa: 1.06, fora: 7.81, pessoas: "+151"},
                {id: 2, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", casa: 1.06, fora: 7.81, pessoas: "+151"},
                {id: 3, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", casa: 1.06, fora: 7.81, pessoas: "+151"},
                {id: 4, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", casa: 1.06, fora: 7.81, pessoas: "+151"},
        ],
        tenis_jogos: [
                {id: 1, data:"06/04", hora:"14:20", time1: "Bautista-Agut, Roberto", time2:"Halys, Quentin", casa: 1.58, fora: 2.29, pessoas: "+20"},
        ],
        boletim: []
    },
    mutations:{
        addUm(state, data){
            state.boletim.push(data)
        }
    }
})