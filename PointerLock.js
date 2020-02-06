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
   function changeCallback(e) {
               if (document.pointerLockElement === canvas ||
                document.mozPointerLockElement === canvas ||
                document.webkitPointerLockElement === canvas) {
            document.addEventListener("mousemove", updatePosX, false);
        } else {
            document.removeEventListener("mousemove", updatePosX, false);
        }
   }
    function updatePosX(e) {
      var movementX = e.movementX
      }
    return movementX
};

ext.pointerlockmovementY = function(){
   function changeCallback(e) {
               if (document.pointerLockElement === canvas ||
                document.mozPointerLockElement === canvas ||
                document.webkitPointerLockElement === canvas) {
            document.addEventListener("mousemove", updatePosY, false);
        } else {
            document.removeEventListener("mousemove", updatePosY, false);
        }
   }
    function updatePosY(e) {
      var movementY = e.movementY
      }
    return movementY
};
    
ext.pointerlockison = function(){
            if (document.pointerLockElement === canvas ||
                document.mozPointerLockElement === canvas ||
                document.webkitPointerLockElement === canvas) {
return true
        } else {
return false
        }
};
    
    var descriptor = {
        blocks: [
[' ','request pointer lock','pointerlockon'],
[' ','exit pointer lock','pointerlockoff'],
['r','pointer lock movement X','pointerlockmovementX'],
['r','pointer lock movement Y','pointerlockmovementY'],
['b','pointer lock is on?','pointerlockison'],
        ]
    };

    ScratchExtensions.register('Pointer lock', descriptor, ext);
    function setup() {document.addEventListener('pointerlockchange', changeCallback, false)}
    setup()
x=document.createElement("canvas");document.getElementsByTagName("head")[0].appendChild(x)
var canvas = document.querySelector('canvas')
})({});
