keyboard.kbEvent(KeyValue.key4, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key7, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key1, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key5, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key9, function () {
    basic.pause(500)
    if (etape == 1) {
        etape = 2
    } else if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key8, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key0, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key6, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 4
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 2) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key3, function () {
    basic.pause(500)
    if (etape == 2) {
        etape = 3
    } else if (etape == 0) {
        etape = 4
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 4) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    }
})
keyboard.kbEvent(KeyValue.key2, function () {
    basic.pause(500)
    if (etape == 0) {
        etape = 1
    } else if (etape == 1) {
        etape = 5
    } else if (etape == 5) {
        etape = 6
    } else if (etape == 2) {
        etape = 6
    } else if (etape == 4) {
        etape = 5
    }
})
let etape = 0
etape = 0
keyboard.showColor(0x00ffff)
basic.pause(1000)
keyboard.showColor(0x000000)
basic.forever(function () {
    basic.showNumber(etape)
    if (etape == 3) {
        keyboard.showColor(0x00ff00)
        basic.pause(500)
        basic.showIcon(IconNames.Yes)
        keyboard.showColor(0x000000)
        basic.pause(1000)
        etape = 0
    } else if (etape == 6) {
        keyboard.showColor(0xff0000)
        basic.pause(200)
        basic.showIcon(IconNames.No)
        keyboard.showColor(0x000000)
        basic.pause(1000)
        etape = 0
    }
})
basic.forever(function () {
    if (etape == 1) {
        basic.pause(10000)
        etape = 0
    } else if (etape == 2) {
        basic.pause(10000)
        etape = 0
    } else if (etape == 4) {
        basic.pause(10000)
        etape = 0
    } else if (etape == 5) {
        basic.pause(10000)
        etape = 0
    }
})
