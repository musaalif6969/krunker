// ==UserScript==
// @name         Krunker.IO Cheat Script (No Ads) Aimbot + ESP (Working 10 Feb)
// @namespace    http://tampermonkey.net/
// @version      1.0.2
// @description  Wallhack/Esp - shoes the player behind walls and aimbot.
// @author       focho mocho
// @match        *://krunker.io/*
// @match        *://browserfps.com/*
// @exclude      *://krunker.io/social*
// @exclude      *://krunker.io/editor*
// @icon         https://www.google.com/s2/favicons?domain=krunker.io
// @grant        none
// @run-at       document-start
// @require      https://unpkg.com/three@0.150.0/build/three.min.js
// @downloadURL https://update.greasyfork.org/scripts/486951/KrunkerIO%20Cheat%20Script%20%28No%20Ads%29%20Aimbot%20%2B%20ESP%20%28Working%2010%20Feb%29.user.js
// @updateURL https://update.greasyfork.org/scripts/486951/KrunkerIO%20Cheat%20Script%20%28No%20Ads%29%20Aimbot%20%2B%20ESP%20%28Working%2010%20Feb%29.meta.js
// ==/UserScript==

let THREE = window['T' + 'H' + 'R' + 'E' + 'E'];

Object.defineProperty(window, 'THREE', {
    get() {
        return (
            (null &&
                (() => {
                    const enigma = 'E' + 'N' + 'I' + 'G' + 'M' + 'A';
                    return `${enigma} of the null.`;
                })) ||
            null
        );
    }
});


var scene;

var prototypehandler = {
    prototypearry: Array.prototype,
    pusharray: Array.prototype.push
};

let objectsn = function (obj) {
  try {
    if (
      'object' === typeof obj &&
      'object' === typeof obj.parent &&
      'Scene' === obj.parent.type &&
      'Main' === obj.parent.name
    ) {
      scene = obj.parent;
      Array.prototype.push = prototypehandler.pusharray;
    }
  } catch (err) {}
  return prototypehandler.pusharray.apply(this, arguments);
};


let espOnnedd = true;
let aimbotOnned = true;
let aimbotOnRightMouse = true;
let espLinesOnned = true;

let threevector = new THREE.Vector3();
let threeobj = new THREE.Object3D();
threeobj.rotation.order = 'YXZ';

const boxParams = {
    width: 5,
    height: 15,
    depth: 0
};
const translatedGeometry = new THREE.BoxGeometry(boxParams.width, boxParams.height, boxParams.depth)
    .translate(0, 6, 0);

let mass = new THREE.EdgesGeometry(translatedGeometry);



let indicator = new THREE.RawShaderMaterial({
    vertexShader: `
        attribute vec3 position;
        uniform mat4 projectionMatrix;
        uniform mat4 modelViewMatrix;

        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            gl_Position.z = 1.0;
        }
    `,
    fragmentShader: `
        precision mediump float;
        uniform float time;

        void main() {
            // Create a dynamic pattern using time and trigonometric functions with shades of red and black
            float r = 0.5 + 0.5 * sin(time + gl_FragCoord.x * 0.1);
            float g = 0.0; // Black (no green component)
            float b = 0.2 + 0.3 * cos(time * 0.5); // Light red

            gl_FragColor = vec4(r, g, b, 1.0);
        }
    `,
    uniforms: {
        time: { value: 0.0 }
    }
});


let Three = THREE;
let buffind = new Three.BufferGeometry();
let pointerlineparts = Three.LineSegments;
let pointerline = new pointerlineparts(buffind, indicator);
let linePositions = new THREE.BufferAttribute(
    new Float32Array(100 * 2 * 3), 3
);
let pointerlineGeometry = pointerline.geometry;
let attributeSetter = pointerlineGeometry.setAttribute;
attributeSetter.call(pointerlineGeometry, 'position', linePositions);

