/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getClosureSafeProperty } from '../../util/property';
/**
 * Construct an `InjectableDef` which defines how a token will be constructed by the DI system, and
 * in which injectors (if any) it will be available.
 *
 * This should be assigned to a static `ngInjectableDef` field on a type, which will then be an
 * `InjectableType`.
 *
 * Options:
 * * `providedIn` determines which injectors will include the injectable, by either associating it
 *   with an `@NgModule` or other `InjectorType`, or by specifying that this injectable should be
 *   provided in the `'root'` injector, which will be the application-level injector in most apps.
 * * `factory` gives the zero argument function which will create an instance of the injectable.
 *   The factory can call `inject` to access the `Injector` and request injection of dependencies.
 *
 * @codeGenApi
 */
export function ɵɵdefineInjectable(opts) {
    return {
        token: opts.token, providedIn: opts.providedIn || null, factory: opts.factory,
        value: undefined,
    };
}
/**
 * @deprecated in v8, delete after v10. This API should be used only be generated code, and that
 * code should now use ɵɵdefineInjectable instead.
 * @publicApi
 */
export var defineInjectable = ɵɵdefineInjectable;
/**
 * Construct an `InjectorDef` which configures an injector.
 *
 * This should be assigned to a static `ngInjectorDef` field on a type, which will then be an
 * `InjectorType`.
 *
 * Options:
 *
 * * `factory`: an `InjectorType` is an instantiable type, so a zero argument `factory` function to
 *   create the type must be provided. If that factory function needs to inject arguments, it can
 *   use the `inject` function.
 * * `providers`: an optional array of providers to add to the injector. Each provider must
 *   either have a factory or point to a type which has an `ngInjectableDef` static property (the
 *   type must be an `InjectableType`).
 * * `imports`: an optional array of imports of other `InjectorType`s or `InjectorTypeWithModule`s
 *   whose providers will also be added to the injector. Locally provided types will override
 *   providers from imports.
 *
 * @publicApi
 */
export function ɵɵdefineInjector(options) {
    return {
        factory: options.factory, providers: options.providers || [], imports: options.imports || [],
    };
}
/**
 * Read the `ngInjectableDef` for `type` in a way which is immune to accidentally reading inherited
 * value.
 *
 * @param type A type which may have its own (non-inherited) `ngInjectableDef`.
 */
export function getInjectableDef(type) {
    var def = type[NG_INJECTABLE_DEF];
    // The definition read above may come from a base class. `hasOwnProperty` is not sufficient to
    // distinguish this case, as in older browsers (e.g. IE10) static property inheritance is
    // implemented by copying the properties.
    //
    // Instead, the ngInjectableDef's token is compared to the type, and if they don't match then the
    // property was not defined directly on the type itself, and was likely inherited. The definition
    // is only returned if the type matches the def.token.
    return def && def.token === type ? def : null;
}
/**
 * Read the `ngInjectableDef` for `type` or read the `ngInjectableDef` from one of its ancestors.
 *
 * @param type A type which may have `ngInjectableDef`, via inheritance.
 *
 * @deprecated Will be removed in v10, where an error will occur in the scenario if we find the
 * `ngInjectableDef` on an ancestor only.
 */
export function getInheritedInjectableDef(type) {
    if (type && type[NG_INJECTABLE_DEF]) {
        // TODO(FW-1307): Re-add ngDevMode when closure can handle it
        // ngDevMode &&
        console.warn("DEPRECATED: DI is instantiating a token \"" + type.name + "\" that inherits its @Injectable decorator but does not provide one itself.\n" +
            ("This will become an error in v10. Please add @Injectable() to the \"" + type.name + "\" class."));
        return type[NG_INJECTABLE_DEF];
    }
    else {
        return null;
    }
}
/**
 * Read the `ngInjectorDef` type in a way which is immune to accidentally reading inherited value.
 *
 * @param type type which may have `ngInjectorDef`
 */
