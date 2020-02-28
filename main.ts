controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of list) {
        value.setPosition(Math.randomRange(0, 170), Math.randomRange(0, 120))
    }
})
let list: Sprite[] = []
list = [sprites.create(img`
. . . . . 3 3 b 3 3 4 4 3 3 . . 
. . . . 3 2 2 4 3 4 2 2 2 2 3 . 
. . . 3 4 2 2 2 4 2 2 2 4 3 1 3 
. . 3 4 4 2 2 2 4 4 2 2 2 3 3 3 
. 3 2 2 4 2 2 2 2 4 4 2 2 b . . 
. 3 2 2 2 4 2 2 2 2 2 4 2 2 3 . 
. b 4 2 2 2 4 2 2 2 2 2 2 2 3 . 
. 4 b 2 2 2 2 4 4 2 2 2 2 4 3 . 
. 4 4 4 2 2 2 2 2 2 4 4 4 b b . 
. 4 d b 4 2 2 2 2 2 2 2 2 3 . . 
4 d d 5 b 4 2 2 2 2 2 2 2 3 . . 
4 5 d 5 5 b b 4 2 2 2 2 4 3 . . 
4 5 5 d 5 5 d b b b 4 4 3 . . . 
4 5 5 5 d d d d 4 4 b 3 . . . . 
. 4 5 5 5 4 4 4 . . . . . . . . 
. . 4 4 4 . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . 8 8 8 8 6 6 . . . . 
. . . . 8 8 b b b 9 9 9 6 6 . . 
. . . 8 b b b 9 9 9 9 9 9 6 6 . 
. . 8 b b 9 9 9 9 9 9 9 9 9 6 . 
. 8 9 b 9 9 9 9 9 8 9 9 9 9 6 a 
. 8 9 9 9 9 9 6 6 9 9 9 9 9 6 a 
8 9 9 9 9 9 6 6 9 9 9 9 b 6 a a 
8 9 9 9 9 8 6 9 9 9 9 9 b 6 a a 
8 9 9 9 9 9 9 9 9 9 9 b 6 a a c 
6 9 9 9 9 9 9 9 9 9 b 6 a a a c 
6 9 9 9 9 9 9 9 b b 6 a a a c . 
6 6 9 9 9 b b b 6 6 a a a c c . 
. c 6 6 6 6 6 6 a a a a c c . . 
. . c c 8 8 a a a a 8 c c . . . 
. . . c c c c c c c c . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player), sprites.create(img`
. . . . . . . . . . 4 4 4 . . . 
. . . . . . . . 4 2 2 7 7 4 . . 
. . . . . . 4 4 2 2 4 2 7 2 . . 
. . . . 4 4 7 7 2 4 4 2 7 7 2 . 
. . 4 4 7 7 7 7 7 2 2 7 7 7 2 . 
4 4 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
4 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
4 4 4 4 4 4 4 7 7 7 7 7 7 7 7 2 
4 7 5 5 5 5 7 4 4 4 2 2 2 2 2 2 
4 7 7 7 5 5 5 5 5 5 5 7 7 7 7 2 
4 7 7 7 7 7 7 7 5 5 5 7 7 7 7 2 
4 7 7 5 5 5 7 7 7 7 7 7 4 4 4 2 
4 4 4 7 7 5 5 5 5 5 5 5 7 7 4 2 
. . . 4 4 4 7 7 5 5 5 5 7 7 7 2 
. . . . . . 4 4 4 4 7 7 7 7 4 2 
. . . . . . . . . . 4 4 4 2 2 . 
`, SpriteKind.Player), sprites.create(img`
. . . . 4 4 4 b b b b b . . . . 
. . 4 4 b 2 2 2 2 2 2 b b b . . 
. 4 4 2 2 2 2 2 5 2 2 2 2 b 4 . 
. e 2 2 2 2 2 2 2 2 2 5 2 2 e . 
e b 2 5 2 2 5 2 2 2 2 2 2 2 b 4 
e b 2 2 2 2 2 2 2 2 2 2 5 2 2 e 
e b b 2 2 2 2 2 2 2 2 2 2 2 b e 
. f b 2 2 2 2 2 5 2 2 2 2 b f . 
8 7 f f b 2 2 2 2 2 2 b f f 6 8 
8 7 9 f f f f f f f f f f 9 7 8 
e d d 9 9 9 9 9 9 9 9 9 9 d 4 e 
e 4 d 7 d d 7 7 7 d d d d 4 4 e 
e b e 8 8 4 4 8 8 4 4 4 8 e b e 
e e b e 4 4 e e e e e 4 e b e e 
. e e b b 4 4 4 4 4 4 4 4 e e . 
. . . 4 4 4 4 4 e e e e e . . . 
`, SpriteKind.Player), sprites.create(img`
. . c c b b b b b . . . . . . . 
. c b a a a a a a b . . . . . . 
c c a a a a d d a a b . . . . . 
c b a a a a a a d a b . . . . . 
c b a a a a a a a d a b . . . . 
c b a a a a a a a a a b . . . . 
c b a a a a a a a a a e . . . . 
c c b a a a a a a a b e . . . . 
. c b b b a a a b b b e . . . . 
. . e b b b b b b b e e . . . . 
. . . e e b a a b e e e b . . . 
. . . . . e e e e e e b d b b . 
. . . . . . . . . . . b 1 1 1 b 
. . . . . . . . . . . c 1 d d b 
. . . . . . . . . . . c 1 b c . 
. . . . . . . . . . . . c c . . 
`, SpriteKind.Player)]
