input.onButtonPressed(Button.A, function () {
    led.stopAnimation()
    stop = 0
    basic.showNumber(0)
})
input.onGesture(Gesture.Shake, function () {
    led.stopAnimation()
    stop += 1
})
let stop = 0
stop = 0
basic.forever(function () {
    basic.showNumber(stop)
})
