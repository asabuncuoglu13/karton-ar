
let redComponent = "FF", greenComponent = "FF", blueComponent = "FF";
let hexColor = "#000000";
let hexColorAnim = "#000000";

function hexFromRGB(r, g, b) {
    var hex = [
        r.toString(16),
        g.toString(16),
        b.toString(16)
    ];
    $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
        }
    });
    redComponent = hex[0];
    greenComponent = hex[1];
    blueComponent = hex[2];
    return hex.join( "" ).toUpperCase();
}

function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
        green = $( "#green" ).slider( "value" ),
        blue = $( "#blue" ).slider( "value" );
    if (!shapeDrawing){
        hexColorAnim = "#" + hexFromRGB( red, green, blue );
    }else{
        hexColor = "#" + hexFromRGB( red, green, blue );
    }
    $( "#swatch" ).css( "background-color", !shapeDrawing ? hexColorAnim :hexColor);
}