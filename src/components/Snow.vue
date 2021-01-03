<template lang="pug">
main
    .snow(v-for="letter in array") {{letter}}
</template>
<script>
export default {
    data() {
        return {
            array: "ⒶⓛⓛⒾⓌⓐⓝⓣⒻⓞⓡⒸⓗⓡⓘⓢⓣⓜⓐⓢⒾⓢⓎⓞⓤ".repeat(8).split(''),
            test: this.$root.$refs.audio
        }
    }
}
</script>
<style lang="stylus" scoped>
random(min,max)
  return floor(math(0, 'random')*(max - min + 1) + min)

main
    overflow: hidden;
    display inline-flex
    justify-content space-around
    width 100%
    height 100vh

    .snow
        z-index 0
        color white
        font-size 2em
        filter: drop-shadow(0 0 10px white);
    
    for num in (1..200)
        $random-yoyo-time= random(30000, 80000) / 100000;
        $random-offset= random(-100000, 100000) * 0.0001vw;
        $random-scale= random(0, 10000) * 0.0001;
        $fall-duration= random(10, 30) * 1.7s;
        $fall-delay= random(0, 30) * -1s;

        $random-x= random(0, 1000000) * 0.0001vw;
        $random-x-end= $random-x - $random-offset;
        $random-x-end-yoyo= $random-x + ($random-offset / 2);

        $random-yoyo-y= $random-yoyo-time * 100vh;

        .snow:nth-child({num})
            opacity: random(0, 10000) * 0.0001;
            transform: translate($random-x, -100px) scale($random-scale);
            animation fall $fall-duration $fall-delay linear infinite

            @keyframes fall {
                {percentage($random-yoyo-time)} {
                    transform: translate($random-x-end, $random-yoyo-y)
                    scale($random-scale);
                }
                to {
                    transform: translate($random-x-end-yoyo, 100vh)
                    scale($random-scale);
                }

            }

            @keyframes pulse {
                0% {
                    transform: scale(0.95);
                    filter: box-shadow(0 0 0 rgba(255, 255, 255, 0.7));
                }
                
                70% {
                    transform: scale(1);
                    filter: box-shadow(0 0 10px rgba(255, 255, 255, 0));
                }
                
                100% {
                    transform: scale(0.95);
                    filter: box-shadow(0 0 0 rgba(255, 255, 255, 0));
                }
            }
</style>