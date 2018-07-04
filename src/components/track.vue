<template lang="pug">
transition(name="move")
  .card(v-if="track && track.album")
    .card-image
      figure.image.is-1by1
        img#large(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img#mini(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}

      .content
        small {{ track.duration_ms | ms-to-mm }} Min
        nav.level
          .level-left
            button.level-item.button.is-primary(@click="selectTrack")
              span.icon.is-small &#9658;
            button.level-item.button.is-warning(@click="goToTrack(track.id)")
              span.icon.is-small &#8658;
</template>

<script>
  import trackMixin from '@/mixins/track'

  export default {
    mixins: [ trackMixin ],

    props: {
      track: { type: Object, required: true }
    },
    methods: {
      // selectTrack () {
      //   this.$emit('select', this.track.id)
      //   this.$bus.$emit('set-track', this.track)
      // },
      goToTrack (id) {
        this.$router.push({ name: 'track', params: { id } })
      }
    }
  }
</script>
<style scoped>
.icon.is-small{
		font-size: 30px;
}
.button .icon{
  height: 0;
}
</style>