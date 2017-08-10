const _comments = [
  { text: 'fooo' },
  { text: 'barr' }
]

export default {
  getComments (cb) {
    setTimeout(() => cb(_comments), 2000)
  }
}
