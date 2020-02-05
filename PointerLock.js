var canvas = document.querySelector('canvas');
class PointerLock {
getInfo() {
    return {
        "id": "PointerLock",
        "name": "Pointer lock (hide cursor)",
        "blocks": [{
                    "opcode": "cursorlockon",
                    "blockType": "command",
                    "text": "turn cursor lock on",
                    "arguments": {}
                },{
                    "opcode": "cursorlockoff",
                    "blockType": "command",
                    "text": "turn cursor lock off",
                    "arguments": {}
                },{
                    "opcode": "cursorlockmovementx",
                    "blockType": "reporter",
                    "text": "cursor lock movement X",
                    "arguments": {}
                },{
                    "opcode": "cursorlockmovementy",
                    "blockType": "reporter",
                    "text": "cursor lock movement Y",
                    "arguments": {}
                },{
                    "opcode": "cursorlockison",
                    "blockType": "boolean",
                    "text": "cursor lock is on?",
                    "arguments": {}
                }],
        "menus": {}
    };
}
cursorlockon({}) {
var cursorlock = true
}
cursorlockoff({}) {
var cursorlock = false
}
cursorlockmovementx({}) {
function getMovement(e) {
var mX = e.MovementX
var mY = e.MovementY
}
return mX
}
cursorlockmovementy({}) {
function getMovement(e) {
var mX = e.MovementX
var mY = e.MovementY
}
return mY
}
cursorlockison({}) {
return cursorlock
}
}
if (cursorlock) {
canvas.requestPointerLock = canvas.requestPointerLock ||
                            canvas.mozRequestPointerLock;

canvas.onclick = function() {
  canvas.requestPointerLock();
}
} else {
document.exitPointerLock = document.exitPointerLock ||
                           document.mozExitPointerLock;
}
Scratch.extensions.register(new PointerLock())
