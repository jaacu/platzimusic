<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          input.input.is-large(type="text",
          placeholder="Buscar canciones!",
          v-model="searchQuery",
          @keyup="search"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
      .container
        .columns
          .column {{ searchMessage }}
          .column(v-for="track in tracks")
            p {{track.name + track.artist}} 
</template>

<script>
const tracks = [
  {name: 'Muchacha', artist: 'Luis Alberto Spinetta'},
  {name: 'Mamalo', artist: 'Mamador Experto'},
  {name: 'Mamalo', artist: 'Mamador Novato'}
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
