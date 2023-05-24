import * as types from './mutations-types'

export default{
    [types.GET_FUT](state, payload) {
        state.futebol_jogos = payload
    }
}
