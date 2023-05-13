import * as types from './mutations-types'

export default {
    [types.ADD_USERS](state, payload) {
        state.users = payload
    }
}