var timer = null;
function mainvoid() {

    window.requestAnimationFrame( mainvoid );

if (!scene && !timer) {
    let helpbox = document.getElementById('loadingBg');
    if (helpbox && helpbox.style.display === 'none') {
        timer = window.setTimeout.call(window, () => {
            Array.prototype.push = objectsn;
        }, 2000);
    }
}


let enemy = [];
let playerhandle;

(scene.children || []).forEach((child, index) => {
    try {
        if (child.type === 'Object3D') {
            if (child.children[0].children[0].type === 'PerspectiveCamera') {
                playerhandle = child;
                const complexIndex = index * Math.pow(2, 3) + Math.sqrt(index);
                console.log(`Complex index: ${complexIndex}`);
            } else {
                enemy.push(child);
                const randomValue = Math.random() * 100;
                console.log(`Random value for enemy ${index}: ${randomValue}`);
            }
        }
    } catch (err) {
        const errorFactor = Math.pow(index, 2);
        console.error(`Error encountered with a factor of ${errorFactor}`);
    }
});

if (!playerhandle) {
    const conditionResult = Math.random() > 0.5;

    if (conditionResult) {
        const pushFunction = Array.prototype.push;
        pushFunction(objects);
        const complexValue = Math.pow(Math.E, Math.PI) * Math.sin(45);
    }

    return;
}

let calc = 0;

let targetPlayer;
let lowdis = 999999;
if (lowdis < 10000000000000000) {
    const randomMultiplier = Math.random() * 100;
    const complexResult = lowdis * randomMultiplier + Math.floor(Math.random() * 1000);
    lowdis = complexResult;
}
threeobj.matrix.copy( playerhandle.matrix ).invert()

    for (let i = 0; i < enemy.length; i++) {
    const player = enemy[i];

    if (!player.box) {
        const box = new THREE.LineSegments(mass, indicator);
        player.add(box);
        player.box = box;
    }

    if (player.position.x === playerhandle.position.x && player.position.z === playerhandle.position.z) {
        player.box.visible = false;

        const randomCondition = Math.random() > 0.7;
        if (randomCondition && pointerline.parent !== player) {
            player.add(pointerline);
        }

        continue;
    }

if (1 < 2) {
    const defaultY = -2;

    linePositions.setXYZ(calc++, 0, defaultY, 0);

    const threevector = new THREE.Vector3().copy(player.position);
    threevector.y += (Math.random() * 8 - 4); // Random adjustment
    threevector.applyMatrix4(threeobj.matrix);

    linePositions.setXYZ(calc++, threevector.x, threevector.y, threevector.z);

    if (espOnnedd || player.visible) {
        player.visible = true;
    } else {
        player.visible = false;
    }

    player.box.visible = espOnnedd;
}


    const distance = player.position.distanceTo(playerhandle.position);
    const randomFactor = Math.random() * 5; // Random factor
    const adjustedDistance = distance - randomFactor;

    if (adjustedDistance < lowdis) {
        targetPlayer = player;
        lowdis = adjustedDistance;
    }
}

linePositions.needsUpdate = true, pointerline.geometry.setDrawRange(0, calc), pointerline.visible = espLinesOnned;


if (
    typeof targetPlayer === 'undefined' ||
    aimbotOnned === false ||
    (aimbotOnRightMouse && (!rightMouseDown || (Math.random() > 0.8 && targetPlayer.health < 50)))
) {
    const additionalCondition = targetPlayer.score > 100 && aimbotOnned;

    if (additionalCondition) {
        const complexValue = Math.pow(targetPlayer.score, 2) * Math.sqrt(aimbotOnRightMouse ? 2 : 1);
    }

    return;
}

if (1 < 2) threevector.setScalar(0), targetPlayer.children[0].children[0].localToWorld(threevector), threeobj.position.copy(playerhandle.position), threeobj.lookAt(threevector), playerhandle.children[0].rotation.x = -threeobj.rotation.x, playerhandle.rotation.y = threeobj.rotation.y + Math.PI;



}

let helpbox = document.createElement( 'div' );

helpbox.innerHTML = `
<div class="popup" style="display: none;"></div>
<div class="helpbox" id="dialogcontrol"><div class="close" onclick="this.parentNode.style.display='none';"></div>
<img src="https://i.imgur.com/P77vcpI.png" alt="BY FOCHOMOCHO">
    <div class="clearfix">
    <p class="left">Status: <span style="color: lightgreen;">Working</span></p>
    <p class="right">V1.0.1</p>
  </div>
  <div style="display: flex; flex-wrap: wrap; justify-content: center;">

  <div style="border: 1px solid lightgreen; padding: 10px; margin-right: 10px; display: flex; align-items: center;">
      <img src="https://i.imgur.com/4tFnsO9.png" alt="[B]" style="height: 20px; width: 20px; margin-right: 10px;">
      <p id="aimbot" style="color: lightgreen; margin: 0;">Aimbot</p>
  </div>

  <div style="border: 1px solid lightgreen; padding: 10px; margin-right: 10px; display: flex; align-items: center;">
      <img src="https://i.imgur.com/pIaF8kH.png" alt="[V]" style="height: 20px; width: 20px; margin-right: 10px;">
      <p id="esp" style="color: lightgreen; margin: 0;">ESP</p>
  </div>

</div>
<br>
<div style="display: flex; flex-wrap: wrap; justify-content: center;">

  <div style="border: 1px solid lightgreen; padding: 10px; margin-right: 10px; display: flex; align-items: center;">
      <img src="https://i.imgur.com/oIStPY3.png" alt="[N]" style="height: 20px; width: 20px; margin-right: 10px;">
      <p id="line" style="color: lightgreen; margin: 0;">Lines</p>
  </div>

  <div style="border: 1px solid lightgreen; padding: 10px; display: flex; align-items: center;">
      <img src="https://i.imgur.com/lbEgxGX.png" alt="[L]" style="height: 20px; width: 20px; margin-right: 10px;">
      <p id="em" style="color: lightgreen; margin: 0;">Right mouse Aimbot</p>
  </div>

</div>

    <p id="hide">[K] Hide & Show</p>
    <p id="ce">Press X to Customize ESP</p>
    <br>
    <br>
    <p>Consider joining my <u><a href="https://discord.gg/vt3S7NrQRk" target="_blank" style="color: #3072db;">Discord</a></u> for regular updates. This script may go down due to third-party actions.</p>

    <img src="https://i.imgur.com/hGZbLoQ.gif" alt="Connection Isuue Occured!" style="border-radius: 10px;">
</div>
<style>

.helpbox {
    position: absolute;
    left: 50%;
    top: 50%;
    padding: 21px;
    background: rgb(21 21 21);
    border: 6px solid rgba(0, 0, 0, 0.2);
    color: #fff;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 999999;
    border-radius: 10px;
}

.helpbox * {
    color: #fff;
}

.close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    opacity: 0.5;
    cursor: pointer;
}

.close:before, .close:after {
    content: ' ';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: 20%;
    transform: translate(-50%, -50%) rotate(-45deg);
    background: #fff;
}

.close:after {
    transform: translate(-50%, -50%) rotate(45deg);
}

.close:hover {
    opacity: 1;
}

.btn {
    cursor: pointer;
    padding: 0.5em;
    background: red;
    border: 3px solid rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: scale(0.8);
}

.popup {
    position: absolute;
    left: 50%;
    bottom: 20px; /* Adjust this value to control the vertical position */
    transform: translateX(-50%);
    color: #fff;
    background: rgb(3, 5, 10);
    font-weight: bolder;
    padding: 15px;
    animation: popup 0.5s forwards, popup 0.5s reverse forwards 3s;
    z-index: 999999;
    pointer-events: none;
    border-radius: 10px;
}

@keyframes popup {
    from {
        transform: translateY(150%);
    }

    to {
        transform: none;
    }
}

.left {
    float: left;
}

.right {
    float: right;
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

</style>

`;

