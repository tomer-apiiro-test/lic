import { Injectable, NgModule, Component, EventEmitter, Input, Output, Renderer2, ViewChild, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPolygonDrawService = /** @class */ (function () {
    function NgxPolygonDrawService() {
    }
    NgxPolygonDrawService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxPolygonDrawService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxPolygonDrawService.ngInjectableDef = defineInjectable({ factory: function NgxPolygonDrawService_Factory() { return new NgxPolygonDrawService(); }, token: NgxPolygonDrawService, providedIn: "root" });
    return NgxPolygonDrawService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPolygonDrawComponent = /** @class */ (function () {
    function NgxPolygonDrawComponent(rd) {
        this.rd = rd;
        this.created = new EventEmitter();
        this.perimeter = [];
        this.complete = false;
    }
    /**
     * @private
     * @param {?} p0
     * @param {?} p1
     * @param {?} p2
     * @param {?} p3
     * @return {?}
     */
    NgxPolygonDrawComponent.line_intersects = /**
     * @private
     * @param {?} p0
     * @param {?} p1
     * @param {?} p2
     * @param {?} p3
     * @return {?}
     */
    function (p0, p1, p2, p3) {
        /** @type {?} */
        var s1_x;
        /** @type {?} */
        var s1_y;
        /** @type {?} */
        var s2_x;
        /** @type {?} */
        var s2_y;
        s1_x = p1['x'] - p0['x'];
        s1_y = p1['y'] - p0['y'];
        s2_x = p3['x'] - p2['x'];
        s2_y = p3['y'] - p2['y'];
        /** @type {?} */
        var s;
        /** @type {?} */
        var t;
        s = (-s1_y * (p0['x'] - p2['x']) + s1_x * (p0['y'] - p2['y'])) / (-s2_x * s1_y + s1_x * s2_y);
        t = (s2_x * (p0['y'] - p2['y']) - s2_y * (p0['x'] - p2['x'])) / (-s2_x * s1_y + s1_x * s2_y);
        return s >= 0 && s <= 1 && t >= 0 && t <= 1;
        // No collision
    };
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.point = /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "white";
        this.ctx.fillRect(x - 2, y - 2, 4, 4);
        this.ctx.moveTo(x, y);
    };
    /**
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.undo = /**
     * @return {?}
     */
    function () {
        this.ctx = undefined;
        this.perimeter.pop();
        this.complete = false;
        this.start(true);
    };
    /**
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.clear_canvas = /**
     * @return {?}
     */
    function () {
        this.ctx = undefined;
        this.perimeter = [];
        this.complete = false;
        // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = '';
        this.start(false);
    };
    /**
     * @private
     * @param {?} end
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.draw = /**
     * @private
     * @param {?} end
     * @return {?}
     */
    function (end) {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "white";
        this.ctx.lineCap = "square";
        this.ctx.beginPath();
        for (var i = 0; i < this.perimeter.length; i++) {
            if (i == 0) {
                this.ctx.moveTo(this.perimeter[i]['x'], this.perimeter[i]['y']);
                end || this.point(this.perimeter[i]['x'], this.perimeter[i]['y']);
            }
            else {
                this.ctx.lineTo(this.perimeter[i]['x'], this.perimeter[i]['y']);
                end || this.point(this.perimeter[i]['x'], this.perimeter[i]['y']);
            }
        }
        if (end) {
            this.ctx.lineTo(this.perimeter[0]['x'], this.perimeter[0]['y']);
            this.ctx.closePath();
            this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
            this.ctx.fill();
            this.ctx.strokeStyle = 'blue';
            this.complete = true;
            this.created.emit(this.perimeter);
        }
        this.ctx.stroke();
        // print coordinates
        if (this.perimeter.length == 0) ;
    };
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.check_intersect = /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (x, y) {
        if (this.perimeter.length < 4) {
            return false;
        }
        /** @type {?} */
        var p0 = [];
        /** @type {?} */
        var p1 = [];
        /** @type {?} */
        var p2 = [];
        /** @type {?} */
        var p3 = [];
        p2['x'] = this.perimeter[this.perimeter.length - 1]['x'];
        p2['y'] = this.perimeter[this.perimeter.length - 1]['y'];
        p3['x'] = x;
        p3['y'] = y;
        for (var i = 0; i < this.perimeter.length - 1; i++) {
            p0['x'] = this.perimeter[i]['x'];
            p0['y'] = this.perimeter[i]['y'];
            p1['x'] = this.perimeter[i + 1]['x'];
            p1['y'] = this.perimeter[i + 1]['y'];
            if (p1['x'] == p2['x'] && p1['y'] == p2['y']) {
                continue;
            }
            if (p0['x'] == p3['x'] && p0['y'] == p3['y']) {
                continue;
            }
            if (NgxPolygonDrawComponent.line_intersects(p0, p1, p2, p3) == true) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.point_it = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.complete) {
            // alert('Разметка уже создана');
            this.created.emit('already created');
            return false;
        }
        /** @type {?} */
        var rect;
        /** @type {?} */
        var x;
        /** @type {?} */
        var y;
        if (event.ctrlKey || event.which === 3 || event.button === 2) {
            if (this.perimeter.length == 2) {
                // alert('Для создания разметки необходимо не менее 3-х точек');
                this.created.emit('at least 3 points required');
                return false;
            }
            x = this.perimeter[0]['x'];
            y = this.perimeter[0]['y'];
            if (this.check_intersect(x, y)) {
                // alert('Эта линия пересекает другую');
                this.created.emit('line intersecrion');
                return false;
            }
            this.draw(true);
            // alert('Разметка завершена');
            event.preventDefault();
            return false;
        }
        else {
            rect = this.canvas.getBoundingClientRect();
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
            if (this.perimeter.length > 0 && x == this.perimeter[this.perimeter.length - 1]['x'] && y == this.perimeter[this.perimeter.length - 1]['y']) {
                // same point - double click
                return false;
            }
            if (this.check_intersect(x, y)) {
                // alert('Эта линия пересекает другую');
                this.created.emit('line intersection');
                return false;
            }
            this.perimeter.push({ 'x': x, 'y': y });
            this.draw(false);
            return false;
        }
    };
    /**
     * @private
     * @param {?} with_draw
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.start = /**
     * @private
     * @param {?} with_draw
     * @return {?}
     */
    function (with_draw) {
        var _this = this;
        /** @type {?} */
        var img = new Image();
        img.src = this.src;
        img.onload = function () {
            _this.ctx = _this.canvas.getContext("2d");
            _this.ctx.drawImage(img, 0, 0, _this.canvas.width, _this.canvas.height);
            if (with_draw == true) {
                _this.draw(false);
            }
        };
    };
    /**
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setBcg();
        this.start(false);
    };
    /**
     * @private
     * @return {?}
     */
    NgxPolygonDrawComponent.prototype.setBcg = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.canvas = this.rd.selectRootElement(this.polygon["nativeElement"]);
        this.ctx = this.canvas.getContext("2d");
        /** @type {?} */
        var bcg = new Image();
        bcg.src = this.src;
        bcg.onload = function () {
            _this.ctx.drawImage(bcg, 0, 0);
        };
    };
    NgxPolygonDrawComponent.decorators = [
        { type: Component, args: [{
                    selector: 'Ngx-NgxPolygonDraw',
                    template: "\n    <div (load)=\"clear_canvas()\">\n      <canvas #polygon id=\"jPolygon\" width=\"640\" height=\"480\" style=\"cursor:crosshair\" (mousedown)=\"point_it($event)\" oncontextmenu=\"return false;\">\n        Your browser does not support the HTML5 canvas tag.\n      </canvas>\n    </div>\n  "
                }] }
    ];
    /** @nocollapse */
    NgxPolygonDrawComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NgxPolygonDrawComponent.propDecorators = {
        src: [{ type: Input }],
        created: [{ type: Output }],
        polygon: [{ type: ViewChild, args: ['polygon',] }]
    };
    return NgxPolygonDrawComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPolygonDrawModule = /** @class */ (function () {
    function NgxPolygonDrawModule() {
    }
    NgxPolygonDrawModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxPolygonDrawComponent],
                    imports: [],
                    exports: [NgxPolygonDrawComponent]
                },] }
    ];
    return NgxPolygonDrawModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxPolygonDrawService, NgxPolygonDrawComponent, NgxPolygonDrawModule };

//# sourceMappingURL=ngx-polygon-draw.js.map