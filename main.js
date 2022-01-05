// color links
const link_blue = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-blue.patt";
const link_green = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-green.patt";
const link_red = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-red.patt";
const link_color = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-color.patt";

// shape links
const link_box = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-cube.patt";
const link_cylinder = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-cylinder.patt";
const link_cone = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-cone.patt";
const link_sphere = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-sphere.patt";
const link_arrow = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-arrow.patt";
const link_dimension = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-ruler.patt";
const link_rotate = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-rotate.patt";

// control links
const link_for_loop = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-for.patt";

// animation links
const link_rotate_anim = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-rotate_anim.patt";
const link_color_anim = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-color_anim.patt";

// asset links
const link_lego = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/patt/pattern-lego.patt";
const figure_lego_gltf = "https://raw.githubusercontent.com/asabuncuoglu13/karton-ar/master/gltf/lego-spiderman/scene.gltf";

// colors
const red = "red-patt";
const blue = "blue-patt";
const green = "green-patt";
const col = "color-patt";

// shapes
const box = "box-patt";
const sphere = "sphere-patt";
const cylinder = "cylinder-patt";
const cone = "cone-patt";
const dimension = "dimension-patt";
const rotate = "rotate-patt";

// control
const for_loop = "for-loop-patt";

// animation
const color_anim = "color-anim-patt";
const rotate_anim = "rotate-anim-patt";

// assets
const lego = "lego-patt";

const commands = [
    // shapes
    box, sphere, cylinder, cone, dimension, rotate,
    // colors
    red, blue, green, col,
    //control
    for_loop,
    // animations
    color_anim, rotate_anim,
    //assets
    lego
];

const links = [
    // shapes
    link_box, link_sphere, link_cone, link_cylinder, link_dimension, link_rotate,
    // colors
    link_red, link_blue, link_green, link_color,
    //control
    link_for_loop,
    // animations
    link_color_anim, link_rotate_anim,
    //assets
    link_lego
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
let tmp;
let lastEl;

function combineMarkers(id) {
    if (debug) {
        console.log("Current marker: " + id);
    }
    let sceneEl = document.querySelector('a-scene');
    if (isShape(id)) {
        if (tmp !== id) {
            for (let i = 0; i < loopTimes; i++) {
                drawShape(id, pos);
                if (isContinuous) {
                    pos[0] += 1;
                }
            }
            document.getElementById(id).innerHTML = code;
            cnt += 1;
            shapeDrawing = true;
        }
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
    tmp = id;
}

function drawGLTF(id, position) {

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
    } else if (id === cone) {
        code += '<a-cone id="d' + cnt +
            '" position="' + position.join(' ') +
            '" color="' + hexColor +
            '" height="' + h +
            '" radius-bottom="' + r +
            '" animation="' + anim +
            '">' +
            '</a-cone>\n';
    } else if (id === sphere) {
        code += '<a-sphere id="d' + cnt +
            '" position="' + position.join(' ') +
            '" color="' + hexColor +
            '" radius="' + r +
            '" animation="' + anim +
            '">' +
            '</a-sphere>\n';
    } else if (id === lego){
        code += '<a-entity gltf-model="url('+ link_lego +')"></a-entity>'
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
    if (id === cone) {
        return true;
    }

    if (id === lego) {
        return true;
    }
    return id === cylinder;
}
