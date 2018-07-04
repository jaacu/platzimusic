<template lang="pug">
  .container
    transition(name="move")
      pm-loader(v-if="isLoading")
    transition(name="move")
      .columns(v-if="!isLoading && track && track.album ")
        .column.is-3.has-text-centered
          .figure.media-left
            p.image( :class="{ 'is-active': track.id === selectedTrack }" )
              img(:src="track.album.images[0].url")
            p.button-bar
              a.button.is-primary.is-large(@click="selectTrack")
                span.icon.is-small &#9658;

        .column.is-8
          .panel
            .panel-heading
              h1.title {{ trackTitle }}
            .panel-block
              article.media
                .media-content
                  .content
                    ul(v-for="(v, k) in track")
                      li
                        strong {{ k }}:&nbsp;
                        span {{ v }}

                nav.level
                  .level-left
                    a.level-item
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'

// import trackService from '@/services/track'
import PmLoader from '@/components/shared/loader.vue'
import trackMixin from '@/mixins/track'

export default {
  components: { PmLoader },
  mixins: [ trackMixin ],
  data () {
    return {
      // track: {},
      isLoading: false
    }
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.isLoading = true
      this.getTrackById({ id })
        .then(() => {
          console.log('Track Loaded...')
          this.isLoading = false
        })
    }
    // trackService.getById(id)
    //   .then(res => {
    //     this.track = res
    //     this.isLoading = false
    //   })
  },
  computed: {
    ...mapState(['track', 'selectedTrack']),
    ...mapGetters(['trackTitle'])
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>
<style lang="scss" scoped>
.columns {
	margin: 20px;
}
.button-bar{
  margin-top: 20px;
}
</style>
