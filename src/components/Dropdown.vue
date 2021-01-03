<template lang="pug">
main
    ul
        li(v-for="item in links" @click="openLink(item.route)")
            fa(:icon='item.icon')
            .hidden {{item.text}}
</template>
<script>
export default {
    name: 'Dropdown',
    data() {
        return{
            links: {
                home : {
                    icon: ['fa', 'home'],
                    text: 'Home',
                    route: '/'
                },
                faq: {
                    icon: ['fas', 'info'],
                    text: 'FAQ',
                    route: '/faq'
                },
                join: {
                    icon: ['fas', 'sign-in-alt'],
                    text: 'Rejoindre',
                    route: '/join'
                },
                contact: {
                    icon: ['fas', 'envelope'],
                    text: 'Nous Contacter',
                    route: '/contact'
                }
            }
        }
    },
    methods: {
        openLink(url) {
            this.$router.push(url)
        }
    }
}
</script>
<style lang="stylus" scoped>
@font-face
  font-family: 'qarrotface';
  src: url('~@font/qarrotface.otf');
colorbase=  rgba(200,200,200,0.75)
main
    ul
        list-style none 
        height 100%
        display flex
        justify-content space-around
        flex-flow column nowrap
        align-items flex-start 
        position absolute
        z-index 3

        li
            margin-left 0px
            padding 25px 30px 25px 10px
            background-color colorbase
            font-size 2em
            border-radius 0px 100px 100px 0px
            transition all 0.3s linear 5s

            .hidden
                text-indent -400px
                transition all 0.3s linear 0s

            &:hover
                background-color lighten(colorbase, 25%)

                .hidden
                    text-indent 0

        li > * 
            display inline-block
            vertical-align middle
                
                
</style>