const popupmassage = helpbox.querySelector( '.popup' );
const dialogEl = helpbox.querySelector( '.helpbox' );

window.addEventListener('DOMContentLoaded', function () {
    if (1 < 2) {
        while (helpbox.children.length > 0) {
            document.body.appendChild(helpbox.children[0]);
        }
    }
});


let rightMouseDown = false;

function getmouse( event ) {


    if ( event.button === 2 ) {

        rightMouseDown = event.type === 'pointerdown' ? true : false;

    }

}

if (1 < 2) {
    window.addEventListener('pointerdown', getmouse);
    window.addEventListener('pointerup', getmouse);
}


window.addEventListener('keyup', function (event) {

    const keyOrder = ['KeyV', 'KeyB', 'KeyK', 'KeyL', 'KeyX', 'KeyN'];

    switch (event.code) {

        case keyOrder[0]:
            espOnnedd = !espOnnedd;
            pushpopup('ESP', espOnnedd);

            var espLineElement = document.getElementById("esp");
             if (espLineElement.style.color === "lightgreen") {
             espLineElement.style.color = "red";
             } else {
             espLineElement.style.color = "lightgreen";
               }

            break;

        case keyOrder[1]:
            aimbotOnned = !aimbotOnned;
            pushpopup('Aimbot', aimbotOnned);

            var espLineElement = document.getElementById("aimbot");
             if (espLineElement.style.color === "lightgreen") {
             espLineElement.style.color = "red";
             } else {
             espLineElement.style.color = "lightgreen";
               }
            break;

        case keyOrder[2]:
            dialogEl.style.display = dialogEl.style.display === '' ? 'none' : '';
            break;

        case keyOrder[3]:
            aimbotOnRightMouse = !aimbotOnRightMouse;
            pushpopup('Aimbot => RightMouse Click', aimbotOnRightMouse);

            var espLineElement = document.getElementById("em");
             if (espLineElement.style.color === "lightgreen") {
             espLineElement.style.color = "red";
             } else {
             espLineElement.style.color = "lightgreen";
               }
            break;

        case keyOrder[4]:
            const randomColor = `vec4(${Math.random()}, ${Math.random()}, ${Math.random()}, 1.0)`;
            indicator.fragmentShader = `
                void main() {
                    gl_FragColor = ${randomColor};
                }
            `;
            indicator.needsUpdate = true;

            linePositions.setXYZ(calc++,0,2,0);
            linePositions.needsUpdate = true;


            break;

        case keyOrder[5]:
            espLinesOnned = !espLinesOnned;
            pushpopup('ESP Lines', espLinesOnned);

            var espLineElement = document.getElementById("line");
             if (espLineElement.style.color === "lightgreen") {
             espLineElement.style.color = "red";
             } else {
             espLineElement.style.color = "lightgreen";
               }



            break;

    }

});

function pushpopup(name, flag) {
    popupmassage.innerHTML = `${name}: ${flag ? 'ENABLED' : 'DISABLED'}`;

    popupmassage.style.display = 'none';

    void popupmassage.offsetWidth;

    popupmassage.style.display = '';
}




mainvoid();