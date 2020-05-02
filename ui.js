function openUIDialog(id) {
    $("#dialog").dialog({
        width: "auto"
    });
    //$("#dialog").empty();
    if (id === col) {
        appendColorSlider();
    } else if (id === for_loop) {
        appendForLoopSlider();
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
        "<div id='redSlider'></div>\n" +
        "<div id='greenSlider'></div>\n" +
        "<div id='blueSlider'></div>\n" +
        "<div id='swatchArea' class='ui-widget-content ui-corner-all'></div>" +
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
    loopTimes = $("#singleSlider").slider("value");
    $("#loopCount").html(loopTimes);
}

function appendForLoopSlider() {
    $("#dialog").html(
        "<p id='for-loop-slider-text'>Döngü miktarını belirleyin: </p>" +
        "<div id='singleSlider'></div>\n" +
        "<p id='loopCount' class='ui-widget-content ui-corner-all'></p>" +
        "<script>\n" +
        "$( '#singleSlider' ).slider({\n" +
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

function appendDimensionSlider() {
}