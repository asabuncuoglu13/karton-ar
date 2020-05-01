function openUIDialog(id){
    $( "#dialog" ).dialog({
        width: "auto"
    });
    if (id === red) {
        appendColorSlider();
    } else {
    }
}

function appendColorSlider(){
    $("#dialog").html(
        "<p id='red-slider-text'>Kırmızı oranını ayarlayın: </p>" +
        "<div id=\"red\"></div>\n" +
        "<div id=\"green\"></div>\n" +
        "<div id=\"blue\"></div>\n" +
        "<div id=\"swatch\" class=\"ui-widget-content ui-corner-all\"></div>" +
        "<script>\n" +
        "$( \"#red, #green, #blue\" ).slider({\n" +
        "    orientation: \"horizontal\",\n" +
        "    range: \"min\",\n" +
        "    max: 255,\n" +
        "    value: 127,\n" +
        "    slide: refreshSwatch,\n" +
        "    change: refreshSwatch\n" +
        "});\n" +
        "$( \"#red\" ).slider( \"value\", 255 );\n" +
        "$( \"#green\" ).slider( \"value\", 140 );\n" +
        "$( \"#blue\" ).slider( \"value\", 60 );" +
        "</script>\n");
}