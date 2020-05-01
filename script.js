const link_blue = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-blue.patt?v=1588088872172";
const link_green = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-green.patt?v=1588088872385";
const link_red = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-red.patt?v=1588088872474";
const link_cylinder = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-cylinder.patt?v=1588089443520";
const link_for = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-for.patt?v=1588089443739";
const link_sphere = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-sphere.patt?v=1588089443759";
const link_arrow = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-arrow.patt?v=1588089443899";
const link_box = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-cube.patt?v=1588089444176";

const box = "box-patt";
const sphere = "sphere-patt";
const cylinder = "cylinder-patt";

const red = "red-patt";
const blue = "blue-patt";
const green = "green-patt";
const col = "color-patt";

let cnt = 0;
let isContinuous = false;

const commands = [
    //shapes
    box, sphere, cylinder,
    //colors
    red, blue, green
];

let pos = [0, 0, 0], w = 1, h = 1, d = 1, r = 0.5;
let opacity = 1;

let debug = false;
let code = "";
let lastEl;
let anim = "";
let shapeDrawing = false;

function combineMarkers(id) {
    if (debug) {
        console.log("Current marker: " + id);
    }
    let sceneEl = document.querySelector('a-scene');
    if (id === box) {
        code += '<a-box id="d' + cnt +
            '" position="' + pos.join(' ') +
            '" color="' + hexColor +
            '" height="' + h +
            '" width="' + w +
            '" animation="' + anim +
            '">' +
            '</a-box>\n';
        document.getElementById(id).innerHTML = code;
        cnt += 1;
        shapeDrawing = true;
    } else if (id === cylinder) {
        code += '<a-cylinder id="d' + cnt +
            '" position="' + pos.join(' ') +
            '" color="' + hexColor +
            '" height="' + h +
            '" radius="' + r +
            '" animation="' + anim +
            '">' +
            '</a-cylinder>\n';
        document.getElementById(id).innerHTML = code;
        cnt += 1;
        shapeDrawing = true;
    } else if (id === sphere) {
        code += '<a-sphere id="d' + cnt +
            '" position="' + pos.join(' ') +
            '" color="' + hexColor +
            '" radius="' + r +
            '" animation="' + anim +
            '">' +
            '</a-sphere>\n';
        document.getElementById(id).innerHTML = code;
        cnt += 1;
        shapeDrawing = true;
    } else if (id === blue) {
        shapeDrawing = false;
        anim = "property: material.color; to: " + hexColorAnim + "; dur: 5000; easing: linear; loop: true";
    } else {
        openUIDialog(id);
    }
    //lastEl.setAttribute("animation", "property: rotation; to: 0 360 0; loop: true; dur: 10000");
    if (isContinuous) {
        pos[0] += 0.5;
    }
    lastEl = sceneEl.querySelector('#d' + (cnt - 1));
}

function fillScene() {
    document.getElementById("scene").innerHTML =
        '<a-marker type="pattern" id="' + box + '" url="' + link_box + '" registerevents>\n' +
        '<a-box color="black" depth="1" height="1" width="1"></a-box>\n' +
        '</a-marker>\n' +
        '<a-marker type="pattern" id="' + sphere + '" url="' + link_sphere + '" registerevents>\n' +
        '<a-sphere color="black" radius="1"></a-sphere>\n' +
        '</a-marker>\n' +
        '<a-marker type="pattern" id="' + cylinder + '" url="' + link_cylinder + '" registerevents>\n' +
        '<a-cylinder color="black" height="1" radius="1"></a-cylinder>\n' +
        '</a-marker>\n' +
        '<a-marker type="pattern" id="' + red + '" url="' + link_red + '" registerevents>\n' +
        '</a-marker>\n' +
        '<a-marker type="pattern" id="' + green + '" url="' + link_green + '" registerevents>\n' +
        '</a-marker>\n' +
        '<a-marker type="pattern" id="' + blue + '" url="' + link_blue + '" registerevents>\n' +
        '</a-marker>\n' +
        '<a-entity camera></a-entity>\n';
}
