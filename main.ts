input.onButtonPressed(Button.AB, function () {
    radio.sendString("startstop")
})
radio.setGroup(0)
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
