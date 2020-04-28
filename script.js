const link_blue = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-blue.patt?v=1588088872172";
const link_green = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-green.patt?v=1588088872385";
const link_red = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-red.patt?v=1588088872474";
const link_cylinder = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-cylinder.patt?v=1588089443520";
const link_for = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-for.patt?v=1588089443739";
const link_sphere = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-sphere.patt?v=1588089443759";
const link_arrow = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-arrow.patt?v=1588089443899";
const link_cube = "https://cdn.glitch.com/4a5420cd-75bd-4a85-8dfa-2f081e115a63%2Fpattern-cube.patt?v=1588089444176";

const cube = "cube";
const sphere = "sphere";
const cylinder = "cylinder";

const red = "red";
const blue = "blue";
const green = "green";

const commands = [
    //shapes
    cube, sphere, cylinder,
    //colors
    red, blue, green,
];

let w = 1;
let h = 1;
let d = 1;
let opacity = 1;
let color = "black";

let code = "";

function combineMarkers(id) {
    if (id === cube) {
        code += '<a-box color="' + color + '" height="' + h + '" width="' + w + '"></a-box>\n';
        document.getElementById(id).innerHTML = code;
    }
    if (id === red) {
        color = red;
    }
    if (id === blue) {
        color = blue;
    }
    if (id === green) {
        color = green;
    }
}

function fillScene() {
    document.getElementById("scene").innerHTML =
        '<a-marker type="pattern" id="' + cube + '" url="' + link_cube + '" registerevents>\n' +
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
