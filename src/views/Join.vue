<template lang="pug">
.join
    p Pour rejoindre le serveur !
    p Télechargez le Launcher [WIP]
    .icons(class="fa-2x")
        fa(:icon="['fab', 'java']")
        fa(:icon="['fab', 'windows']")
    p Ou Lancez minecraft 1.16.3 et collez L'IP
    .icons(class="fa-2x")
        fa(:icon="['fas', 'link']")
    p Un ressource pack est nécéssaire pour jouer
    .icons(class="fa-2x")
        fa-layer
            fa(:icon="['fas','file-archive']")
            fa-layer-text(counter value="Full" style="color: White")
        fa-layer
            fa(:icon="['fas','file-archive']")
            fa-layer-text(counter value="Texture" style="color: White")
        fa-layer(href="/downloads/test.yml" download)
            a(href="/downloads/test.yml" download)
                fa(:icon="['fas','file-archive']")
                fa-layer-text(counter value="Sound" style="color: White")
    
</template>
<script>
export default {
    name: 'Join',
    methods: {
        forceFileDownload(response, title) {
            console.log(title)
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', title)
            document.body.appendChild(link)
            link.click()
            },
        downloadWithAxios(url, title) {
            this.axios({
                method: 'get',
                url,
                responseType: 'arraybuffer',
            })
                .then((response) => {
                this.forceFileDownload(response, title)
                })
                .catch(() => console.log('error occured'))
        }
        
    }
}
</script>

<style lang="stylus" scoped>
.join
    width 100%
    height 100%
    display flex
    justify-content center
    flex-flow column nowrap
    align-items center
    position absolute
    overflow hidden

    font-size 2em
    font-weight bold

    z-index 2

    .icons
        width 50%
        display flex 
        justify-content space-around
        align-content space-between
</style>