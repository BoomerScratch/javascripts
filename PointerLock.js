(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

ext.pointerlockon = function(){
canvas.requestPointerLock();
};

ext.pointerlockoff = function(){
document.exitPointerLock();
};

ext.pointerlockmovementX = function(){
canvas.addEventListener("mousemove", e => {
  const {
    movementX,
    movementY
  } = e;
    var mX = movementX
}
                        return mX
};

ext.pointerlockmovementY = function(){
canvas.addEventListener("mousemove", e => {
  const {
    movementX,
    movementY
  } = e;
    var mY = movementY
}
                        return mY
};

    var descriptor = {
        blocks: [
[' ','request pointer lock','pointerlockon'],
[' ','exit pointer lock','pointerlockoff'],
['r','pointer lock movement X','pointerlockmovementX'],
['r','pointer lock movement Y','pointerlockmovementY'],
        ]
    };

    ScratchExtensions.register('Pointer lock', descriptor, ext);
x=document.createElement("canvas");document.getElementsByTagName("head")[0].appendChild(x)
var canvas = document.querySelector('canvas')
})({});