<template lang="pug">
  #app
    pm-header
    section.section
      nav.nav
        .container
          input.input.is-large(type="text",
          placeholder="Buscar canciones!",
          v-model="searchQuery",
          @keyup.enter="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
          p {{ searchMessage }}
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
    pm-footer
</template>

<script>
import trackService from '@/services/track'
import PmFooter from '@/components/layout/footer.vue'
import PmHeader from '@/components/layout/header.vue'

import PmLoader from '@/components/shared/loader.vue'

import PmTrack from '@/components/track.vue'
//  pm de platzi music --- que es custom -- indentificar weas ----------- vue convierte las mayusculas juntas en minuscula con - y se puede usar de cualquiera
export default {
  name: 'app',
  components: { PmFooter, PmHeader, PmTrack, PmLoader },
  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: ''
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      if (!this.searchQuery) { return }
      this.isLoading = true
      trackService.search(this.searchQuery)
        .then(res => {
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

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
