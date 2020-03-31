/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Renderer2, ViewChild } from '@angular/core';
export class FlipComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.rotate();
    }
    /**
     * @param {?} change
     * @return {?}
     */
    ngOnChanges(change) {
        this.rotate();
    }
    /**
     * @return {?}
     */
    rotate() {
        if (this.flip) {
            this.renderer.addClass(this.flipContainer.nativeElement, 'rotate');
        }
        else {
            this.renderer.removeClass(this.flipContainer.nativeElement, 'rotate');
        }
    }
}
FlipComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-flip',
                template: "<div class=\"flipper\" #flipContainer>\r\n<div class=\"front\">\r\n  <ng-content select=\"[front]\" ></ng-content>\r\n</div>\r\n  <div class=\"back\">\r\n  <ng-content select=\"[back]\" ></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{-webkit-perspective:1000px;perspective:1000px;display:block}:host .flipper{transition:.6s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;height:100%;width:100%;position:relative}:host .back,:host .front{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:z-index .3s ease-in-out}:host .front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}:host .back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .rotate{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .rotate .front{z-index:1!important}:host .rotate .back{z-index:2!important}"]
            }] }
];
/** @nocollapse */
FlipComponent.ctorParameters = () => [
    { type: Renderer2 }
];
FlipComponent.propDecorators = {
    flipContainer: [{ type: ViewChild, args: ['flipContainer',] }],
    flip: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FlipComponent.prototype.flipContainer;
    /** @type {?} */
    FlipComponent.prototype.flip;
    /**
     * @type {?}
     * @private
     */
    FlipComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmxpcC8iLCJzb3VyY2VzIjpbImxpYi9mbGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFDdkUsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBUXZCLE1BQU0sT0FBTyxhQUFhOzs7O0lBRXhCLFlBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDdkMsQ0FBQzs7OztJQUtELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsTUFBcUI7UUFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7SUFDRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEU7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO0lBRUgsQ0FBQzs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsa1BBQW9DO2dCQUVwQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFUK0QsU0FBUzs7OzRCQWV0RSxTQUFTLFNBQUMsZUFBZTttQkFDekIsS0FBSzs7Ozs7OztJQUROLHNDQUFrRDs7SUFDbEQsNkJBQXVCOzs7OztJQUpYLGlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1mbGlwJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZmxpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZmxpcC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGbGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZsaXBDb250YWluZXInKSBwcml2YXRlIGZsaXBDb250YWluZXI7XHJcbiAgQElucHV0KCkgZmxpcDogYm9vbGVhbjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnJvdGF0ZSgpO1xyXG4gIH1cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2U6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMucm90YXRlKCk7XHJcbiAgfVxyXG4gIHJvdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmZsaXApIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmZsaXBDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3JvdGF0ZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmZsaXBDb250YWluZXIubmF0aXZlRWxlbWVudCwgJ3JvdGF0ZScpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==