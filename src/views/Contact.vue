<template lang="pug">
.contact
    .text
      p Vous pouvez nous contacter
      p Sur n'importe lequel
      p de ces reseaux
    .links(class="fa-3x")
        fa(:icon="['fab', 'discord']") Discord
        fa(:icon="['fab', 'twitter']") Discord
        fa(:icon="['fab', 'youtube']") Discord
    .text
      p ou par email
      p lorem.ipsum@github.com
</template>
<style lang="stylus" scoped>
@require '../styles/utils.styl'
@font-face {
  font-family: 'qarrotface';
  src: url('~@font/qarrotface.otf');
}
.contact
  position absolute
  width 100%
  height 100%
  display flex
  justify-content center
  flex-flow column nowrap
  align-items center

  .text
    font-size 2em
    font-weight bold
    
    .text > *
      display inline-block
</style>