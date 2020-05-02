function openUIDialog(id) {
    $("#dialog").dialog({
        width: "auto"
    });
    //$("#dialog").empty();
    if (id === col) {
        appendColorSlider();
    } else if (id === for_loop) {
        appendForLoopSlider();
    } else if (id === dimension) {
        appendDimensionSlider();
    } else {
    }
}

function refreshSwatch() {
    let red = $("#redSlider").slider("value"),
        green = $("#greenSlider").slider("value"),
        blue = $("#blueSlider").slider("value");
    if (!shapeDrawing) {
        hexColorAnim = "#" + hexFromRGB(red, green, blue);
    } else {
        hexColor = "#" + hexFromRGB(red, green, blue);
    }
    $("#swatchArea").css("background-color", !shapeDrawing ? hexColorAnim : hexColor);
}

function appendColorSlider() {
    $("#dialog").html(
        "<p id='red-slider-text'>Kırmızı oranını ayarlayın: </p>" +
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