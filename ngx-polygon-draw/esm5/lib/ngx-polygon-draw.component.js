/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
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
        if (this.perimeter.length == 0) {
            // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = '';
        }
        else {
            // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = JSON.stringify(this.perimeter);
        }
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
export { NgxPolygonDrawComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxPolygonDrawComponent.prototype.src;
    /**
     * @type {?}
     * @private
     */
    NgxPolygonDrawComponent.prototype.created;
    /**
     * @type {?}
     * @private
     */
    NgxPolygonDrawComponent.prototype.polygon;
    /** @type {?} */
    NgxPolygonDrawComponent.prototype.perimeter;
    /** @type {?} */
    NgxPolygonDrawComponent.prototype.complete;
    /**
     * @type {?}
     * @private
     */
    NgxPolygonDrawComponent.prototype.canvas;
    /**
     * @type {?}
     * @private
     */
    NgxPolygonDrawComponent.prototype.ctx;
    /**
     * @type {?}
     * @private
     */
    NgxPolygonDrawComponent.prototype.rd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBvbHlnb24tZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcG9seWdvbi1kcmF3LyIsInNvdXJjZXMiOlsibGliL25neC1wb2x5Z29uLWRyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRS9HO0lBY0UsaUNBQW9CLEVBQWE7UUFBYixPQUFFLEdBQUYsRUFBRSxDQUFXO1FBRWYsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFHL0MsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFOb0IsQ0FBQzs7Ozs7Ozs7O0lBVXZCLHVDQUFlOzs7Ozs7OztJQUE5QixVQUErQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFOztZQUN2QyxJQUFJOztZQUFFLElBQUk7O1lBQUUsSUFBSTs7WUFBRSxJQUFJO1FBQzFCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVyQixDQUFDOztZQUFFLENBQUM7UUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFD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Ozs7Ozs7SUFBdkIsVUFBd0IsQ0FBQyxFQUFDLENBQUM7UUFDekIsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDM0IsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDRyxFQUFFLEdBQUcsRUFBRTs7WUFDUCxFQUFFLEdBQUcsRUFBRTs7WUFDUCxFQUFFLEdBQUcsRUFBRTs7WUFDUCxFQUFFLEdBQUcsRUFBRTtRQUVYLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVosS0FBSSxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMxQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMs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LENBQUM7UUFDdkUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDcEMsR0FBRyxHQUFHLElBQUksS0FBSyxFQUFFO1FBRXJCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQixHQUFHLENBQUMsTUFBTSxHQUFHO1lBQ1gsS0FBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUM7SUFDSixDQUFDOztnQkFqTUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSx1U0FNVDtpQkFFRjs7OztnQkFabUUsU0FBUzs7O3NCQWlCMUUsS0FBSzswQkFDTCxNQUFNOzBCQUNOLFNBQVMsU0FBQyxTQUFTOztJQWtMdEIsOEJBQUM7Q0FBQSxBQW5NRCxJQW1NQztTQXZMWSx1QkFBdUI7Ozs7OztJQUdsQyxzQ0FBNkI7Ozs7O0lBQzdCLDBDQUErQzs7Ozs7SUFDL0MsMENBQWlEOztJQUVqRCw0Q0FBZTs7SUFDZiwyQ0FBaUI7Ozs7O0lBQ2pCLHlDQUFlOzs7OztJQUNmLHNDQUFZOzs7OztJQVJBLHFDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdOZ3gtTmd4UG9seWdvbkRyYXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgKGxvYWQpPVwiY2xlYXJfY2FudmFzKClcIj5cbiAgICAgIDxjYW52YXMgI3BvbHlnb24gaWQ9XCJqUG9seWdvblwiIHdpZHRoPVwiNjQwXCIgaGVpZ2h0PVwiNDgwXCIgc3R5bGU9XCJjdXJzb3I6Y3Jvc3NoYWlyXCIgKG1vdXNlZG93bik9XCJwb2ludF9pdCgkZXZlbnQpXCIgb25jb250ZXh0bWVudT1cInJldHVybiBmYWxzZTtcIj5cbiAgICAgICAgWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIEhUTUw1IGNhbnZhcyB0YWcuXG4gICAgICA8L2NhbnZhcz5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFBvbHlnb25EcmF3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJkOiBSZW5kZXJlcjIpIHsgfVxuICBASW5wdXQoKSBwcml2YXRlIHNyYzogc3RyaW5nO1xuICBAT3V0cHV0KCkgcHJpdmF0ZSBjcmVhdGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAVmlld0NoaWxkKCdwb2x5Z29uJykgcHJpdmF0ZSBwb2x5Z29uOkVsZW1lbnRSZWY7XG5cbiAgcGVyaW1ldGVyID0gW107XG4gIGNvbXBsZXRlID0gZmFsc2U7XG4gIHByaXZhdGUgY2FudmFzO1xuICBwcml2YXRlIGN0eDtcblxuICBwcml2YXRlIHN0YXRpYyBsaW5lX2ludGVyc2VjdHMocDAsIHAxLCBwMiwgcDMpIHtcbiAgICBsZXQgczFfeCwgczFfeSwgczJfeCwgczJfeTtcbiAgICBzMV94ID0gcDFbJ3gnXSAtIHAwWyd4J107XG4gICAgczFfeSA9IHAxWyd5J10gLSBwMFsneSddO1xuICAgIHMyX3ggPSBwM1sneCddIC0gcDJbJ3gnXTtcbiAgICBzMl95ID0gcDNbJ3knXSAtIHAyWyd5J107XG5cbiAgICBsZXQgcywgdDtcbiAgICBzID0gKC1zMV95ICogKHAwWyd4J10gLSBwMlsneCddKSArIHMxX3ggKiAocDBbJ3knXSAtIHAyWyd5J10pKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XG4gICAgdCA9ICggczJfeCAqIChwMFsneSddIC0gcDJbJ3knXSkgLSBzMl95ICogKHAwWyd4J10gLSBwMlsneCddKSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xuXG4gICAgcmV0dXJuIHMgPj0gMCAmJiBzIDw9IDEgJiYgdCA+PSAwICYmIHQgPD0gMTtcbiAgICAvLyBObyBjb2xsaXNpb25cbiAgfVxuXG4gIHByaXZhdGUgcG9pbnQoeCwgeSl7XG4gICAgdGhpcy5jdHguZmlsbFN0eWxlPVwid2hpdGVcIjtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmN0eC5maWxsUmVjdCh4LTIseS0yLDQsNCk7XG4gICAgdGhpcy5jdHgubW92ZVRvKHgseSk7XG4gIH1cblxuICB1bmRvKCl7XG4gICAgdGhpcy5jdHggPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5wZXJpbWV0ZXIucG9wKCk7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnQodHJ1ZSk7XG4gIH1cblxuICBjbGVhcl9jYW52YXMoKXtcbiAgICB0aGlzLmN0eCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBlcmltZXRlciA9IFtdO1xuICAgIHRoaXMuY29tcGxldGUgPSBmYWxzZTtcbiAgICAvLyB0aGlzLnJkLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuY29vcmRpbmF0ZXNFbGVtW1wibmF0aXZlRWxlbWVudFwiXSkudmFsdWUgPSAnJztcbiAgICB0aGlzLnN0YXJ0KGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhdyhlbmQpe1xuICAgIHRoaXMuY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgdGhpcy5jdHguc3Ryb2tlU3R5bGUgPSBcIndoaXRlXCI7XG4gICAgdGhpcy5jdHgubGluZUNhcCA9IFwic3F1YXJlXCI7XG4gICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wZXJpbWV0ZXIubGVuZ3RoOyBpKyspe1xuICAgICAgaWYoIGkgPT0gMCApe1xuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8odGhpcy5wZXJpbWV0ZXJbaV1bJ3gnXSx0aGlzLnBlcmltZXRlcltpXVsneSddKTtcbiAgICAgICAgZW5kIHx8IHRoaXMucG9pbnQodGhpcy5wZXJpbWV0ZXJbaV1bJ3gnXSx0aGlzLnBlcmltZXRlcltpXVsneSddKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh0aGlzLnBlcmltZXRlcltpXVsneCddLHRoaXMucGVyaW1ldGVyW2ldWyd5J10pO1xuICAgICAgICBlbmQgfHwgdGhpcy5wb2ludCh0aGlzLnBlcmltZXRlcltpXVsneCddLHRoaXMucGVyaW1ldGVyW2ldWyd5J10pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZihlbmQpe1xuICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGVyaW1ldGVyWzBdWyd4J10sdGhpcy5wZXJpbWV0ZXJbMF1bJ3knXSk7XG4gICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwgMCwgMCwgMC41KSc7XG4gICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9ICdibHVlJztcbiAgICAgIHRoaXMuY29tcGxldGUgPSB0cnVlO1xuICAgICAgdGhpcy5jcmVhdGVkLmVtaXQodGhpcy5wZXJpbWV0ZXIpO1xuICAgIH1cbiAgICB0aGlzLmN0eC5zdHJva2UoKTtcblxuICAgIC8vIHByaW50IGNvb3JkaW5hdGVzXG4gICAgaWYodGhpcy5wZXJpbWV0ZXIubGVuZ3RoID09IDApe1xuICAgICAgLy8gdGhpcy5yZC5zZWxlY3RSb290RWxlbWVudCh0aGlzLmNvb3JkaW5hdGVzRWxlbVtcIm5hdGl2ZUVsZW1lbnRcIl0pLnZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHRoaXMucmQuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5jb29yZGluYXRlc0VsZW1bXCJuYXRpdmVFbGVtZW50XCJdKS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGVyaW1ldGVyKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrX2ludGVyc2VjdCh4LHkpe1xuICAgIGlmKHRoaXMucGVyaW1ldGVyLmxlbmd0aCA8IDQpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcDAgPSBbXTtcbiAgICBsZXQgcDEgPSBbXTtcbiAgICBsZXQgcDIgPSBbXTtcbiAgICBsZXQgcDMgPSBbXTtcblxuICAgIHAyWyd4J10gPSB0aGlzLnBlcmltZXRlclt0aGlzLnBlcmltZXRlci5sZW5ndGgtMV1bJ3gnXTtcbiAgICBwMlsneSddID0gdGhpcy5wZXJpbWV0ZXJbdGhpcy5wZXJpbWV0ZXIubGVuZ3RoLTFdWyd5J107XG4gICAgcDNbJ3gnXSA9IHg7XG4gICAgcDNbJ3knXSA9IHk7XG5cbiAgICBmb3IobGV0IGk9MDsgaTx0aGlzLnBlcmltZXRlci5sZW5ndGgtMTsgaSsrKXtcbiAgICAgIHAwWyd4J10gPSB0aGlzLnBlcmltZXRlcltpXVsneCddO1xuICAgICAgcDBbJ3knXSA9IHRoaXMucGVyaW1ldGVyW2ldWyd5J107XG4gICAgICBwMVsneCddID0gdGhpcy5wZXJpbWV0ZXJbaSsxXVsneCddO1xuICAgICAgcDFbJ3knXSA9IHRoaXMucGVyaW1ldGVyW2krMV1bJ3knXTtcbiAgICAgIGlmKHAxWyd4J10gPT0gcDJbJ3gnXSAmJiBwMVsneSddID09IHAyWyd5J10peyBjb250aW51ZTsgfVxuICAgICAgaWYocDBbJ3gnXSA9PSBwM1sneCddICYmIHAwWyd5J10gPT0gcDNbJ3knXSl7IGNvbnRpbnVlOyB9XG4gICAgICBpZihOZ3hQb2x5Z29uRHJhd0NvbXBvbmVudC5saW5lX2ludGVyc2VjdHMocDAscDEscDIscDMpPT10cnVlKXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHBvaW50X2l0KGV2ZW50KSB7XG4gICAgaWYodGhpcy5jb21wbGV0ZSl7XG4gICAgICAvLyBhbGVydCgn0KDQsNC30LzQtdGC0LrQsCDRg9C20LUg0YHQvtC30LTQsNC90LAnKTtcbiAgICAgIHRoaXMuY3JlYXRlZC5lbWl0KCdhbHJlYWR5IGNyZWF0ZWQnKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IHJlY3QsIHgsIHk7XG5cbiAgICBpZihldmVudC5jdHJsS2V5IHx8IGV2ZW50LndoaWNoID09PSAzIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMil7XG4gICAgICBpZih0aGlzLnBlcmltZXRlci5sZW5ndGggPT0gMil7XG4gICAgICAgIC8vIGFsZXJ0KCfQlNC70Y8g0YHQvtC30LTQsNC90LjRjyDRgNCw0LfQvNC10YLQutC4INC90LXQvtCx0YXQvtC00LjQvNC+INC90LUg0LzQtdC90LXQtSAzLdGFINGC0L7Rh9C10LonKTtcbiAgICAgICAgdGhpcy5jcmVhdGVkLmVtaXQoJ2F0IGxlYXN0IDMgcG9pbnRzIHJlcXVpcmVkJyk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHggPSB0aGlzLnBlcmltZXRlclswXVsneCddO1xuICAgICAgeSA9IHRoaXMucGVyaW1ldGVyWzBdWyd5J107XG4gICAgICBpZih0aGlzLmNoZWNrX2ludGVyc2VjdCh4LHkpKXtcbiAgICAgICAgLy8gYWxlcnQoJ9Ct0YLQsCDQu9C40L3QuNGPINC/0LXRgNC10YHQtdC60LDQtdGCINC00YDRg9Cz0YPRjicpO1xuICAgICAgICB0aGlzLmNyZWF0ZWQuZW1pdCgnbGluZSBpbnRlcnNlY3Jpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5kcmF3KHRydWUpO1xuICAgICAgLy8gYWxlcnQoJ9Cg0LDQt9C80LXRgtC60LAg0LfQsNCy0LXRgNGI0LXQvdCwJyk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB4ID0gZXZlbnQuY2xpZW50WCAtIHJlY3QubGVmdDtcbiAgICAgIHkgPSBldmVudC5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICBpZiAodGhpcy5wZXJpbWV0ZXIubGVuZ3RoPjAgJiYgeCA9PSB0aGlzLnBlcmltZXRlclt0aGlzLnBlcmltZXRlci5sZW5ndGgtMV1bJ3gnXSAmJiB5ID09IHRoaXMucGVyaW1ldGVyW3RoaXMucGVyaW1ldGVyLmxlbmd0aC0xXVsneSddKXtcbiAgICAgICAgLy8gc2FtZSBwb2ludCAtIGRvdWJsZSBjbGlja1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZih0aGlzLmNoZWNrX2ludGVyc2VjdCh4LHkpKXtcbiAgICAgICAgLy8gYWxlcnQoJ9Ct0YLQsCDQu9C40L3QuNGPINC/0LXRgNC10YHQtdC60LDQtdGCINC00YDRg9Cz0YPRjicpO1xuICAgICAgICB0aGlzLmNyZWF0ZWQuZW1pdCgnbGluZSBpbnRlcnNlY3Rpb24nKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5wZXJpbWV0ZXIucHVzaCh7J3gnOngsJ3knOnl9KTtcbiAgICAgIHRoaXMuZHJhdyhmYWxzZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdGFydCh3aXRoX2RyYXc6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gdGhpcy5zcmM7XG4gICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGltZywgMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG4gICAgICBpZih3aXRoX2RyYXcgPT0gdHJ1ZSl7XG4gICAgICAgIHRoaXMuZHJhdyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRCY2coKTtcbiAgICB0aGlzLnN0YXJ0KGZhbHNlKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QmNnKCkge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy5yZC5zZWxlY3RSb290RWxlbWVudCh0aGlzLnBvbHlnb25bXCJuYXRpdmVFbGVtZW50XCJdKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBsZXQgYmNnID0gbmV3IEltYWdlKCk7XG5cbiAgICBiY2cuc3JjID0gdGhpcy5zcmM7XG4gICAgYmNnLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShiY2csIDAsIDApXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=