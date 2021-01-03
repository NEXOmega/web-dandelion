<template lang="pug">
main
  Dropdown
  router-view
  Snow
</template>
<script>
import Dropdown from "@cmp/Dropdown"
import Snow from "@cmp/Snow"

export default {
  name:"App",
  components: {
    Dropdown,
    Snow
  }
}
</script>
<style lang="stylus">
@require './styles/utils.styl'
main
  background-image url('~@image/background.jpg')
  background-color black
  background-repeat no-repeat
  background-size cover
  color #212A2F
*
  sc-reset()
  font-family 'Open Sans', sans-serif;
  -webkit-font-smoothing antialiased;
  -moz-osx-font-smoothing grayscale;
  text-align center;
</style>
