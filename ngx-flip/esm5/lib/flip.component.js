/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, Renderer2, ViewChild } from '@angular/core';
var FlipComponent = /** @class */ (function () {
    function FlipComponent(renderer) {
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    FlipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.rotate();
    };
    /**
     * @param {?} change
     * @return {?}
     */
    FlipComponent.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        this.rotate();
    };
    /**
     * @return {?}
     */
    FlipComponent.prototype.rotate = /**
     * @return {?}
     */
    function () {
        if (this.flip) {
            this.renderer.addClass(this.flipContainer.nativeElement, 'rotate');
        }
        else {
            this.renderer.removeClass(this.flipContainer.nativeElement, 'rotate');
        }
    };
    FlipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-flip',
                    template: "<div class=\"flipper\" #flipContainer>\r\n<div class=\"front\">\r\n  <ng-content select=\"[front]\" ></ng-content>\r\n</div>\r\n  <div class=\"back\">\r\n  <ng-content select=\"[back]\" ></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{-webkit-perspective:1000px;perspective:1000px;display:block}:host .flipper{transition:.6s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;height:100%;width:100%;position:relative}:host .back,:host .front{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:z-index .3s ease-in-out}:host .front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}:host .back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .rotate{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .rotate .front{z-index:1!important}:host .rotate .back{z-index:2!important}"]
                }] }
    ];
    /** @nocollapse */
    FlipComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    FlipComponent.propDecorators = {
        flipContainer: [{ type: ViewChild, args: ['flipContainer',] }],
        flip: [{ type: Input }]
    };
    return FlipComponent;
}());
export { FlipComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmxpcC8iLCJzb3VyY2VzIjpbImxpYi9mbGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLFNBQVMsRUFDdkUsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBUUUsdUJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDdkMsQ0FBQzs7OztJQUtELGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7OztJQUNELG1DQUFXOzs7O0lBQVgsVUFBWSxNQUFxQjtRQUMvQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7OztJQUNELDhCQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3BFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUN2RTtJQUVILENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLGtQQUFvQztvQkFFcEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUK0QsU0FBUzs7O2dDQWV0RSxTQUFTLFNBQUMsZUFBZTt1QkFDekIsS0FBSzs7SUFpQlIsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXZCWSxhQUFhOzs7Ozs7SUFLeEIsc0NBQWtEOztJQUNsRCw2QkFBdUI7Ozs7O0lBSlgsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbmd4LWZsaXAnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGlwLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9mbGlwLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZsaXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnZmxpcENvbnRhaW5lcicpIHByaXZhdGUgZmxpcENvbnRhaW5lcjtcclxuICBASW5wdXQoKSBmbGlwOiBib29sZWFuO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucm90YXRlKCk7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZTogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgdGhpcy5yb3RhdGUoKTtcclxuICB9XHJcbiAgcm90YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuZmxpcCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZmxpcENvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAncm90YXRlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZmxpcENvbnRhaW5lci5uYXRpdmVFbGVtZW50LCAncm90YXRlJyk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19