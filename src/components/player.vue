<template lang="pug">
	.content(v-if="track && track.album")
	  p
	    img( :src="track.album.images[0].url")
	  p
	    strong {{ track.name }} 
	    small [ {{ track.duration_ms | ms-to-mm }} Min ]
	  p
	    audio(controls, autoplay, loop, :src="track.preview_url")
</template>

<script>

import { mapState } from 'vuex'

export default {
  // data () {
  //   return {
  //     track: {}
  //   }
  // },
  // created () {
  //   this.$bus.$on('set-track', (track) => {
  //     this.track = track
  //   })
  // },
  computed: {
    ...mapState(['track']),
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