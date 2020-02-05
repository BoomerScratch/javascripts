(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

ext.pointerlockon = function(){
var pointerlock = true
canvas.requestPointerLock();
};

ext.pointerlockoff = function(){
var pointerlock = false
document.exitPointerLock();
};

ext.pointerlockmovementX = function(){
function moveCallback(e) {
  var movementX = e.movementX ||
      e.mozMovementX          ||
      e.webkitMovementX       ||
      0,
  movementY = e.movementY ||
      e.mozMovementY      ||
      e.webkitMovementY   ||
      0;
}
    return movementX
};

ext.pointerlockmovementY = function(){
return function moveCallback(e) {
  var movementX = e.movementX ||
      e.mozMovementX          ||
      e.webkitMovementX       ||
      0,
  movementY = e.movementY ||
      e.mozMovementY      ||
      e.webkitMovementY   ||
      0;
}
    return movementY
};

ext.pointerlockison = function(){
return pointerlock
};

    var descriptor = {
        blocks: [
[' ','turn pointer lock on','pointerlockon'],
[' ','turn pointer lock off','pointerlockoff'],
['r','pointer lock movement X','pointerlockmovementX'],
['r','pointer lock movement Y','pointerlockmovementY'],
['b','pointer lock is on?','pointerlockison'],
        ]
    };

    ScratchExtensions.register('Pointer lock', descriptor, ext);
x=document.createElement("canvas");document.getElementsByTagName("head")[0].appendChild(x)
var canvas = document.querySelector('canvas')
})({});
