basic.forever(function () {
    music.rest(music.beat(BeatFraction.Whole))
    basic.showString("")
    basic.showLeds(`
        . . . . .
        . # . . .
        . . # # .
        . . # . #
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
