import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input } from '@angular/core';
import { MatVideoComponent } from '../video.component';
let MatVideoSourceDirective = class MatVideoSourceDirective {
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    ngOnChanges(changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init)
            this.video.load();
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoSourceDirective.prototype, "src", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoSourceDirective.prototype, "type", void 0);
MatVideoSourceDirective = tslib_1.__decorate([
    Directive({
        selector: '[matVideoSource]'
    }),
    tslib_1.__param(0, Host()),
    tslib_1.__metadata("design:paramtypes", [MatVideoComponent,
        ElementRef])
], MatVideoSourceDirective);
export { MatVideoSourceDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXNvdXJjZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vZGlyZWN0aXZlcy9tYXQtdmlkZW8tc291cmNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLdkQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFRbEMsWUFDa0IsaUJBQW9DLEVBQzVDLEVBQWM7UUFETixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzVDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUZixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFNBQUksR0FBVyxJQUFJLENBQUM7UUFFckIsU0FBSSxHQUFHLElBQUksQ0FBQztRQVFsQixJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Q0FFRixDQUFBO0FBeEJVO0lBQVIsS0FBSyxFQUFFOztvREFBb0I7QUFDbkI7SUFBUixLQUFLLEVBQUU7O3FEQUFxQjtBQUZsQix1QkFBdUI7SUFIbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtLQUM3QixDQUFDO0lBVUcsbUJBQUEsSUFBSSxFQUFFLENBQUE7NkNBQTRCLGlCQUFpQjtRQUN4QyxVQUFVO0dBVmIsdUJBQXVCLENBeUJuQztTQXpCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWF0VmlkZW9Db21wb25lbnQgfSBmcm9tICcuLi92aWRlby5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbWF0VmlkZW9Tb3VyY2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb1NvdXJjZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gbnVsbDtcblxuICBwcml2YXRlIGluaXQgPSB0cnVlO1xuICBwcml2YXRlIHZpZGVvOiBNYXRWaWRlb0NvbXBvbmVudDtcbiAgcHJpdmF0ZSBzb3VyY2U6IEhUTUxTb3VyY2VFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBIb3N0KCkgcHJpdmF0ZSBtYXRWaWRlb0NvbXBvbmVudDogTWF0VmlkZW9Db21wb25lbnQsXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnZpZGVvID0gbWF0VmlkZW9Db21wb25lbnQ7XG4gICAgdGhpcy5zb3VyY2UgPSBlbC5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuaW5pdCA9IGZhbHNlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuc291cmNlLnNyYyA9IHRoaXMuc3JjO1xuICAgIHRoaXMuc291cmNlLnR5cGUgPSB0aGlzLnR5cGU7XG5cbiAgICBpZiAoIXRoaXMuaW5pdClcbiAgICAgIHRoaXMudmlkZW8ubG9hZCgpO1xuICB9XG5cbn1cbiJdfQ==