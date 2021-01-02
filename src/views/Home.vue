<template lang="pug">
main
  audio(ref='audio' :src="require('@audio/confetti-dear-god.mp3')" type="audio/mpeg" loop)
  .text(:class="{bounce}" @click="resume()")
    img(:src="require('@image/logo_black.png')")
    span.title Dandelion
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      bounce: false,
    }
  },
  methods: {
    resume() {
      this.bounce = !this.bounce;
      const self = this;
      const audioElement = self.$refs.audio;
      (this.bounce ? audioElement.play() : audioElement.pause())
    }
  }
}
</script>

<style lang="stylus" scoped>
@font-face
  font-family: 'qarrotface';
  src: url('~@font/qarrotface.otf');

main
  width 100%
  height 100%
  display flex
  justify-content center
  flex-flow column nowrap
  align-items center
  position absolute
  overflow hidden

  .text 
    span
      font-family 'qarrotface'
      font-size 2em
      color #212A2F
    > *
      display block
      margin 0 auto
    &.bounce
      animation bounce .22s ease-in infinite alternate
    span.title
      font-size 10em
    
    img 
      user-select none
      -moz-user-select: none;
      -khtml-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      -moz-user-drag: none;
      -khtml-user-drag: none;
      -webkit-user-drag: none;
      user-drag: none;
      
@keyframes bounce
  from
    transform scale(1)
  to
    transform scale(1.05)
</style>