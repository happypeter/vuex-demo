import * as types from '../mutation-types'

let state = {}

const mutations = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  }
}

export default {
  state,
  mutations
}
