import * as types from './mutations-types'
import Axios from 'axios'

export const addUsers = ({commit}, add) => {
    Axios.post('http://localhost:3000/users', add).then(res => {
        commit(types.ADD_USERS, res.data)
    })
}