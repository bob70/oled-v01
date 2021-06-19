input.onButtonPressed(Button.A, function () {
    y = y + 1
    OLED12864_I2C.pixel(x, y, 1)
})
input.onButtonPressed(Button.B, function () {
    x = x + 1
    OLED12864_I2C.pixel(x, y, 1)
})
let x = 0
let y = 0
OLED12864_I2C.init(60)
OLED12864_I2C.on()
let counter = 0
y = 10
x = 10
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
    OLED12864_I2C.hline(
    0,
    10,
    counter,
    3
    )
    OLED12864_I2C.draw()
    counter = counter + 1
    basic.pause(100)
})
