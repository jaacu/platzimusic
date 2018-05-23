<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        .notification(:class="color")
          slot(name="body") Algo anduvo mal.
          a.button.is-outlined.is-centered.is-inverted(@click="clear", :class="color") Descartar.
</template>
<script>
  export default {
    methods: {
      clear () {
        this.$emit('clearNotification')
      }
    },
    props: {
      color: { type: String, required: true }
    }
  }
</script>
<style lang="scss" scoped>
	.notification {
		margin: 10px;
	}
</style>
