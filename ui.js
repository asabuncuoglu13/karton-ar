function openUIDialog(id) {
    $("#dialog").dialog({
        resizable: false,
        height: "auto",
        width: "auto",
        modal: true,
        buttons: {
            Ok: function() {
                $( this ).dialog( "close" );
            }
        }
    });
    //$("#dialog").empty();
    if (id === col) {
        appendColorSlider();
    } else if (id === red) {
        appendRedSlider();
    } else if (id === green) {
        appendGreenSlider();
    } else if (id === blue) {
        appendBlueSlider();
    } else if (id === for_loop) {
        appendForLoopSlider();
    } else if (id === dimension) {
        appendDimensionSlider();
    } else if (id === position) {
        appendPositionSlider();
    } else if (id === rotate) {
        appendRotateSlider();
    } else {
        $("#dialog").dialog( "close" );
    }
}

function refreshSwatch() {
    redComponent = $("#redSlider").slider("value");
    greenComponent = $("#greenSlider").slider("value");
    blueComponent = $("#blueSlider").slider("value");
    changeColor();
}

function refreshRedSwatch() {
    redComponent = $("#redSlider").slider("value");
    changeColor();
}

function refreshGreenSwatch() {
    greenComponent = $("#greenSlider").slider("value");
    changeColor();
}

function refreshBlueSwatch() {
    blueComponent = $("#blueSlider").slider("value");
    changeColor();
}

function changeColor(){
    if (!shapeDrawing) {
        hexColorAnim = "#" + hexFromRGB(redComponent, greenComponent, blueComponent);
    } else {
        hexColor = "#" + hexFromRGB(redComponent, greenComponent, blueComponent);
    }
    $("#swatchArea").css("background-color", !shapeDrawing ? hexColorAnim : hexColor);
}

function appendColorSlider() {
    $("#dialog").html(
        "<p id='red-slider-text'>Renk oranlarını ayarlayın: </p>" +
        "<div id='redSlider' class='pop-slider'></div>\n" +
        "<div id='greenSlider' class='pop-slider'></div>\n" +
        "<div id='blueSlider' class='pop-slider'></div>\n" +
        "<div id='swatchArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#redSlider, #greenSlider, #blueSlider' ).slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 255,\n" +
        "    value: 127,\n" +
        "    slide: refreshSwatch,\n" +
        "    change: refreshSwatch\n" +
        "});\n" +
        "$( '#redSlider' ).slider( 'value', 255 );\n" +
        "$( '#greenSlider' ).slider( 'value', 140 );\n" +
        "$( '#blueSlider' ).slider( 'value', 60 );" +
        "</script>\n");
}

function appendRedSlider() {
    $("#dialog").html(
        "<p id='red-slider-text'>Kırmızı oranını ayarlayın: </p>" +
        "<div id='redSlider' class='pop-slider'></div>\n" +
        "<div id='swatchArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#redSlider').slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 255,\n" +
        "    value: 127,\n" +
        "    slide: refreshRedSwatch,\n" +
        "    change: refreshRedSwatch\n" +
        "});\n" +
        "$( '#redSlider' ).slider( 'value', 120 );\n" +
        "</script>\n");
}

function appendGreenSlider() {
    $("#dialog").html(
        "<p id='green-slider-text'>Yeşil oranını ayarlayın: </p>" +
        "<div id='greenSlider' class='pop-slider'></div>\n" +
        "<div id='swatchArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#greenSlider').slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 255,\n" +
        "    value: 127,\n" +
        "    slide: refreshGreenSwatch,\n" +
        "    change: refreshGreenSwatch\n" +
        "});\n" +
        "$( '#greenSlider' ).slider( 'value', 120 );\n" +
        "</script>\n");
}

function appendBlueSlider() {
    $("#dialog").html(
        "<p id='blue-slider-text'>Mavi oranını ayarlayın: </p>" +
        "<div id='blueSlider' class='pop-slider'></div>\n" +
        "<div id='swatchArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#blueSlider').slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 255,\n" +
        "    value: 127,\n" +
        "    slide: refreshBlueSwatch,\n" +
        "    change: refreshBlueSwatch\n" +
        "});\n" +
        "$( '#blueSlider' ).slider( 'value', 120 );\n" +
        "</script>\n");
}

function refreshCount() {
    loopTimes = $("#countSlider").slider("value");
    $("#loopCount").html(loopTimes);
}

