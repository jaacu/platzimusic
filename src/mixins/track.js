const trackMixin = {
  methods: {
    selectTrack () {
      // this.$emit('select', this.track.id)
      // this.$bus.$emit('set-track', this.track)
      this.$store.commit('select', this.track)
      this.$store.commit('setTrack', this.track)
    }
  }
}

export default trackMixin
