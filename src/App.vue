<template lang="pug">
  #app
    pm-header

    router-view

    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/footer.vue'
import PmHeader from '@/components/layout/header.vue'

export default {
  name: 'app',
  components: { PmFooter, PmHeader }
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
