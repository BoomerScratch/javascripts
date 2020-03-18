const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5AMREgAXcnVLxwAAA7JJREFUSMetlX9I3HUYx1+609PbqZuOa/OEM51rmHMN/eP+MIgp1H/RPweOGKOR0uEGgTFRAhH9ZyX9AGVIycitjBGU5ooJ86ZSufLHIGNtKGljRjUX59TT8+7dH/f51lm2zuiBB77wPJ/n9Tyf53k+X/i7HAWeBVJT+R9FwN7Y5yFgEmgF3AKWjF3/Ia4t/tBPwCdAL9j3QeMRqLgF7++Hr4CbwLrln7SdzI1mCuqi8N06bAgkUBTCgruCdsGjcf7bAuQJegVrguV7MHEOQl27dmk4K0t3DUzwheCJ64Brm4Bm/RnkwhkoAaZz3W6da29Xo9erEWNfhk+7YG/tNgDlgtuCiNH5JTgGvJNqt+vCxYuamZtT9+nTmtu5U2GInIXPAW+igFcEUUG/4G3FGjnfBJeB9ZraWkWjUa2EQvq1oUFKTlYPyA6zwMtA1r8B3jNXUy9IF7wmWL8Hqz7YOFxaqoWFBUmSRkel3bs1uWOH9qWkCAgBl4CyhwEum6s5afrhNJC1O6AXMzM1eOVKDDA9LblcWsvL07utrXrs4EFroG4BLwHOrQBvmQra4kZwE+Tr+voYYGBASk+XKiulYFCTU1Py+Xyy2+0CVoAeYou6CfCCGc8vzbj+AVmBNzcgEna5FD1/Xqqri03aqVNSJCJJWlpaUkdHh4qKipSUlCTgW+AE4LAAHsE1U8VZQYaAccAPuR/AjQcgZWVJqamSyyVdvSpLFhcXFQgEVF1dLZvNZuW3CnQChVa2Twt+MRP0oeApQe4w5B6HS+PWjthsUnOzwqGQhoaG1NjYqIqKCmVnZys5Odlq+jwwAJwBDlsAm+B5wbSpJCj4XnBjGR6EQasOhyINDVIwqG8mJlRQUCAgAqybrBeBJmJL6ozvQbyWCjoFE4KfBYtrMPMxLPs9Hv04O6twJKKamhoBKikp+aGlpeVOYWGhDOgj4MA/PReWpgj2CA4JyvthvxM+S3M41NfXp+HhYeXk5AiQ1+sNTU1NbQwODqq4uNgKMbrlXmgLvQ+8ETM3AfL7/fL5fAKiQBBQWVmZAoGARkZGVF5ebh2dAJ5M6CkxchT4zePxyOl0yjTyGNALhPPz89Xd3a2xsTFVVVVZ43oTeC5RwCPAuDkooJ3YP2cP8DqwkpGRoba2NnV2diotLU2mQn+iABvQZYLfBh6Ps6UDDcB9h8Mht9stYA1oNraE5QSxOX91C1sKcByYMUn0AJnbCQ5wBOgHPA/xqTSVHkgo4l/EBTyTgN+ma/kd7IkjYmFq4gEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDMtMTdUMTg6MDA6MTErMDA6MDB4ROpcAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTAzLTE3VDE4OjAwOjExKzAwOjAwCRlS4AAAAABJRU5ErkJggg==";

document.onmousemove = function(e) {
pointerMovementX = e.movementX
pointerMovementY = e.movementY
setTimeout(function(){pointerMovementX = 0;pointerMovementY = 0},10)
};

const PointerLock = function() {}

  pointerLock.prototype.getInfo = function() {
    return {
      id: 'pointerlock',
      name: 'Pointer lock',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'requestLock',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Request pointer lock',
        },
        {
          opcode: 'exitLock',

          blockType: Scratch.BlockType.COMMAND,

          text: 'Exit pointer lock',
        },
        {
          opcode: 'pointermovementX',

          blockType: Scratch.BlockType.REPORTER,

          text: 'Pointer lock movement X',
        },
        {
          opcode: 'pointermovementY',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Pointer lock movement Y',
        },
        {
          opcode: 'pointerlockIsOn',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'Pointer lock is on?',
        },
      ],
    }
  }

  PointerLock.prototype.requestLock = function() {
document.body.requestPointerLock = document.body.requestPointerLock ||
                                   document.body.mozRequestPointerLock;

document.body.requestPointerLock();
  }

  PointerLock.prototype.exitLock = function() {
document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock;

document.exitPointerLock();
  }

  PointerLock.prototype.pointermovementX = function() {
return pointerMovementX
  }

  PointerLock.prototype.pointermovementY = function() {
return pointerMovementY
  }

  PointerLock.prototype.pointerlockIsOn = function() {
            if (document.pointerLockElement === document.body ||
                document.mozPointerLockElement === document.body ||
                document.webkitPointerLockElement === document.body) {
return true
        } else {
return false
        }
  }

}

Scratch.extensions.register(new PointerLock());
