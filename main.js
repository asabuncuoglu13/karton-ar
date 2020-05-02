// color links
const link_blue = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-blue.patt?v=1588088872172";
const link_green = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-green.patt?v=1588088872385";
const link_red = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-red.patt?v=1588088872474";
const link_color = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-color.patt?v=1588358076458";

// shape links
const link_box = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-cube.patt?v=1588089444176";
const link_cylinder = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-cylinder.patt?v=1588089443520";
const link_sphere = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-sphere.patt?v=1588089443759";
const link_arrow = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-arrow.patt?v=1588089443899";
const link_dimension = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-ruler.patt?v=1588358076409";
const link_rotate = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-rotate.patt?v=1588358076491";

// control links
const link_for_loop = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-for.patt?v=1588089443739";

// animation links
const link_rotate_anim = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-rotate_anim.patt?v=1588422935831";
const link_color_anim = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-color_anim.patt?v=1588358076740";

// colors
const red = "red-patt";
const blue = "blue-patt";
const green = "green-patt";
const col = "color-patt";

// shapes
const box = "box-patt";
const sphere = "sphere-patt";
const cylinder = "cylinder-patt";
const dimension = "dimension-patt";
const rotate = "rotate-patt";

// control
const for_loop = "for-loop-patt";

// animation
const color_anim = "color-anim-patt";
const rotate_anim = "rotate-anim-patt";

const commands = [
    // shapes
    box, sphere, cylinder, dimension, rotate,
    // colors
    red, blue, green, col,
    //control
    for_loop,
    // animations
    color_anim, rotate_anim
];

const links = [
    // shapes
    link_box, link_sphere, link_cylinder, link_dimension, link_rotate,
    // colors
    link_red, link_blue, link_green, link_color,
    //control
    link_for_loop,
    // animations
    link_color_anim, link_rotate_anim
];

// parameters
let pos = [0, 0, 0], w = 1, h = 1, d = 1, r = 0.5;
let opacity = 1;
let loopTimes = 1;
let duration = 5;
let anim = "";

let debug = false;
let cnt = 0;
let isContinuous = true;
let shapeDrawing = true;

let code = "";
let lastEl;

function combineMarkers(id) {
    if (debug) {
        console.log("Current marker: " + id);
    }
    let sceneEl = document.querySelector('a-scene');
    if (isShape(id)) {
        for (let i = 0; i <loopTimes; i++){
            drawShape(id, pos);
            if (isContinuous) {
                pos[0] += 1;
            }
        }
        document.getElementById(id).innerHTML = code;
        cnt += 1;
        shapeDrawing = true;
    } else if (id === color_anim) {
        shapeDrawing = false;
        anim = "property: material.color; to: " + hexColorAnim + "; " +
            "dur: ; " + (duration * 1000) +
            "easing: linear; " +
            "loop: " + loopTimes;
    } else {
        openUIDialog(id);
    }
    //lastEl.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 10000");
    lastEl = sceneEl.querySelector('#d' + (cnt - 1));
}

function drawShape(id, position) {
    if (id === box) {
        code += '<a-box id="d' + cnt +
            '" position="' + position.join(' ') +
            '" color="' + hexColor +
            '" height="' + h +
            '" width="' + w +
            '" animation="' + anim +
            '">' +
            '</a-box>\n';
    } else if (id === cylinder) {
        code += '<a-cylinder id="d' + cnt +
            '" position="' + position.join(' ') +
            '" color="' + hexColor +
            '" height="' + h +
            '" radius="' + r +
            '" animation="' + anim +
            '">' +
            '</a-cylinder>\n';
    } else if (id === sphere) {
        code += '<a-sphere id="d' + cnt +
            '" position="' + position.join(' ') +
            '" color="' + hexColor +
            '" radius="' + r +
            '" animation="' + anim +
            '">' +
            '</a-sphere>\n';
    }
}

function fillScene() {
    let markerHTML = '<a-scene id="scene" embedded arjs="sourceType: webcam;" renderer="precision: medium;">';
    for (let i = 0; i < commands.length; i++) {
        markerHTML += '<a-marker type="pattern" id="' + commands[i] + '" url="' + links[i] + '">\n</a-marker>\n';
    }
    markerHTML += '<a-entity camera></a-entity>\n</a-scene>';
    document.body.innerHTML = document.body.innerHTML + markerHTML;
    for (let i = 0; i < commands.length; i++) {
        document.getElementById(commands[i]).addEventListener("markerFound", e => {
            document.getElementById("info-box").innerText = commands[i] + " marker is found";
            combineMarkers(commands[i]);
        });
    }
}

function isShape(id) {
    if (id === box) {
        return true;
    }
    if (id === sphere) {
        return true;
    }
    return id === cylinder;
}
