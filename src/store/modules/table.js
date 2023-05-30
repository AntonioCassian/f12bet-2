export default{
    namespaced: true,
    state:{
        futebol_jogos: [
            {id: 1, data:"24/05", hora:"14:30", time1: "Real Madrid", time2:"Rayo Vallencano", casa: 1.43, empat: 5.12, fora: 6.51, pessoas: "+1146"},
            {id: 2, data:"24/05", hora:"16:00", time1: "AC Fiorentina", time2:"Inter", casa: 3.55, empat: 3.31, fora: 2.11, pessoas: "+1105"},
            {id: 3, data:"24/05", hora:"16:00", time1: "Brighton & Hove Albion", time2:"Manchester City", casa: 3.28, empat: 3.82, fora: 2.07, pessoas: "+1131"},
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
        addUmData(state, data){
            return state.boletim.push(data)
        },
        removeUm(state, id) {
            const indx = state.boletim.findIndex(obj => obj.id === id)
            state.boletim.splice(indx, 1)
        },
    },
    actions: {
        addUmData({commit}, jogo) {
            commit('addUmData', jogo)
        }
    },
    getters: {
        fut(state) {
            return state.futebol_jogos
        },
        bas(state) {
            return state.basquete_jogos
        },
        ten(state) {
            return state.tenis_jogos
        },
        bol(state) {
            return state.boletim
        },
        odds(state) {
            return state.boletim.reduce((total, atual) => total += atual.casa, 0.00)
        },
        contagem(state) {
            return state.boletim.length
        }
    }
}