basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (x == y) {
                led.plot(y, x)
            } else {
                continue;
            }
            basic.pause(200)
        }
    }
    basic.clearScreen()
})
