/*
 * build-lookups.js
 * builds lookup tables for bitwise operations
 */

var fs = require("fs");

emit("EOR", function(a,b){return a^b});
emit("ORA", function(a,b){return a|b});
emit("AND", function(a,b){return a&b});

function emit(name, func) {
    var emission = [];

    for(var i = 0; i < 256; ++i) {
        var a = (i & 0xF0) >> 4;
        var b = (i & 0x0F) >> 0;
        emission.push(func(a,b));
    }

    fs.writeFileSync("bin/" + name + ".txt", emission.join("\n"));
}