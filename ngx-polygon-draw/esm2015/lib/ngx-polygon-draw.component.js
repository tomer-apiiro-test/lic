/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
export class NgxPolygonDrawComponent {
    /**
     * @param {?} rd
     */
    constructor(rd) {
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
    static line_intersects(p0, p1, p2, p3) {
        /** @type {?} */
        let s1_x;
        /** @type {?} */
        let s1_y;
        /** @type {?} */
        let s2_x;
        /** @type {?} */
        let s2_y;
        s1_x = p1['x'] - p0['x'];
        s1_y = p1['y'] - p0['y'];
        s2_x = p3['x'] - p2['x'];
        s2_y = p3['y'] - p2['y'];
        /** @type {?} */
        let s;
        /** @type {?} */
        let t;
        s = (-s1_y * (p0['x'] - p2['x']) + s1_x * (p0['y'] - p2['y'])) / (-s2_x * s1_y + s1_x * s2_y);
        t = (s2_x * (p0['y'] - p2['y']) - s2_y * (p0['x'] - p2['x'])) / (-s2_x * s1_y + s1_x * s2_y);
        return s >= 0 && s <= 1 && t >= 0 && t <= 1;
        // No collision
    }
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    point(x, y) {
        this.ctx.fillStyle = "white";
        this.ctx.strokeStyle = "white";
        this.ctx.fillRect(x - 2, y - 2, 4, 4);
        this.ctx.moveTo(x, y);
    }
    /**
     * @return {?}
     */
    undo() {
        this.ctx = undefined;
        this.perimeter.pop();
        this.complete = false;
        this.start(true);
    }
    /**
     * @return {?}
     */
    clear_canvas() {
        this.ctx = undefined;
        this.perimeter = [];
        this.complete = false;
        // this.rd.selectRootElement(this.coordinatesElem["nativeElement"]).value = '';
        this.start(false);
    }
    /**
     * @private
     * @param {?} end
     * @return {?}
     */
    draw(end) {
        this.ctx.lineWidth = 1;
        this.ctx.strokeStyle = "white";
        this.ctx.lineCap = "square";
        this.ctx.beginPath();
        for (let i = 0; i < this.perimeter.length; i++) {
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
    }
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    check_intersect(x, y) {
        if (this.perimeter.length < 4) {
            return false;
        }
        /** @type {?} */
        let p0 = [];
        /** @type {?} */
        let p1 = [];
        /** @type {?} */
        let p2 = [];
        /** @type {?} */
        let p3 = [];
        p2['x'] = this.perimeter[this.perimeter.length - 1]['x'];
        p2['y'] = this.perimeter[this.perimeter.length - 1]['y'];
        p3['x'] = x;
        p3['y'] = y;
        for (let i = 0; i < this.perimeter.length - 1; i++) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    point_it(event) {
        if (this.complete) {
            // alert('Разметка уже создана');
            this.created.emit('already created');
            return false;
        }
        /** @type {?} */
        let rect;
        /** @type {?} */
        let x;
        /** @type {?} */
        let y;
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
    }
    /**
     * @private
     * @param {?} with_draw
     * @return {?}
     */
    start(with_draw) {
        /** @type {?} */
        const img = new Image();
        img.src = this.src;
        img.onload = () => {
            this.ctx = this.canvas.getContext("2d");
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            if (with_draw == true) {
                this.draw(false);
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setBcg();
        this.start(false);
    }
    /**
     * @private
     * @return {?}
     */
    setBcg() {
        this.canvas = this.rd.selectRootElement(this.polygon["nativeElement"]);
        this.ctx = this.canvas.getContext("2d");
        /** @type {?} */
        let bcg = new Image();
        bcg.src = this.src;
        bcg.onload = () => {
            this.ctx.drawImage(bcg, 0, 0);
        };
    }
}
NgxPolygonDrawComponent.decorators = [
    { type: Component, args: [{
                selector: 'Ngx-NgxPolygonDraw',
                template: `
    <div (load)="clear_canvas()">
      <canvas #polygon id="jPolygon" width="640" height="480" style="cursor:crosshair" (mousedown)="point_it($event)" oncontextmenu="return false;">
        Your browser does not support the HTML5 canvas tag.
      </canvas>
    </div>
  `
            }] }
];
/** @nocollapse */
NgxPolygonDrawComponent.ctorParameters = () => [
    { type: Renderer2 }
];
NgxPolygonDrawComponent.propDecorators = {
    src: [{ type: Input }],
    created: [{ type: Output }],
    polygon: [{ type: ViewChild, args: ['polygon',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBvbHlnb24tZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcG9seWdvbi1kcmF3LyIsInNvdXJjZXMiOlsibGliL25neC1wb2x5Z29uLWRyYXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBYy9HLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFFbEMsWUFBb0IsRUFBYTtRQUFiLE9BQUUsR0FBRixFQUFFLENBQVc7UUFFZixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcvQyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsYUFBUSxHQUFHLEtBQUssQ0FBQztJQU5vQixDQUFDOzs7Ozs7Ozs7SUFVOUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFOztZQUN2QyxJQUFJOztZQUFFLElBQUk7O1lBQUUsSUFBSTs7WUFBRSxJQUFJO1FBQzFCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztZQUVyQixDQUFDOztZQUFFLENBQUM7UUFDUixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFF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Q3pCLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O1lBQ0csRUFBRSxHQUFHLEVBQUU7O1lBQ1AsRUFBRSxHQUFHLEVBQUU7O1lBQ1AsRUFBRSxHQUFHLEVBQUU7O1lBQ1AsRUFBRSxHQUFHLEVBQUU7UUFFWCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2RCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVaLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUM7WUFDMUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQyxJQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBQztnQkFBRSxTQUFTO2FBQUU7WUFDekQsSUFBRyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUM7Z0JBQUUsU0FBUzthQUFFO1lBQ3pELElBQUcsdUJBQXVCLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxJQUFFLElBQUksRUFBQztnQkFDNUQsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2YsaUNBQWlDO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDRyxJQUFJOztZQUFFLENBQUM7O1lBQUUsQ0FBQztRQUVkLElBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBQztZQUMxRCxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQztnQkFDNUIsZ0VBQWdFO2dCQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2dCQUNoRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDM0IsSUFBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQztnQkFDM0Isd0NBQXdDO2dCQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQiwrQkFBK0I7WUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDM0MsQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM5QixDQUFDLEdBQUcsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFDO2dCQUNwSSw0QkFBNEI7Z0JBQzVCLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDO2dCQUMzQix3Q0FBd0M7Z0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEdBQUcsRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sS0FBSyxDQUFDLFNBQWtCOztjQUN4QixHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFDdkIsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRSxJQUFHLFNBQVMsSUFBSSxJQUFJLEVBQUM7Z0JBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbEI7UUFDSCxDQUFDLENBQUE7SUFDSCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNwQyxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUU7UUFFckIsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDL0IsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7O1lBak1GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7OztHQU1UO2FBRUY7Ozs7WUFabUUsU0FBUzs7O2tCQWlCMUUsS0FBSztzQkFDTCxNQUFNO3NCQUNOLFNBQVMsU0FBQyxTQUFTOzs7Ozs7O0lBRnBCLHNDQUE2Qjs7Ozs7SUFDN0IsMENBQStDOzs7OztJQUMvQywwQ0FBaUQ7O0lBRWpELDRDQUFlOztJQUNmLDJDQUFpQjs7Ozs7SUFDakIseUNBQWU7Ozs7O0lBQ2Ysc0NBQVk7Ozs7O0lBUkEscUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ05neC1OZ3hQb2x5Z29uRHJhdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiAobG9hZCk9XCJjbGVhcl9jYW52YXMoKVwiPlxuICAgICAgPGNhbnZhcyAjcG9seWdvbiBpZD1cImpQb2x5Z29uXCIgd2lkdGg9XCI2NDBcIiBoZWlnaHQ9XCI0ODBcIiBzdHlsZT1cImN1cnNvcjpjcm9zc2hhaXJcIiAobW91c2Vkb3duKT1cInBvaW50X2l0KCRldmVudClcIiBvbmNvbnRleHRtZW51PVwicmV0dXJuIGZhbHNlO1wiPlxuICAgICAgICBZb3VyIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgY2FudmFzIHRhZy5cbiAgICAgIDwvY2FudmFzPlxuICAgIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4UG9seWdvbkRyYXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmQ6IFJlbmRlcmVyMikgeyB9XG4gIEBJbnB1dCgpIHByaXZhdGUgc3JjOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBwcml2YXRlIGNyZWF0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBWaWV3Q2hpbGQoJ3BvbHlnb24nKSBwcml2YXRlIHBvbHlnb246RWxlbWVudFJlZjtcblxuICBwZXJpbWV0ZXIgPSBbXTtcbiAgY29tcGxldGUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBjYW52YXM7XG4gIHByaXZhdGUgY3R4O1xuXG4gIHByaXZhdGUgc3RhdGljIGxpbmVfaW50ZXJzZWN0cyhwMCwgcDEsIHAyLCBwMykge1xuICAgIGxldCBzMV94LCBzMV95LCBzMl94LCBzMl95O1xuICAgIHMxX3ggPSBwMVsneCddIC0gcDBbJ3gnXTtcbiAgICBzMV95ID0gcDFbJ3knXSAtIHAwWyd5J107XG4gICAgczJfeCA9IHAzWyd4J10gLSBwMlsneCddO1xuICAgIHMyX3kgPSBwM1sneSddIC0gcDJbJ3knXTtcblxuICAgIGxldCBzLCB0O1xuICAgIHMgPSAoLXMxX3kgKiAocDBbJ3gnXSAtIHAyWyd4J10pICsgczFfeCAqIChwMFsneSddIC0gcDJbJ3knXSkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcbiAgICB0ID0gKCBzMl94ICogKHAwWyd5J10gLSBwMlsneSddKSAtIHMyX3kgKiAocDBbJ3gnXSAtIHAyWyd4J10pKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XG5cbiAgICByZXR1cm4gcyA+PSAwICYmIHMgPD0gMSAmJiB0ID49IDAgJiYgdCA8PSAxO1xuICAgIC8vIE5vIGNvbGxpc2lvblxuICB9XG5cbiAgcHJpdmF0ZSBwb2ludCh4LCB5KXtcbiAgICB0aGlzLmN0eC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xuICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KHgtMix5LTIsNCw0KTtcbiAgICB0aGlzLmN0eC5tb3ZlVG8oeCx5KTtcbiAgfVxuXG4gIHVuZG8oKXtcbiAgICB0aGlzLmN0eCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnBlcmltZXRlci5wb3AoKTtcbiAgICB0aGlzLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydCh0cnVlKTtcbiAgfVxuXG4gIGNsZWFyX2NhbnZhcygpe1xuICAgIHRoaXMuY3R4ID0gdW5kZWZpbmVkO1xuICAgIHRoaXMucGVyaW1ldGVyID0gW107XG4gICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIC8vIHRoaXMucmQuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5jb29yZGluYXRlc0VsZW1bXCJuYXRpdmVFbGVtZW50XCJdKS52YWx1ZSA9ICcnO1xuICAgIHRoaXMuc3RhcnQoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3KGVuZCl7XG4gICAgdGhpcy5jdHgubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjtcbiAgICB0aGlzLmN0eC5saW5lQ2FwID0gXCJzcXVhcmVcIjtcbiAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBlcmltZXRlci5sZW5ndGg7IGkrKyl7XG4gICAgICBpZiggaSA9PSAwICl7XG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh0aGlzLnBlcmltZXRlcltpXVsneCddLHRoaXMucGVyaW1ldGVyW2ldWyd5J10pO1xuICAgICAgICBlbmQgfHwgdGhpcy5wb2ludCh0aGlzLnBlcmltZXRlcltpXVsneCddLHRoaXMucGVyaW1ldGVyW2ldWyd5J10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHRoaXMucGVyaW1ldGVyW2ldWyd4J10sdGhpcy5wZXJpbWV0ZXJbaV1bJ3knXSk7XG4gICAgICAgIGVuZCB8fCB0aGlzLnBvaW50KHRoaXMucGVyaW1ldGVyW2ldWyd4J10sdGhpcy5wZXJpbWV0ZXJbaV1bJ3knXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmKGVuZCl7XG4gICAgICB0aGlzLmN0eC5saW5lVG8odGhpcy5wZXJpbWV0ZXJbMF1bJ3gnXSx0aGlzLnBlcmltZXRlclswXVsneSddKTtcbiAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJztcbiAgICAgIHRoaXMuY3R4LmZpbGwoKTtcbiAgICAgIHRoaXMuY3R4LnN0cm9rZVN0eWxlID0gJ2JsdWUnO1xuICAgICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgICB0aGlzLmNyZWF0ZWQuZW1pdCh0aGlzLnBlcmltZXRlcik7XG4gICAgfVxuICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuXG4gICAgLy8gcHJpbnQgY29vcmRpbmF0ZXNcbiAgICBpZih0aGlzLnBlcmltZXRlci5sZW5ndGggPT0gMCl7XG4gICAgICAvLyB0aGlzLnJkLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuY29vcmRpbmF0ZXNFbGVtW1wibmF0aXZlRWxlbWVudFwiXSkudmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdGhpcy5yZC5zZWxlY3RSb290RWxlbWVudCh0aGlzLmNvb3JkaW5hdGVzRWxlbVtcIm5hdGl2ZUVsZW1lbnRcIl0pLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJpbWV0ZXIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2hlY2tfaW50ZXJzZWN0KHgseSl7XG4gICAgaWYodGhpcy5wZXJpbWV0ZXIubGVuZ3RoIDwgNCl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGxldCBwMCA9IFtdO1xuICAgIGxldCBwMSA9IFtdO1xuICAgIGxldCBwMiA9IFtdO1xuICAgIGxldCBwMyA9IFtdO1xuXG4gICAgcDJbJ3gnXSA9IHRoaXMucGVyaW1ldGVyW3RoaXMucGVyaW1ldGVyLmxlbmd0aC0xXVsneCddO1xuICAgIHAyWyd5J10gPSB0aGlzLnBlcmltZXRlclt0aGlzLnBlcmltZXRlci5sZW5ndGgtMV1bJ3knXTtcbiAgICBwM1sneCddID0geDtcbiAgICBwM1sneSddID0geTtcblxuICAgIGZvcihsZXQgaT0wOyBpPHRoaXMucGVyaW1ldGVyLmxlbmd0aC0xOyBpKyspe1xuICAgICAgcDBbJ3gnXSA9IHRoaXMucGVyaW1ldGVyW2ldWyd4J107XG4gICAgICBwMFsneSddID0gdGhpcy5wZXJpbWV0ZXJbaV1bJ3knXTtcbiAgICAgIHAxWyd4J10gPSB0aGlzLnBlcmltZXRlcltpKzFdWyd4J107XG4gICAgICBwMVsneSddID0gdGhpcy5wZXJpbWV0ZXJbaSsxXVsneSddO1xuICAgICAgaWYocDFbJ3gnXSA9PSBwMlsneCddICYmIHAxWyd5J10gPT0gcDJbJ3knXSl7IGNvbnRpbnVlOyB9XG4gICAgICBpZihwMFsneCddID09IHAzWyd4J10gJiYgcDBbJ3knXSA9PSBwM1sneSddKXsgY29udGludWU7IH1cbiAgICAgIGlmKE5neFBvbHlnb25EcmF3Q29tcG9uZW50LmxpbmVfaW50ZXJzZWN0cyhwMCxwMSxwMixwMyk9PXRydWUpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcG9pbnRfaXQoZXZlbnQpIHtcbiAgICBpZih0aGlzLmNvbXBsZXRlKXtcbiAgICAgIC8vIGFsZXJ0KCfQoNCw0LfQvNC10YLQutCwINGD0LbQtSDRgdC+0LfQtNCw0L3QsCcpO1xuICAgICAgdGhpcy5jcmVhdGVkLmVtaXQoJ2FscmVhZHkgY3JlYXRlZCcpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBsZXQgcmVjdCwgeCwgeTtcblxuICAgIGlmKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyKXtcbiAgICAgIGlmKHRoaXMucGVyaW1ldGVyLmxlbmd0aCA9PSAyKXtcbiAgICAgICAgLy8gYWxlcnQoJ9CU0LvRjyDRgdC+0LfQtNCw0L3QuNGPINGA0LDQt9C80LXRgtC60Lgg0L3QtdC+0LHRhdC+0LTQuNC80L4g0L3QtSDQvNC10L3QtdC1IDMt0YUg0YLQvtGH0LXQuicpO1xuICAgICAgICB0aGlzLmNyZWF0ZWQuZW1pdCgnYXQgbGVhc3QgMyBwb2ludHMgcmVxdWlyZWQnKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgeCA9IHRoaXMucGVyaW1ldGVyWzBdWyd4J107XG4gICAgICB5ID0gdGhpcy5wZXJpbWV0ZXJbMF1bJ3knXTtcbiAgICAgIGlmKHRoaXMuY2hlY2tfaW50ZXJzZWN0KHgseSkpe1xuICAgICAgICAvLyBhbGVydCgn0K3RgtCwINC70LjQvdC40Y8g0L/QtdGA0LXRgdC10LrQsNC10YIg0LTRgNGD0LPRg9GOJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlZC5lbWl0KCdsaW5lIGludGVyc2VjcmlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLmRyYXcodHJ1ZSk7XG4gICAgICAvLyBhbGVydCgn0KDQsNC30LzQtdGC0LrQsCDQt9Cw0LLQtdGA0YjQtdC90LAnKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHggPSBldmVudC5jbGllbnRYIC0gcmVjdC5sZWZ0O1xuICAgICAgeSA9IGV2ZW50LmNsaWVudFkgLSByZWN0LnRvcDtcbiAgICAgIGlmICh0aGlzLnBlcmltZXRlci5sZW5ndGg+MCAmJiB4ID09IHRoaXMucGVyaW1ldGVyW3RoaXMucGVyaW1ldGVyLmxlbmd0aC0xXVsneCddICYmIHkgPT0gdGhpcy5wZXJpbWV0ZXJbdGhpcy5wZXJpbWV0ZXIubGVuZ3RoLTFdWyd5J10pe1xuICAgICAgICAvLyBzYW1lIHBvaW50IC0gZG91YmxlIGNsaWNrXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmKHRoaXMuY2hlY2tfaW50ZXJzZWN0KHgseSkpe1xuICAgICAgICAvLyBhbGVydCgn0K3RgtCwINC70LjQvdC40Y8g0L/QtdGA0LXRgdC10LrQsNC10YIg0LTRgNGD0LPRg9GOJyk7XG4gICAgICAgIHRoaXMuY3JlYXRlZC5lbWl0KCdsaW5lIGludGVyc2VjdGlvbicpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB0aGlzLnBlcmltZXRlci5wdXNoKHsneCc6eCwneSc6eX0pO1xuICAgICAgdGhpcy5kcmF3KGZhbHNlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0KHdpdGhfZHJhdzogYm9vbGVhbikge1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSB0aGlzLnNyYztcbiAgICBpbWcub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcbiAgICAgIGlmKHdpdGhfZHJhdyA9PSB0cnVlKXtcbiAgICAgICAgdGhpcy5kcmF3KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldEJjZygpO1xuICAgIHRoaXMuc3RhcnQoZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRCY2coKSB7XG4gICAgdGhpcy5jYW52YXMgPSB0aGlzLnJkLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMucG9seWdvbltcIm5hdGl2ZUVsZW1lbnRcIl0pO1xuICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGxldCBiY2cgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJjZy5zcmMgPSB0aGlzLnNyYztcbiAgICBiY2cub25sb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKGJjZywgMCwgMClcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==