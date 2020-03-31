/**
 * Angular Component Base Module
 */
import { getValue, isUndefined, setValue, isNullOrUndefined, attributes, createElement } from '@syncfusion/ej2-base';
import { EventEmitter } from '@angular/core';
import { clearTemplate, registerEvents } from './util';
var SVG_REG = /^svg|^path|^g/;
var ComponentBase = /** @class */ (function () {
    function ComponentBase() {
        this.isProtectedOnChange = true;
    }
    ComponentBase.prototype.saveChanges = function (key, newValue, oldValue) {
        if (this.isProtectedOnChange) {
            return;
        }
        this.oldProperties[key] = oldValue;
        this.changedProperties[key] = newValue;
        this.finalUpdate();
        // tslint:disable-next-line:no-any
        var changeTime = setTimeout(this.dataBind.bind(this));
        var clearUpdate = function () {
            clearTimeout(changeTime);
        };
        this.finalUpdate = clearUpdate;
    };
    ;
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngOnInit = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempOnThis = isTempRef || this;
        tempOnThis.registeredTemplate = {};
        tempOnThis.ngBoundedEvents = {};
        tempOnThis.isAngular = true;
        /* istanbul ignore next */
        if (isTempRef) {
            this.tags = isTempRef.tags;
        }
        tempOnThis.tags = this.tags || [];
        tempOnThis.complexTemplate = this.complexTemplate || [];
        tempOnThis.tagObjects = [];
        tempOnThis.ngAttr = this.getAngularAttr(tempOnThis.element);
        /* istanbul ignore next */
        tempOnThis.createElement = function (tagName, prop) {
            //tslint:disable-next-line
            var ele = tempOnThis.srenderer ? tempOnThis.srenderer.createElement(tagName) : createElement(tagName);
            if (typeof (prop) === 'undefined') {
                return ele;
            }
            ele.innerHTML = (prop.innerHTML ? prop.innerHTML : '');
            if (prop.className !== undefined) {
                ele.className = prop.className;
            }
            if (prop.id !== undefined) {
                ele.id = prop.id;
            }
            if (prop.styles !== undefined) {
                ele.setAttribute('style', prop.styles);
            }
            if (tempOnThis.ngAttr !== undefined) {
                ele.setAttribute(tempOnThis.ngAttr, '');
            }
            if (prop.attrs !== undefined) {
                attributes(ele, prop.attrs);
            }
            return ele;
        };
        for (var _i = 0, _a = tempOnThis.tags; _i < _a.length; _i++) {
            var tag = _a[_i];
            var tagObject = {
                instance: getValue('child' + tag.substring(0, 1).toUpperCase() + tag.substring(1), tempOnThis),
                name: tag
            };
            tempOnThis.tagObjects.push(tagObject);
        }
        var complexTemplates = Object.keys(tempOnThis);
        complexTemplates = complexTemplates.filter(function (val) {
            return /Ref$/i.test(val) && /\_/i.test(val);
        });
        for (var _b = 0, complexTemplates_1 = complexTemplates; _b < complexTemplates_1.length; _b++) {
            var tempName = complexTemplates_1[_b];
            var propName = tempName.replace('Ref', '');
            var val = {};
            setValue(propName.replace('_', '.'), getValue(propName, tempOnThis), val);
            tempOnThis.setProperties(val, true);
        }
    };
    ComponentBase.prototype.getAngularAttr = function (ele) {
        var attributes = ele.attributes;
        var length = attributes.length;
        var ngAr;
        for (var i = 0; i < length; i++) {
            /* istanbul ignore next */
            if (/_ngcontent/g.test(attributes[i].name)) {
                ngAr = attributes[i].name;
            }
        }
        return ngAr;
    };
    ;
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngAfterViewInit = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempAfterViewThis = isTempRef || this;
        var regExp = /ejs-tab|ejs-accordion/g;
        /* istanbul ignore next */
        if (regExp.test(tempAfterViewThis.ngEle.nativeElement.outerHTML)) {
            tempAfterViewThis.ngEle.nativeElement.style.visibility = 'hidden';
        }
        // Used setTimeout for template binding
        // Refer Link: https://github.com/angular/angular/issues/6005
        setTimeout(function () {
            /* istanbul ignore else  */
            if (typeof window !== 'undefined') {
                tempAfterViewThis.appendTo(tempAfterViewThis.element);
                tempAfterViewThis.ngEle.nativeElement.style.visibility = '';
            }
        });
    };
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngOnDestroy = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempOnDestroyThis = isTempRef || this;
        /* istanbul ignore else  */
        if (typeof window !== 'undefined' && tempOnDestroyThis.element.classList.contains('e-control')) {
            tempOnDestroyThis.destroy();
            tempOnDestroyThis.clearTemplate(null);
        }
    };
    //tslint:disable-next-line
    ComponentBase.prototype.clearTemplate = function (templateNames, index) {
        clearTemplate(this, templateNames, index);
    };
    ;
    // tslint:disable-next-line:no-any
    ComponentBase.prototype.ngAfterContentChecked = function (isTempRef) {
        // tslint:disable-next-line:no-any
        var tempAfterContentThis = isTempRef || this;
        for (var _i = 0, _a = tempAfterContentThis.tagObjects; _i < _a.length; _i++) {
            var tagObject = _a[_i];
            if (!isUndefined(tagObject.instance) &&
                (tagObject.instance.isInitChanges || tagObject.instance.hasChanges || tagObject.instance.hasNewChildren)) {
                if (tagObject.instance.isInitChanges) {
                    var propObj = {};
                    // For angular 9 compatibility
                    // Not able to get complex directive properties reference ni Onint hook
                    // So we have constructed property here and used
                    var complexDirProps = void 0;
                    var list = getValue('instance.list', tagObject);
                    if (list && list.length) {
                        complexDirProps = list[0].directivePropList;
                    }
                    var skip = true;
                    if (tempAfterContentThis.getModuleName && tempAfterContentThis.getModuleName() === 'gantt') {
                        skip = false;
                    }
                    if (complexDirProps && skip && complexDirProps.indexOf(tagObject.instance.propertyName) === -1) {
                        var compDirPropList = Object.keys(tagObject.instance.list[0].propCollection);
                        for (var h = 0; h < tagObject.instance.list.length; h++) {
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName] = [];
                            var obj = {};
                            for (var k = 0; k < compDirPropList.length; k++) {
                                var complexPropName = compDirPropList[k];
                                obj[complexPropName] = tagObject.instance.list[h].propCollection[complexPropName];
                            }
                            tagObject.instance.list[h].propCollection[tagObject.instance.propertyName].push(obj);
                        }
                    }
                    // End angular 9 compatibility
                    propObj[tagObject.name] = tagObject.instance.getProperties();
                    tempAfterContentThis.setProperties(propObj, tagObject.instance.isInitChanges);
                }
                else {
                    /* istanbul ignore next */
                    for (var _b = 0, _c = tagObject.instance.list; _b < _c.length; _b++) {
                        var list = _c[_b];
                        if (list.hasChanges) {
                            var curIndex = tagObject.instance.list.indexOf(list);
                            var curChild = getValue(tagObject.name, tempAfterContentThis)[curIndex];
                            if (curChild !== undefined && curChild.setProperties !== undefined) {
                                curChild.setProperties(list.getProperties());
                            }
                            list.isUpdated = true;
                        }
                    }
                }
            }
        }
    };
    ComponentBase.prototype.registerEvents = function (eventList) {
        registerEvents(eventList, this);
    };
    ComponentBase.prototype.twoWaySetter = function (newVal, prop) {
        var oldVal = getValue(prop, this.properties);
        if (oldVal === newVal) {
            return;
        }
        this.saveChanges(prop, newVal, oldVal);
        setValue(prop, (isNullOrUndefined(newVal) ? null : newVal), this.properties);
        getValue(prop + 'Change', this).emit(newVal);
    };
    ComponentBase.prototype.addTwoWay = function (propList) {
        var _this = this;
        var _loop_1 = function (prop) {
            getValue(prop, this_1);
            Object.defineProperty(this_1, prop, {
                get: function () {
                    return getValue(prop, _this.properties);
                },
                set: function (newVal) { return _this.twoWaySetter(newVal, prop); }
            });
            setValue(prop + 'Change', new EventEmitter(), this_1);
        };
        var this_1 = this;
        for (var _i = 0, propList_1 = propList; _i < propList_1.length; _i++) {
            var prop = propList_1[_i];
            _loop_1(prop);
        }
    };
    ComponentBase.prototype.addEventListener = function (eventName, handler) {
        var eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            if (!this.ngBoundedEvents[eventName]) {
                this.ngBoundedEvents[eventName] = new Map();
            }
            this.ngBoundedEvents[eventName].set(handler, eventObj.subscribe(handler));
        }
    };
    ComponentBase.prototype.removeEventListener = function (eventName, handler) {
        var eventObj = getValue(eventName, this);
        if (!isUndefined(eventObj)) {
            this.ngBoundedEvents[eventName].get(handler).unsubscribe();
        }
    };
    ComponentBase.prototype.trigger = function (eventName, eventArgs, success) {
        var eventObj = getValue(eventName, this);
        var prevDetection = this.isProtectedOnChange;
        this.isProtectedOnChange = false;
        if (eventArgs) {
            eventArgs.name = eventName;
        }
        if (!isUndefined(eventObj)) {
            eventObj.next(eventArgs);
        }
        var localEventObj = getValue('local' + eventName.charAt(0).toUpperCase() + eventName.slice(1), this);
        if (!isUndefined(localEventObj)) {
            localEventObj.call(this, eventArgs);
        }
        this.isProtectedOnChange = prevDetection;
        /* istanbul ignore else  */
        if (success) {
            success.call(this, eventArgs);
        }
    };
    return ComponentBase;
}());
export { ComponentBase };
