"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function withWarnings() {
    let a = 6;
    //Type number trivially inferred from a number literal, remove type annotation
    //'a' is never reassigned. Use 'const' instead
    console.log("a=" + a);
    let u;
    //u="abc"; 
    console.log("u=" + u);
    let ageEventuel = null;
    console.log("ageEventuel=" + ageEventuel);
}
function better() {
    const a = 6;
    console.log("a=" + a);
}
withWarnings();
better();
//# sourceMappingURL=bad_better.js.map