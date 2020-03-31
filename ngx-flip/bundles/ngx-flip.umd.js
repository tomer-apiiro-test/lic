(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-flip', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['ngx-flip'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: core.Component, args: [{
                        selector: 'ngx-flip',
                        template: "<div class=\"flipper\" #flipContainer>\r\n<div class=\"front\">\r\n  <ng-content select=\"[front]\" ></ng-content>\r\n</div>\r\n  <div class=\"back\">\r\n  <ng-content select=\"[back]\" ></ng-content>\r\n  </div>\r\n</div>\r\n\r\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: [":host{-webkit-perspective:1000px;perspective:1000px;display:block}:host .flipper{transition:.6s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;height:100%;width:100%;position:relative}:host .back,:host .front{width:100%;height:100%;position:absolute;top:0;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:z-index .3s ease-in-out}:host .front{z-index:2;-webkit-transform:rotateY(0);transform:rotateY(0)}:host .back{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .rotate{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}:host .rotate .front{z-index:1!important}:host .rotate .back{z-index:2!important}"]
                    }] }
        ];
        /** @nocollapse */
        FlipComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 }
            ];
        };
        FlipComponent.propDecorators = {
            flipContainer: [{ type: core.ViewChild, args: ['flipContainer',] }],
            flip: [{ type: core.Input }]
        };
        return FlipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FlipModule = /** @class */ (function () {
        function FlipModule() {
        }
        FlipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            FlipComponent
                        ],
                        declarations: [FlipComponent]
                    },] }
        ];
        return FlipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.FlipComponent = FlipComponent;
    exports.FlipModule = FlipModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-flip.umd.js.map