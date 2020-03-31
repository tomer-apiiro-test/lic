(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@yellowspot/ng-truncate', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global.yellowspot = global.yellowspot || {}, global.yellowspot['ng-truncate'] = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TruncateCharactersPipe = /** @class */ (function () {
        function TruncateCharactersPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} trail
         * @return {?}
         */
        TruncateCharactersPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} trail
         * @return {?}
         */
        function (value, limit, trail) {
            if (limit === void 0) { limit = 40; }
            if (trail === void 0) { trail = '…'; }
            if (!value) {
                value = '';
            }
            if (limit < 0) {
                limit *= -1;
                return value.length > limit ? trail + value.substring(value.length - limit, value.length) : value;
            }
            else {
                return value.length > limit ? value.substring(0, limit) + trail : value;
            }
        };
        TruncateCharactersPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'truncate'
                    },] }
        ];
        return TruncateCharactersPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TruncateWordsPipe = /** @class */ (function () {
        function TruncateWordsPipe() {
        }
        /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} trail
         * @return {?}
         */
        TruncateWordsPipe.prototype.transform = /**
         * @param {?} value
         * @param {?=} limit
         * @param {?=} trail
         * @return {?}
         */
        function (value, limit, trail) {
            if (limit === void 0) { limit = 40; }
            if (trail === void 0) { trail = '…'; }
            /** @type {?} */
            var result = value || '';
            if (value) {
                /** @type {?} */
                var words = value.split(/\s+/);
                if (words.length > Math.abs(limit)) {
                    if (limit < 0) {
                        limit *= -1;
                        result = trail + words.slice(words.length - limit, words.length).join(' ');
                    }
                    else {
                        result = words.slice(0, limit).join(' ') + trail;
                    }
                }
            }
            return result;
        };
        TruncateWordsPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'words'
                    },] }
        ];
        return TruncateWordsPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TRUNCATE_PIPES = [TruncateCharactersPipe, TruncateWordsPipe];
    var TruncateModule = /** @class */ (function () {
        function TruncateModule() {
        }
        TruncateModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TRUNCATE_PIPES],
                        exports: [TRUNCATE_PIPES]
                    },] }
        ];
        return TruncateModule;
    }());

    exports.TRUNCATE_PIPES = TRUNCATE_PIPES;
    exports.TruncateModule = TruncateModule;
    exports.ɵa = TruncateCharactersPipe;
    exports.ɵb = TruncateWordsPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=yellowspot-ng-truncate.umd.js.map
