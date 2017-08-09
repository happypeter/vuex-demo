import * as types from '../mutation-types'

const state = {
  all: [
    { text: 'fooo' },
    { text: 'barr' }
  ]
}

const mutations = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  }
}

export default {
  state,
  mutations
}
