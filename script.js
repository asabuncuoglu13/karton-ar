const square = "square";
const circle = "circle";

const box = "box";
const sphere = "sphere";
const cylinder = "cylinder";

const red = "red";
const blue = "blue";
const green = "green";
const for3 = "for3";

let w = 1;
let h = 1;
let d = 1;
let opacity = 1;
let color = "blue";

let code = "";

function combineMarkers(id) {
  if (id === box) {
    code +=
      '<a-box position="0 0 0.5" material="opacity: ' +
      opacity +
      "; side: double; color:" +
      color +
      '; width: "' +
      w +
      '; height: "' +
      h +
      '; depth: "' +
      d +
      ">";
  }
  if (id === red) {
    color = red;
  }

  document.getElementById(id).innerHTML = code;
}
