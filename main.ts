basic.clearScreen()
let servo_num = 0
pins.servoWritePin(AnalogPin.P3, servo_num)
basic.pause(100)
basic.forever(function () {
    servo_num += 10
    if (servo_num > 250) {
        servo_num = 0
    }
    pins.servoWritePin(AnalogPin.P3, servo_num)
    basic.showNumber(servo_num)
    basic.pause(500)
})