function appendForLoopSlider() {
    $("#dialog").html(
        "<p id='for-loop-slider-text'>Döngü miktarını belirleyin: </p>" +
        "<div id='countSlider' class='pop-slider'></div>\n" +
        "<p id='loopCount' class='pop-result ui-widget-content ui-corner-all'></p>" +
        "<script>\n" +
        "$( '#countSlider' ).slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 20,\n" +
        "    value: 3,\n" +
        "    slide: refreshCount,\n" +
        "    change: refreshCount\n" +
        "});\n" +
        "$('#loopCount').html('3');" +
        "</script>\n");
}

function refreshDimension() {
    w = $("#widthSlider").slider("value");
    h = $("#heightSlider").slider("value");
    d = $("#depthSlider").slider("value");
    $("#dimensionArea").html(w + ", " + h + ", " + d);
}

function refreshPosition() {
    posX = $("#xSlider").slider("value");
    posY = $("#ySlider").slider("value");
    posZ = $("#zSlider").slider("value");
    $("#dimensionArea").html(posX + ", " + posY + ", " + posZ);
}

function refreshRotation() {
    rotateX = $("#rotXSlider").slider("value");
    rotateY = $("#rotYSlider").slider("value");
    rotateZ = $("#rotZSlider").slider("value");
    $("#rotxyzArea").html(posX + ", " + posY + ", " + posZ);
}

function appendDimensionSlider() {
    $("#dialog").html(
        "<p id='red-slider-text'>Boyutları belirleyin: </p>" +
        "<div id='widthSlider' class='pop-slider'></div>\n" +
        "<div id='heightSlider' class='pop-slider'></div>\n" +
        "<div id='depthSlider' class='pop-slider'></div>\n" +
        "<div id='dimensionArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#widthSlider, #heightSlider, #depthSlider' ).slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 3,\n" +
        "    value: 1,\n" +
        "    step: 0.2, \n" +
        "    slide: refreshDimension,\n" +
        "    change: refreshDimension\n" +
        "});\n" +
        "$( '#widthSlider' ).slider( 'value', 1 );\n" +
        "$( '#heightSlider' ).slider( 'value', 1 );\n" +
        "$( '#depthSlider' ).slider( 'value', 1 );" +
        "</script>\n");
}

function appendPositionSlider() {
    $("#dialog").html(
        "<p id='position-slider-text'>Konumu belirleyin:</p>" +
        "<div id='xSlider' class='pop-slider'></div>\n" +
        "<div id='ySlider' class='pop-slider'></div>\n" +
        "<div id='zSlider' class='pop-slider'></div>\n" +
        "<div id='xyzArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#xSlider, #ySlider, #zSlider' ).slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 2,\n" +
        "    min: -2,\n" +
        "    value: 0,\n" +
        "    step: 0.2, \n" +
        "    slide: refreshPosition,\n" +
        "    change: refreshPosition\n" +
        "});\n" +
        "$( '#xSlider' ).slider( 'value', 0 );\n" +
        "$( '#ySlider' ).slider( 'value', 0 );\n" +
        "$( '#zSlider' ).slider( 'value', 0 );" +
        "</script>\n");
}

function appendRotateSlider() {
    $("#dialog").html(
        "<p id='rotate-slider-text'>Dönüş derecesini belirleyin:</p>" +
        "<div id='rotXSlider' class='pop-slider'></div>\n" +
        "<div id='rotYSlider' class='pop-slider'></div>\n" +
        "<div id='rotZSlider' class='pop-slider'></div>\n" +
        "<div id='rotxyzArea' class='pop-result ui-widget-content ui-corner-all'></div>" +
        "<script>\n" +
        "$( '#rotXSlider, #rotYSlider, #rotZSlider' ).slider({\n" +
        "    orientation: 'horizontal',\n" +
        "    range: 'min',\n" +
        "    max: 360,\n" +
        "    min: 0,\n" +
        "    value: 0,\n" +
        "    step: 20, \n" +
        "    slide: refreshRotation,\n" +
        "    change: refreshRotation\n" +
        "});\n" +
        "$( '#rotXSlider' ).slider( 'value', 0 );\n" +
        "$( '#rotYSlider' ).slider( 'value', 0 );\n" +
        "$( '#rotZSlider' ).slider( 'value', 0 );" +
        "</script>\n");
}