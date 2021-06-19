OLED12864_I2C.init(60)
OLED12864_I2C.on()
let counter = 0
basic.forever(function () {
    basic.showString(convertToText(counter))
    OLED12864_I2C.showString(
    0,
    0,
    "Hello at " + convertToText(counter),
    1
    )
    OLED12864_I2C.showString(
    0,
    0,
    "Hello!",
    1
    )
    basic.pause(100)
    counter = counter + 1
})
