"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withWarnings() {
    var a = 6;
    //Type number trivially inferred from a number literal, remove type annotation
    //'a' is never reassigned. Use 'const' instead
    console.log("a=" + a);
    var u;
    //u="abc"; 
    console.log("u=" + u);
    var ageEventuel = null;
    console.log("ageEventuel=" + ageEventuel);
}
function better() {
    var a = 6;
    console.log("a=" + a);
}
withWarnings();
better();
//# sourceMappingURL=bad_better.js.map