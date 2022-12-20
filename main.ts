basic.forever(function () {
    music.playMelody("G A G F F G A B ", 120)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    music.playTone(262, music.beat(BeatFraction.Half))
    basic.showLeds(`
        . . # . .
        # # # # #
        # # # # #
        . # # # .
        . # . # .
        `)
    led.plotBarGraph(
    8,
    16
    )
})
