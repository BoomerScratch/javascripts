(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

ext.pointerlockon = function(){
canvas.requestPointerLock();
        document.addEventListener("mousemove", moveCallbackX, false);
            document.addEventListener("mousemove", moveCallbackY, false);
};

ext.pointerlockoff = function(){
document.exitPointerLock();
            document.removeEventListener("mousemove", moveCallbackX, false);
        document.removeEventListener("mousemove", moveCallbackY, false);
};

ext.pointerlockmovementX = function(){
function moveCallbackX(e) {
mx = e.movementX
}
    moveCallbackX()
    return mx
};

ext.pointerlockmovementY = function(){
function moveCallbackY(e) {
  mx = e.movementY
}
    moveCallbackY()
    return movementY
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
