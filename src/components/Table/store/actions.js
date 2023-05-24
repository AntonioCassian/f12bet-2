import * as types from './mutations-types'
import Axios from 'axios'

export const GetFut = ({commit}) => {
    Axios.get('http://localhost:3000/futebol_jogos').then(res =>{
        commit(types.GET_FUT, res.data)
    })
}

