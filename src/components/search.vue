<template lang="pug">
  main
    section.section
      nav.nav
        .container
          pm-notification(v-show="showNotification", @clearNotification="showNotification = false", :color="notificationColor")
            p.sub-title.is-centered(slot="body") {{ notificationMessage }}
          input.input.is-large(type="text",
          placeholder="Buscar canciones!",
          v-model="searchQuery",
          @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large(@click="clear") &times;

      .container.results( v-show="!isLoading")
        .columns.is-multiline
          .column.is-one-quarter(v-for="t in tracks")
            pm-track(
            :class="{ 'is-active': t.id === selectedTrack }",
            :track="t",
            @select="setSelectedTrack"
            )
      .container(v-show="isLoading")
        pm-loader
</template>

<script>
import trackService from '@/services/track'

import PmLoader from '@/components/shared/loader.vue'
import PmNotification from '@/components/shared/notification.vue'

import PmTrack from '@/components/track.vue'
//  pm de platzi music --- que es custom -- indentificar weas ----------- vue convierte las mayusculas juntas en minuscula con - y se puede usar de cualquiera
export default {
  name: 'app',
  components: { PmTrack, PmLoader, PmNotification },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      notificationColor: '',
      notificationMessage: '',
      selectedTrack: ''
    }
  },
  watch: {
    showNotification () {
      if (this.showNotification) {
        setTimeout(() => {
          this.showNotification = false
        }, 3000)
      }
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          if (res.tracks.total === 0) {
            this.notificationColor = 'is-danger'
            this.notificationMessage = 'No se encontro ningun resultado.'
          } else {
            this.notificationColor = 'is-success'
            this.notificationMessage = `Se encontraron ${this.tracks.length} resultados.`
          }
          this.showNotification = true
          // this.showNotification = (res.tracks.total === 0)
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    },
    clear () {
      this.tracks = []
      this.searchQuery = ''
    }
  }
}
</script>

<style lang="scss">
  .results {
  margin-top: 50px
  }
  .track{
    width: 300px;
    display: inline-block;
    margin: 0 15px;
  }
  .is-active{
    border: 3px #23D160 solid;
    border-radius: 2%;
  }
</style>