export function getInjectorDef(type) {
    return type && type.hasOwnProperty(NG_INJECTOR_DEF) ? type[NG_INJECTOR_DEF] : null;
}
export var NG_INJECTABLE_DEF = getClosureSafeProperty({ ngInjectableDef: getClosureSafeProperty });
export var NG_INJECTOR_DEF = getClosureSafeProperty({ ngInjectorDef: getClosureSafeProperty });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2ludGVyZmFjZS9kZWZzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBbUgzRDs7Ozs7Ozs7Ozs7Ozs7O0dBZUc7QUFDSCxNQUFNLFVBQVUsa0JBQWtCLENBQUksSUFJckM7SUFDQyxPQUFRO1FBQ04sS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFpQixJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDaEYsS0FBSyxFQUFFLFNBQVM7S0FDVyxDQUFDO0FBQ3BDLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7QUFFbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQkc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQUMsT0FBaUU7SUFFaEcsT0FBUTtRQUNOLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sSUFBSSxFQUFFO0tBQzdELENBQUM7QUFDcEMsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFJLElBQVM7SUFDM0MsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUF1QixDQUFDO0lBQzFELDhGQUE4RjtJQUM5Rix5RkFBeUY7SUFDekYseUNBQXlDO0lBQ3pDLEVBQUU7SUFDRixpR0FBaUc7SUFDakcsaUdBQWlHO0lBQ2pHLHNEQUFzRDtJQUN0RCxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDaEQsQ0FBQztBQUVEOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLFVBQVUseUJBQXlCLENBQUksSUFBUztJQUNwRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUNuQyw2REFBNkQ7UUFDN0QsZUFBZTtRQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1IsK0NBQTRDLElBQUksQ0FBQyxJQUFJLGtGQUE4RTthQUNuSSx5RUFBc0UsSUFBSSxDQUFDLElBQUksY0FBVSxDQUFBLENBQUMsQ0FBQztRQUMvRixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0tBQ2hDO1NBQU07UUFDTCxPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFJLElBQVM7SUFDekMsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUUsSUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUYsQ0FBQztBQUVELE1BQU0sQ0FBQyxJQUFNLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDLEVBQUMsZUFBZSxFQUFFLHNCQUFzQixFQUFDLENBQUMsQ0FBQztBQUNuRyxNQUFNLENBQUMsSUFBTSxlQUFlLEdBQUcsc0JBQXNCLENBQUMsRUFBQyxhQUFhLEVBQUUsc0JBQXNCLEVBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1R5cGV9IGZyb20gJy4uLy4uL2ludGVyZmFjZS90eXBlJztcbmltcG9ydCB7Z2V0Q2xvc3VyZVNhZmVQcm9wZXJ0eX0gZnJvbSAnLi4vLi4vdXRpbC9wcm9wZXJ0eSc7XG5pbXBvcnQge0NsYXNzUHJvdmlkZXIsIENvbnN0cnVjdG9yUHJvdmlkZXIsIEV4aXN0aW5nUHJvdmlkZXIsIEZhY3RvcnlQcm92aWRlciwgU3RhdGljQ2xhc3NQcm92aWRlciwgVmFsdWVQcm92aWRlcn0gZnJvbSAnLi9wcm92aWRlcic7XG5cblxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IGhvdyBhIHR5cGUgb3IgYEluamVjdGlvblRva2VuYCBpbnRlcmZhY2VzIHdpdGggdGhlIERJIHN5c3RlbS5cbiAqXG4gKiBBdCBhIG1pbmltdW0sIHRoaXMgaW5jbHVkZXMgYSBgZmFjdG9yeWAgd2hpY2ggZGVmaW5lcyBob3cgdG8gY3JlYXRlIHRoZSBnaXZlbiB0eXBlIGBUYCwgcG9zc2libHlcbiAqIHJlcXVlc3RpbmcgaW5qZWN0aW9uIG9mIG90aGVyIHR5cGVzIGlmIG5lY2Vzc2FyeS5cbiAqXG4gKiBPcHRpb25hbGx5LCBhIGBwcm92aWRlZEluYCBwYXJhbWV0ZXIgc3BlY2lmaWVzIHRoYXQgdGhlIGdpdmVuIHR5cGUgYmVsb25ncyB0byBhIHBhcnRpY3VsYXJcbiAqIGBJbmplY3RvckRlZmAsIGBOZ01vZHVsZWAsIG9yIGEgc3BlY2lhbCBzY29wZSAoZS5nLiBgJ3Jvb3QnYCkuIEEgdmFsdWUgb2YgYG51bGxgIGluZGljYXRlc1xuICogdGhhdCB0aGUgaW5qZWN0YWJsZSBkb2VzIG5vdCBiZWxvbmcgdG8gYW55IHNjb3BlLlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgYSBwcml2YXRlIHR5cGUgYW5kIHNob3VsZCBub3QgYmUgZXhwb3J0ZWRcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgybXJtUluamVjdGFibGVEZWY8VD4ge1xuICAvKipcbiAgICogU3BlY2lmaWVzIHRoYXQgdGhlIGdpdmVuIHR5cGUgYmVsb25ncyB0byBhIHBhcnRpY3VsYXIgaW5qZWN0b3I6XG4gICAqIC0gYEluamVjdG9yVHlwZWAgc3VjaCBhcyBgTmdNb2R1bGVgLFxuICAgKiAtIGAncm9vdCdgIHRoZSByb290IGluamVjdG9yXG4gICAqIC0gYCdhbnknYCBhbGwgaW5qZWN0b3JzLlxuICAgKiAtIGBudWxsYCwgZG9lcyBub3QgYmVsb25nIHRvIGFueSBpbmplY3Rvci4gTXVzdCBiZSBleHBsaWNpdGx5IGxpc3RlZCBpbiB0aGUgaW5qZWN0b3JcbiAgICogICBgcHJvdmlkZXJzYC5cbiAgICovXG4gIHByb3ZpZGVkSW46IEluamVjdG9yVHlwZTxhbnk+fCdyb290J3wnYW55J3xudWxsO1xuXG4gIC8qKlxuICAgKiBUaGUgdG9rZW4gdG8gd2hpY2ggdGhpcyBkZWZpbml0aW9uIGJlbG9uZ3MuXG4gICAqXG4gICAqIE5vdGUgdGhhdCB0aGlzIG1heSBub3QgYmUgdGhlIHNhbWUgYXMgdGhlIHR5cGUgdGhhdCB0aGUgYGZhY3RvcnlgIHdpbGwgY3JlYXRlLlxuICAgKi9cbiAgdG9rZW46IHVua25vd247XG5cbiAgLyoqXG4gICAqIEZhY3RvcnkgbWV0aG9kIHRvIGV4ZWN1dGUgdG8gY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlLlxuICAgKi9cbiAgZmFjdG9yeTogKHQ/OiBUeXBlPGFueT4pID0+IFQ7XG5cbiAgLyoqXG4gICAqIEluIGEgY2FzZSBvZiBubyBleHBsaWNpdCBpbmplY3RvciwgYSBsb2NhdGlvbiB3aGVyZSB0aGUgaW5zdGFuY2Ugb2YgdGhlIGluamVjdGFibGUgaXMgc3RvcmVkLlxuICAgKi9cbiAgdmFsdWU6IFR8dW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEluZm9ybWF0aW9uIGFib3V0IHRoZSBwcm92aWRlcnMgdG8gYmUgaW5jbHVkZWQgaW4gYW4gYEluamVjdG9yYCBhcyB3ZWxsIGFzIGhvdyB0aGUgZ2l2ZW4gdHlwZVxuICogd2hpY2ggY2FycmllcyB0aGUgaW5mb3JtYXRpb24gc2hvdWxkIGJlIGNyZWF0ZWQgYnkgdGhlIERJIHN5c3RlbS5cbiAqXG4gKiBBbiBgSW5qZWN0b3JEZWZgIGNhbiBpbXBvcnQgb3RoZXIgdHlwZXMgd2hpY2ggaGF2ZSBgSW5qZWN0b3JEZWZzYCwgZm9ybWluZyBhIGRlZXAgbmVzdGVkXG4gKiBzdHJ1Y3R1cmUgb2YgcHJvdmlkZXJzIHdpdGggYSBkZWZpbmVkIHByaW9yaXR5IChpZGVudGljYWxseSB0byBob3cgYE5nTW9kdWxlYHMgYWxzbyBoYXZlXG4gKiBhbiBpbXBvcnQvZGVwZW5kZW5jeSBzdHJ1Y3R1cmUpLlxuICpcbiAqIE5PVEU6IFRoaXMgaXMgYSBwcml2YXRlIHR5cGUgYW5kIHNob3VsZCBub3QgYmUgZXhwb3J0ZWRcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgybXJtUluamVjdG9yRGVmPFQ+IHtcbiAgZmFjdG9yeTogKCkgPT4gVDtcblxuICAvLyBUT0RPKGFseGh1Yik6IE5hcnJvdyBkb3duIHRoZSB0eXBlIGhlcmUgb25jZSBkZWNvcmF0b3JzIHByb3Blcmx5IGNoYW5nZSB0aGUgcmV0dXJuIHR5cGUgb2YgdGhlXG4gIC8vIGNsYXNzIHRoZXkgYXJlIGRlY29yYXRpbmcgKHRvIGFkZCB0aGUgbmdJbmplY3RhYmxlRGVmIHByb3BlcnR5IGZvciBleGFtcGxlKS5cbiAgcHJvdmlkZXJzOiAoVHlwZTxhbnk+fFZhbHVlUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxGYWN0b3J5UHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgU3RhdGljQ2xhc3NQcm92aWRlcnxDbGFzc1Byb3ZpZGVyfGFueVtdKVtdO1xuXG4gIGltcG9ydHM6IChJbmplY3RvclR5cGU8YW55PnxJbmplY3RvclR5cGVXaXRoUHJvdmlkZXJzPGFueT4pW107XG59XG5cbi8qKlxuICogQSBgVHlwZWAgd2hpY2ggaGFzIGFuIGBJbmplY3RhYmxlRGVmYCBzdGF0aWMgZmllbGQuXG4gKlxuICogYEluamVjdGFibGVEZWZUeXBlYHMgY29udGFpbiB0aGVpciBvd24gRGVwZW5kZW5jeSBJbmplY3Rpb24gbWV0YWRhdGEgYW5kIGFyZSB1c2FibGUgaW4gYW5cbiAqIGBJbmplY3RvckRlZmAtYmFzZWQgYFN0YXRpY0luamVjdG9yLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJbmplY3RhYmxlVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICAvKipcbiAgICogT3BhcXVlIHR5cGUgd2hvc2Ugc3RydWN0dXJlIGlzIGhpZ2hseSB2ZXJzaW9uIGRlcGVuZGVudC4gRG8gbm90IHJlbHkgb24gYW55IHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ0luamVjdGFibGVEZWY6IG5ldmVyO1xufVxuXG4vKipcbiAqIEEgdHlwZSB3aGljaCBoYXMgYW4gYEluamVjdG9yRGVmYCBzdGF0aWMgZmllbGQuXG4gKlxuICogYEluamVjdG9yRGVmVHlwZXNgIGNhbiBiZSB1c2VkIHRvIGNvbmZpZ3VyZSBhIGBTdGF0aWNJbmplY3RvcmAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yVHlwZTxUPiBleHRlbmRzIFR5cGU8VD4ge1xuICAvKipcbiAgICogT3BhcXVlIHR5cGUgd2hvc2Ugc3RydWN0dXJlIGlzIGhpZ2hseSB2ZXJzaW9uIGRlcGVuZGVudC4gRG8gbm90IHJlbHkgb24gYW55IHByb3BlcnRpZXMuXG4gICAqL1xuICBuZ0luamVjdG9yRGVmOiBuZXZlcjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIGBJbmplY3RvckRlZmAgZXF1aXZhbGVudCBvZiBhIGBNb2R1bGVXaXRoUHJvdmlkZXJzYCwgYW4gYEluamVjdG9yRGVmVHlwZWAgd2l0aCBhblxuICogYXNzb2NpYXRlZCBhcnJheSBvZiBwcm92aWRlcnMuXG4gKlxuICogT2JqZWN0cyBvZiB0aGlzIHR5cGUgY2FuIGJlIGxpc3RlZCBpbiB0aGUgaW1wb3J0cyBzZWN0aW9uIG9mIGFuIGBJbmplY3RvckRlZmAuXG4gKlxuICogTk9URTogVGhpcyBpcyBhIHByaXZhdGUgdHlwZSBhbmQgc2hvdWxkIG5vdCBiZSBleHBvcnRlZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEluamVjdG9yVHlwZVdpdGhQcm92aWRlcnM8VD4ge1xuICBuZ01vZHVsZTogSW5qZWN0b3JUeXBlPFQ+O1xuICBwcm92aWRlcnM/OiAoVHlwZTxhbnk+fFZhbHVlUHJvdmlkZXJ8RXhpc3RpbmdQcm92aWRlcnxGYWN0b3J5UHJvdmlkZXJ8Q29uc3RydWN0b3JQcm92aWRlcnxcbiAgICAgICAgICAgICAgIFN0YXRpY0NsYXNzUHJvdmlkZXJ8Q2xhc3NQcm92aWRlcnxhbnlbXSlbXTtcbn1cblxuXG4vKipcbiAqIENvbnN0cnVjdCBhbiBgSW5qZWN0YWJsZURlZmAgd2hpY2ggZGVmaW5lcyBob3cgYSB0b2tlbiB3aWxsIGJlIGNvbnN0cnVjdGVkIGJ5IHRoZSBESSBzeXN0ZW0sIGFuZFxuICogaW4gd2hpY2ggaW5qZWN0b3JzIChpZiBhbnkpIGl0IHdpbGwgYmUgYXZhaWxhYmxlLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIGEgc3RhdGljIGBuZ0luamVjdGFibGVEZWZgIGZpZWxkIG9uIGEgdHlwZSwgd2hpY2ggd2lsbCB0aGVuIGJlIGFuXG4gKiBgSW5qZWN0YWJsZVR5cGVgLlxuICpcbiAqIE9wdGlvbnM6XG4gKiAqIGBwcm92aWRlZEluYCBkZXRlcm1pbmVzIHdoaWNoIGluamVjdG9ycyB3aWxsIGluY2x1ZGUgdGhlIGluamVjdGFibGUsIGJ5IGVpdGhlciBhc3NvY2lhdGluZyBpdFxuICogICB3aXRoIGFuIGBATmdNb2R1bGVgIG9yIG90aGVyIGBJbmplY3RvclR5cGVgLCBvciBieSBzcGVjaWZ5aW5nIHRoYXQgdGhpcyBpbmplY3RhYmxlIHNob3VsZCBiZVxuICogICBwcm92aWRlZCBpbiB0aGUgYCdyb290J2AgaW5qZWN0b3IsIHdoaWNoIHdpbGwgYmUgdGhlIGFwcGxpY2F0aW9uLWxldmVsIGluamVjdG9yIGluIG1vc3QgYXBwcy5cbiAqICogYGZhY3RvcnlgIGdpdmVzIHRoZSB6ZXJvIGFyZ3VtZW50IGZ1bmN0aW9uIHdoaWNoIHdpbGwgY3JlYXRlIGFuIGluc3RhbmNlIG9mIHRoZSBpbmplY3RhYmxlLlxuICogICBUaGUgZmFjdG9yeSBjYW4gY2FsbCBgaW5qZWN0YCB0byBhY2Nlc3MgdGhlIGBJbmplY3RvcmAgYW5kIHJlcXVlc3QgaW5qZWN0aW9uIG9mIGRlcGVuZGVuY2llcy5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWRlZmluZUluamVjdGFibGU8VD4ob3B0czoge1xuICB0b2tlbjogdW5rbm93bixcbiAgcHJvdmlkZWRJbj86IFR5cGU8YW55PnwgJ3Jvb3QnIHwgJ2FueScgfCBudWxsLFxuICBmYWN0b3J5OiAoKSA9PiBULFxufSk6IG5ldmVyIHtcbiAgcmV0dXJuICh7XG4gICAgdG9rZW46IG9wdHMudG9rZW4sIHByb3ZpZGVkSW46IG9wdHMucHJvdmlkZWRJbiBhcyBhbnkgfHwgbnVsbCwgZmFjdG9yeTogb3B0cy5mYWN0b3J5LFxuICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICB9IGFzIMm1ybVJbmplY3RhYmxlRGVmPFQ+KSBhcyBuZXZlcjtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBpbiB2OCwgZGVsZXRlIGFmdGVyIHYxMC4gVGhpcyBBUEkgc2hvdWxkIGJlIHVzZWQgb25seSBiZSBnZW5lcmF0ZWQgY29kZSwgYW5kIHRoYXRcbiAqIGNvZGUgc2hvdWxkIG5vdyB1c2UgybXJtWRlZmluZUluamVjdGFibGUgaW5zdGVhZC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IGRlZmluZUluamVjdGFibGUgPSDJtcm1ZGVmaW5lSW5qZWN0YWJsZTtcblxuLyoqXG4gKiBDb25zdHJ1Y3QgYW4gYEluamVjdG9yRGVmYCB3aGljaCBjb25maWd1cmVzIGFuIGluamVjdG9yLlxuICpcbiAqIFRoaXMgc2hvdWxkIGJlIGFzc2lnbmVkIHRvIGEgc3RhdGljIGBuZ0luamVjdG9yRGVmYCBmaWVsZCBvbiBhIHR5cGUsIHdoaWNoIHdpbGwgdGhlbiBiZSBhblxuICogYEluamVjdG9yVHlwZWAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAqIGBmYWN0b3J5YDogYW4gYEluamVjdG9yVHlwZWAgaXMgYW4gaW5zdGFudGlhYmxlIHR5cGUsIHNvIGEgemVybyBhcmd1bWVudCBgZmFjdG9yeWAgZnVuY3Rpb24gdG9cbiAqICAgY3JlYXRlIHRoZSB0eXBlIG11c3QgYmUgcHJvdmlkZWQuIElmIHRoYXQgZmFjdG9yeSBmdW5jdGlvbiBuZWVkcyB0byBpbmplY3QgYXJndW1lbnRzLCBpdCBjYW5cbiAqICAgdXNlIHRoZSBgaW5qZWN0YCBmdW5jdGlvbi5cbiAqICogYHByb3ZpZGVyc2A6IGFuIG9wdGlvbmFsIGFycmF5IG9mIHByb3ZpZGVycyB0byBhZGQgdG8gdGhlIGluamVjdG9yLiBFYWNoIHByb3ZpZGVyIG11c3RcbiAqICAgZWl0aGVyIGhhdmUgYSBmYWN0b3J5IG9yIHBvaW50IHRvIGEgdHlwZSB3aGljaCBoYXMgYW4gYG5nSW5qZWN0YWJsZURlZmAgc3RhdGljIHByb3BlcnR5ICh0aGVcbiAqICAgdHlwZSBtdXN0IGJlIGFuIGBJbmplY3RhYmxlVHlwZWApLlxuICogKiBgaW1wb3J0c2A6IGFuIG9wdGlvbmFsIGFycmF5IG9mIGltcG9ydHMgb2Ygb3RoZXIgYEluamVjdG9yVHlwZWBzIG9yIGBJbmplY3RvclR5cGVXaXRoTW9kdWxlYHNcbiAqICAgd2hvc2UgcHJvdmlkZXJzIHdpbGwgYWxzbyBiZSBhZGRlZCB0byB0aGUgaW5qZWN0b3IuIExvY2FsbHkgcHJvdmlkZWQgdHlwZXMgd2lsbCBvdmVycmlkZVxuICogICBwcm92aWRlcnMgZnJvbSBpbXBvcnRzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVkZWZpbmVJbmplY3RvcihvcHRpb25zOiB7ZmFjdG9yeTogKCkgPT4gYW55LCBwcm92aWRlcnM/OiBhbnlbXSwgaW1wb3J0cz86IGFueVtdfSk6XG4gICAgbmV2ZXIge1xuICByZXR1cm4gKHtcbiAgICBmYWN0b3J5OiBvcHRpb25zLmZhY3RvcnksIHByb3ZpZGVyczogb3B0aW9ucy5wcm92aWRlcnMgfHwgW10sIGltcG9ydHM6IG9wdGlvbnMuaW1wb3J0cyB8fCBbXSxcbiAgfSBhcyDJtcm1SW5qZWN0b3JEZWY8YW55PikgYXMgbmV2ZXI7XG59XG5cbi8qKlxuICogUmVhZCB0aGUgYG5nSW5qZWN0YWJsZURlZmAgZm9yIGB0eXBlYCBpbiBhIHdheSB3aGljaCBpcyBpbW11bmUgdG8gYWNjaWRlbnRhbGx5IHJlYWRpbmcgaW5oZXJpdGVkXG4gKiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gdHlwZSBBIHR5cGUgd2hpY2ggbWF5IGhhdmUgaXRzIG93biAobm9uLWluaGVyaXRlZCkgYG5nSW5qZWN0YWJsZURlZmAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmplY3RhYmxlRGVmPFQ+KHR5cGU6IGFueSk6IMm1ybVJbmplY3RhYmxlRGVmPFQ+fG51bGwge1xuICBjb25zdCBkZWYgPSB0eXBlW05HX0lOSkVDVEFCTEVfREVGXSBhcyDJtcm1SW5qZWN0YWJsZURlZjxUPjtcbiAgLy8gVGhlIGRlZmluaXRpb24gcmVhZCBhYm92ZSBtYXkgY29tZSBmcm9tIGEgYmFzZSBjbGFzcy4gYGhhc093blByb3BlcnR5YCBpcyBub3Qgc3VmZmljaWVudCB0b1xuICAvLyBkaXN0aW5ndWlzaCB0aGlzIGNhc2UsIGFzIGluIG9sZGVyIGJyb3dzZXJzIChlLmcuIElFMTApIHN0YXRpYyBwcm9wZXJ0eSBpbmhlcml0YW5jZSBpc1xuICAvLyBpbXBsZW1lbnRlZCBieSBjb3B5aW5nIHRoZSBwcm9wZXJ0aWVzLlxuICAvL1xuICAvLyBJbnN0ZWFkLCB0aGUgbmdJbmplY3RhYmxlRGVmJ3MgdG9rZW4gaXMgY29tcGFyZWQgdG8gdGhlIHR5cGUsIGFuZCBpZiB0aGV5IGRvbid0IG1hdGNoIHRoZW4gdGhlXG4gIC8vIHByb3BlcnR5IHdhcyBub3QgZGVmaW5lZCBkaXJlY3RseSBvbiB0aGUgdHlwZSBpdHNlbGYsIGFuZCB3YXMgbGlrZWx5IGluaGVyaXRlZC4gVGhlIGRlZmluaXRpb25cbiAgLy8gaXMgb25seSByZXR1cm5lZCBpZiB0aGUgdHlwZSBtYXRjaGVzIHRoZSBkZWYudG9rZW4uXG4gIHJldHVybiBkZWYgJiYgZGVmLnRva2VuID09PSB0eXBlID8gZGVmIDogbnVsbDtcbn1cblxuLyoqXG4gKiBSZWFkIHRoZSBgbmdJbmplY3RhYmxlRGVmYCBmb3IgYHR5cGVgIG9yIHJlYWQgdGhlIGBuZ0luamVjdGFibGVEZWZgIGZyb20gb25lIG9mIGl0cyBhbmNlc3RvcnMuXG4gKlxuICogQHBhcmFtIHR5cGUgQSB0eXBlIHdoaWNoIG1heSBoYXZlIGBuZ0luamVjdGFibGVEZWZgLCB2aWEgaW5oZXJpdGFuY2UuXG4gKlxuICogQGRlcHJlY2F0ZWQgV2lsbCBiZSByZW1vdmVkIGluIHYxMCwgd2hlcmUgYW4gZXJyb3Igd2lsbCBvY2N1ciBpbiB0aGUgc2NlbmFyaW8gaWYgd2UgZmluZCB0aGVcbiAqIGBuZ0luamVjdGFibGVEZWZgIG9uIGFuIGFuY2VzdG9yIG9ubHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbmhlcml0ZWRJbmplY3RhYmxlRGVmPFQ+KHR5cGU6IGFueSk6IMm1ybVJbmplY3RhYmxlRGVmPFQ+fG51bGwge1xuICBpZiAodHlwZSAmJiB0eXBlW05HX0lOSkVDVEFCTEVfREVGXSkge1xuICAgIC8vIFRPRE8oRlctMTMwNyk6IFJlLWFkZCBuZ0Rldk1vZGUgd2hlbiBjbG9zdXJlIGNhbiBoYW5kbGUgaXRcbiAgICAvLyBuZ0Rldk1vZGUgJiZcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBERVBSRUNBVEVEOiBESSBpcyBpbnN0YW50aWF0aW5nIGEgdG9rZW4gXCIke3R5cGUubmFtZX1cIiB0aGF0IGluaGVyaXRzIGl0cyBASW5qZWN0YWJsZSBkZWNvcmF0b3IgYnV0IGRvZXMgbm90IHByb3ZpZGUgb25lIGl0c2VsZi5cXG5gICtcbiAgICAgICAgYFRoaXMgd2lsbCBiZWNvbWUgYW4gZXJyb3IgaW4gdjEwLiBQbGVhc2UgYWRkIEBJbmplY3RhYmxlKCkgdG8gdGhlIFwiJHt0eXBlLm5hbWV9XCIgY2xhc3MuYCk7XG4gICAgcmV0dXJuIHR5cGVbTkdfSU5KRUNUQUJMRV9ERUZdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qKlxuICogUmVhZCB0aGUgYG5nSW5qZWN0b3JEZWZgIHR5cGUgaW4gYSB3YXkgd2hpY2ggaXMgaW1tdW5lIHRvIGFjY2lkZW50YWxseSByZWFkaW5nIGluaGVyaXRlZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0gdHlwZSB0eXBlIHdoaWNoIG1heSBoYXZlIGBuZ0luamVjdG9yRGVmYFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5qZWN0b3JEZWY8VD4odHlwZTogYW55KTogybXJtUluamVjdG9yRGVmPFQ+fG51bGwge1xuICByZXR1cm4gdHlwZSAmJiB0eXBlLmhhc093blByb3BlcnR5KE5HX0lOSkVDVE9SX0RFRikgPyAodHlwZSBhcyBhbnkpW05HX0lOSkVDVE9SX0RFRl0gOiBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgTkdfSU5KRUNUQUJMRV9ERUYgPSBnZXRDbG9zdXJlU2FmZVByb3BlcnR5KHtuZ0luamVjdGFibGVEZWY6IGdldENsb3N1cmVTYWZlUHJvcGVydHl9KTtcbmV4cG9ydCBjb25zdCBOR19JTkpFQ1RPUl9ERUYgPSBnZXRDbG9zdXJlU2FmZVByb3BlcnR5KHtuZ0luamVjdG9yRGVmOiBnZXRDbG9zdXJlU2FmZVByb3BlcnR5fSk7XG4iXX0=