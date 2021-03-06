import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FullscreenService } from '../../services/fullscreen.service';
let MatFullscreenButtonComponent = class MatFullscreenButtonComponent {
    constructor(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new EventEmitter();
        this.keyboard = true;
    }
    ngOnInit() {
        if (this.fscreen.isEnabled())
            this.canFullscreen = true;
        this.fscreen.onChange(event => this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false));
    }
    setFullscreen(value) {
        if (this.canFullscreen && this.fullscreen !== value)
            this.toggleFullscreen();
    }
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    }
    updateFullscreen() {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    }
    onChangesFullscreen(value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    }
    onFullscreenKey(event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", HTMLVideoElement)
], MatFullscreenButtonComponent.prototype, "player", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
tslib_1.__decorate([
    HostListener('document:keyup.f', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
MatFullscreenButtonComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-fullscreen-button',
        template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\r\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\r\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\r\n</button>",
        styles: [""]
    }),
    tslib_1.__metadata("design:paramtypes", [FullscreenService,
        EventService])
], MatFullscreenButtonComponent);
export { MatFullscreenButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3RFLElBQWEsNEJBQTRCLEdBQXpDLE1BQWEsNEJBQTRCO0lBV3ZDLFlBQ1UsT0FBMEIsRUFDMUIsR0FBaUI7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVozQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUl0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTNCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakQsYUFBUSxHQUFZLElBQUksQ0FBQztJQUs5QixDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFFRCxhQUFhLENBQUMsS0FBYztRQUMxQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxLQUFLO1lBQ2pELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxtQkFBbUIsQ0FBQyxLQUFjO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxlQUFlLENBQUMsS0FBb0I7UUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FFRixDQUFBO0FBaERVO0lBQVIsS0FBSyxFQUFFO3NDQUFTLGdCQUFnQjs0REFBQztBQUV6QjtJQUFSLEtBQUssRUFBRTs7Z0VBQTZCO0FBRTNCO0lBQVQsTUFBTSxFQUFFOzt1RUFBaUQ7QUFFakQ7SUFBUixLQUFLLEVBQUU7OzhEQUEwQjtBQW1DbEM7SUFEQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7NkNBQ3RCLGFBQWE7O21FQUtuQztBQWpEVSw0QkFBNEI7SUFMeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHVCQUF1QjtRQUNqQyx3T0FBcUQ7O0tBRXRELENBQUM7NkNBYW1CLGlCQUFpQjtRQUNyQixZQUFZO0dBYmhCLDRCQUE0QixDQW1EeEM7U0FuRFksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRnVsbHNjcmVlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9mdWxsc2NyZWVuLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtZnVsbHNjcmVlbi1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1mdWxsc2NyZWVuLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGNhbkZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgcGxheWVyOiBIVE1MVmlkZW9FbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBmdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBmdWxsc2NyZWVuQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZnNjcmVlbjogRnVsbHNjcmVlblNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5mc2NyZWVuLmlzRW5hYmxlZCgpKVxyXG4gICAgICB0aGlzLmNhbkZ1bGxzY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuZnNjcmVlbi5vbkNoYW5nZShldmVudCA9PiB0aGlzLmZzY3JlZW4uaXNGdWxsc2NyZWVuKCkgPyB0aGlzLm9uQ2hhbmdlc0Z1bGxzY3JlZW4odHJ1ZSkgOiB0aGlzLm9uQ2hhbmdlc0Z1bGxzY3JlZW4oZmFsc2UpKTtcclxuICB9XHJcblxyXG4gIHNldEZ1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLmNhbkZ1bGxzY3JlZW4gJiYgdGhpcy5mdWxsc2NyZWVuICE9PSB2YWx1ZSlcclxuICAgICAgdGhpcy50b2dnbGVGdWxsc2NyZWVuKCk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVGdWxsc2NyZWVuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuID0gIXRoaXMuZnVsbHNjcmVlbjtcclxuICAgIHRoaXMudXBkYXRlRnVsbHNjcmVlbigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRnVsbHNjcmVlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA/IHRoaXMuZnNjcmVlbi5yZXF1ZXN0KHRoaXMucGxheWVyKSA6IHRoaXMuZnNjcmVlbi5leGl0KCk7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW5DaGFuZ2VkLmVtaXQodGhpcy5mdWxsc2NyZWVuKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlc0Z1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA9IHZhbHVlO1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlZC5lbWl0KHRoaXMuZnVsbHNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXl1cC5mJywgWyckZXZlbnQnXSlcclxuICBvbkZ1bGxzY3JlZW5LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19