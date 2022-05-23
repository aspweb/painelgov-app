export default {

  // ...
  sampleAction ({ commit, dispatch, state }, val) {
    dispatch('sampleAction', val)
    commit('sampleCommit', state.sample)
  }
}
