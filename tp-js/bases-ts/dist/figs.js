"use strict";
/*export*/ class Fig2D {
    constructor(typeFig = "?", lineColor = "black", lineWidth = 1, fillColor = undefined) {
        this.typeFig = typeFig;
        this.lineColor = lineColor;
        this.lineWidth = lineWidth;
        this.fillColor = fillColor;
    }
}
/*export*/ class Line extends Fig2D {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0, lineColor = "black", lineWidth = 1) {
        super("line", lineColor, lineWidth);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    performVisit(visitor) {
        visitor.doActionForLine(this);
    }
}
/*export*/ class Circle extends Fig2D {
    constructor(xC = 0, yC = 0, r = 0, lineColor = "black", lineWidth = 1, fillColor = undefined) {
        super("circle", lineColor, lineWidth, fillColor);
        this.xC = xC;
        this.yC = yC;
        this.r = r;
    }
    performVisit(visitor) {
        visitor.doActionForCircle(this);
    }
}
/*export*/ class Rectangle extends Fig2D {
    constructor(x1 = 0, y1 = 0, width = 0, height = 0, lineColor = "black", lineWidth = 1, fillColor = undefined) {
        super("rectangle", lineColor, lineWidth, fillColor);
        this.x1 = x1;
        this.y1 = y1;
        this.width = width;
        this.height = height;
    }
    performVisit(visitor) {
        visitor.doActionForRectangle(this);
    }
}
/*export*/ class ConsoleJsonVisitor {
    constructor() {
        this._alreadyOne = false;
    }
    generateFirstLine() {
        console.log("[");
    }
    generateLastLine() {
        console.log("]");
    }
    _doActionForFig(f) {
        let separateur = this._alreadyOne ? "," : "";
        console.log(separateur + JSON.stringify(f));
        this._alreadyOne = true;
    }
    doActionForCircle(c) {
        this._doActionForFig(c);
    }
    doActionForLine(l) {
        this._doActionForFig(l);
    }
    doActionForRectangle(r) {
        this._doActionForFig(r);
    }
}
/*export*/ class ConsoleSvgVisitor {
    generateFirstLine() {
        console.log("<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'>");
    }
    generateLastLine() {
        console.log("</svg>");
    }
    _svgStyle(f) {
        let sStyle = "";
        if (f.lineColor) {
            sStyle += `stroke:${f.lineColor};`;
        }
        if (f.lineWidth) {
            sStyle += `stroke-width:${f.lineWidth};`;
        }
        if (f.fillColor) {
            sStyle += `fill:${f.fillColor}`;
        }
        else {
            sStyle += `fill:none`;
        }
        return sStyle ? `style='${sStyle}'` : ``;
    }
    doActionForCircle(c) {
        //<circle cx='140' cy='200' r='50' style='fill:red' />
        console.log(`<circle cx='${c.xC}' cy='${c.yC}' r='${c.r}' ${this._svgStyle(c)} />`);
    }
    doActionForLine(l) {
        //<line x1='150' y1='50' x2='250' y2='230'  style='fill:blue;stroke: mediumblue;' />
        console.log(`<line x1='${l.x1}' y1='${l.y1}' x2='${l.x2}' y2='${l.y2}'  ${this._svgStyle(l)} />`);
    }
    doActionForRectangle(r) {
        //<rect x='50' y='50' width='80' height='80' style='fill:green' />
        console.log(`<rect x='${r.x1}' y='${r.y1}' width='${r.width}' height='${r.height}' ${this._svgStyle(r)} />`);
    }
}
//mode="json" ou "svg"
function my_ts_test(mode) {
    var tabFig = new Array();
    tabFig.push(new Line(20, 20, 180, 200, "red"));
    tabFig.push(new Circle(100, 100, 50, "blue"));
    tabFig.push(new Circle(250, 200, 50, "black", 2, "blue"));
    tabFig.push(new Rectangle(200, 100, 50, 60, "green"));
    tabFig.push(new Rectangle(20, 100, 50, 60, "black", 3, "green"));
    var visitor;
    switch (mode) {
        case "svg":
            visitor = new ConsoleSvgVisitor();
            break;
        case "json":
        default:
            visitor = new ConsoleJsonVisitor();
    }
    visitor.generateFirstLine();
    for (let f of tabFig) {
        f.performVisit(visitor);
    }
    visitor.generateLastLine();
}
//my_ts_test("json");
my_ts_test("svg");
//NB: lancer node dist/figs.js > figs.json
// ou bien   node dist/figs.js > figs.svg
// pour générer un fichier .
//# sourceMappingURL=figs.js.map