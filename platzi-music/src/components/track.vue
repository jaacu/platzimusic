<template lang="pug">
  .card
    .card-image
      figure.image.is-1by1
        img(:src="track.album.images[0].url")

    .card-content
      .media
        .media-left
          figure.image.is-48x48
            img(:src="track.album.images[0].url")
        .media-content
          p.title.is-6
            strong {{ track.name }}
          p.subtitle.is-6 {{ track.artists[0].name }}

      .content
        small {{ time }} Min
        nav.level
          .level-left
            a.level-item
              span.icon.is-small(@click="selectTrack") &#9658;

</template>

<script>
  export default {
    props: {
      track: { type: Object, required: true }
    },
    computed: {
      time () {
        return parseFloat((this.track.duration_ms / 1000) / 60).toFixed(2).toString().replace('.', ':')
      }
    },
    methods: {
      selectTrack () {
        this.$emit('select', this.track.id)
      }
    }
  }
</script>
<style>
.icon.is-small{
		font-size: 30px;
}
</style>