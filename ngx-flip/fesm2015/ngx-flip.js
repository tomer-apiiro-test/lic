import { ChangeDetectionStrategy, Component, Input, Renderer2, ViewChild, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlipComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FlipModule {
}
FlipModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                exports: [
                    FlipComponent
                ],
                declarations: [FlipComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FlipComponent, FlipModule };

//# sourceMappingURL=ngx-flip.js.map