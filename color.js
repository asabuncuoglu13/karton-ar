
let redComponent = "163", greenComponent = "171", blueComponent = "184";
let hexColor = hexFromRGB(redComponent, greenComponent, blueComponent);
let hexColorAnim = "#a3abb8";
let tempColor = "#a3abb8";

function hexFromRGB(r, g, b) {
    let hex = [
        r.toString(16),
        g.toString(16),
        b.toString(16)
    ];
    $.each( hex, function( nr, val ) {
        if ( val.length === 1 ) {
            hex[ nr ] = "0" + val;
        }
    });
    return hex.join( "" ).toUpperCase();
}