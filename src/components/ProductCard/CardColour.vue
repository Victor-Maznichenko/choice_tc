<template>
    <div class="choose-color _double" :style="cssProps">
        <i></i>
        <i></i>
    </div>
</template>

<script>
export default {
    name: 'CardColour',
    props: {
        colors: {
            type: Object,
        }
    },
    computed: {
        cssProps() {
            return {
                '--color_one': this.colors[0],
                '--color_two': this.colors[1]
            }
        }
    }
}
</script>

<style lang="sass">
@function sqrt($r)
    $x0: 1
    $x1: $x0
    @for $i from 1 through 10 
        $x1: $x0 - ($x0 * $x0 - abs($r)) / (2 * $x0)
        $x0: $x1


    @return unit($x1)

.choose-color
    width: unit(14)
    height: unit(14)
    border-radius: unit(2)
    position: relative
    overflow: hidden
    i
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%    
        border-radius: unit(2)
        background-color: var(--color_one)
    &._double
        i:last-child
            background-color: var(--color_two)
            width: calc(sqrt(3) * 14)
            left: 100%
            top: 35%
            transform: translateX(-60%) rotate(-45deg)
</style>