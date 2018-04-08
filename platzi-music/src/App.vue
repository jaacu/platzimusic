<template lang="pug">
  #app
    p(v-if="value") {{ val }}
    p(v-else-if="false") {{ 'algo mas' }}
    p(v-else) {{ 'lo ultimo' }}

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello World!',
      value: false,
      val: 'No se'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss'
</style>
