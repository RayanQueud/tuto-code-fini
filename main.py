def my_function():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY4, my_function)

def my_function2():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY7, my_function2)

def my_function3():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY1, my_function3)

def my_function4():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY5, my_function4)

def my_function5():
    global etape
    basic.pause(500)
    if etape == 1:
        etape = 2
    elif etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY9, my_function5)

def my_function6():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY8, my_function6)

def my_function7():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY0, my_function7)

def my_function8():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 4
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 1:
        etape = 5
    elif etape == 2:
        etape = 6
keyboard.kb_event(KeyValue.KEY6, my_function8)

def my_function9():
    global etape
    basic.pause(500)
    if etape == 2:
        etape = 3
    elif etape == 0:
        etape = 4
    elif etape == 1:
        etape = 5
    elif etape == 4:
        etape = 5
    elif etape == 5:
        etape = 6
keyboard.kb_event(KeyValue.KEY3, my_function9)

def my_function10():
    global etape
    basic.pause(500)
    if etape == 0:
        etape = 1
    elif etape == 1:
        etape = 5
    elif etape == 5:
        etape = 6
    elif etape == 2:
        etape = 6
    elif etape == 4:
        etape = 5
keyboard.kb_event(KeyValue.KEY2, my_function10)

etape = 0
etape = 0
keyboard.show_color(0x00ffff)
basic.pause(1000)
keyboard.show_color(0x000000)

def on_forever():
    global etape
    basic.show_number(etape)
    if etape == 3:
        keyboard.show_color(0x00ff00)
        basic.pause(500)
        basic.show_icon(IconNames.YES)
        keyboard.show_color(0x000000)
        basic.pause(1000)
        etape = 0
    elif etape == 6:
        keyboard.show_color(0xff0000)
        basic.pause(200)
        basic.show_icon(IconNames.NO)
        keyboard.show_color(0x000000)
        basic.pause(1000)
        etape = 0
basic.forever(on_forever)

def on_forever2():
    global etape
    if etape == 1:
        basic.pause(10000)
        etape = 0
    elif etape == 2:
        basic.pause(10000)
        etape = 0
    elif etape == 4:
        basic.pause(10000)
        etape = 0
    elif etape == 5:
        basic.pause(10000)
        etape = 0
basic.forever(on_forever2)
