<template lang="pug">
	.content(v-if="track && track.album")
	  p
	    img( :src="track.album.images[0].url")
	  p
	    strong {{ track.name }} 
	    small [ {{ time }} Min ]
	  p
	    audio(controls, autoplay, loop, :src="track.preview_url")
</template>

<script>
export default {
  data () {
    return {
      track: {}
    }
  },
  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  },
  computed: {
    time () {
      // return parseFloat((this.track.duration_ms / 1000) / 60).toFixed(2).toString().replace('.', ':')
      return this.$MsToMinute(this.track.duration_ms)
    }
  }
}
</script>

<style scoped>
  img {
  	width: 124px;
  	border-radius: 50%;
  }
</style>