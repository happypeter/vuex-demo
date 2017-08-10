import * as types from '../mutation-types'
import comment from '../../api/comment'

let state = {}

const mutations = {
  [types.ADD_COMMENT] (state, { text }) {
    state.all.push({ text })
  }
}

const actions = {
  getAllPosts ({ commit }) {
    comment.getComments(posts => {
      console.log('in actions', posts)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
