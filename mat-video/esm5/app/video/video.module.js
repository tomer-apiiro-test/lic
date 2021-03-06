import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatVideoSourceDirective } from './directives/mat-video-source.directive';
import { MatVideoTrackDirective } from './directives/mat-video-track.directive';
import { MatSliderProgressBarComponent } from './internal/mat-slider-progress-bar/mat-slider-progress-bar.component';
import { SecondsToTimePipe } from './pipes/seconds-to-time.pipe';
import { EventService } from './services/event.service';
import { FullscreenService } from './services/fullscreen.service';
import { MatDownloadButtonComponent } from './ui/mat-download-button/mat-download-button.component';
import { MatFrameByFrameControlComponent } from './ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component';
import { MatFullscreenButtonComponent } from './ui/mat-fullscreen-button/mat-fullscreen-button.component';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { MatQualityControlComponent } from './ui/mat-quality-control/mat-quality-control.component';
import { MatSeekProgressControlComponent } from './ui/mat-seek-progress-control/mat-seek-progress-control.component';
import { MatTimeControlComponent } from './ui/mat-time-control/mat-time-control.component';
import { MatVideoSpinnerComponent } from './ui/mat-video-spinner/mat-video-spinner.component';
import { MatVolumeControlComponent } from './ui/mat-volume-control/mat-volume-control.component';
import { MatVideoComponent } from './video.component';
var MatVideoModule = /** @class */ (function () {
    function MatVideoModule() {
    }
    MatVideoModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SecondsToTimePipe,
                MatVideoComponent,
                MatSliderProgressBarComponent,
                MatPlayButtonComponent,
                MatVolumeControlComponent,
                MatDownloadButtonComponent,
                MatFullscreenButtonComponent,
                MatTimeControlComponent,
                MatQualityControlComponent,
                MatVideoSpinnerComponent,
                MatSeekProgressControlComponent,
                MatVideoSourceDirective,
                MatVideoTrackDirective,
                MatFrameByFrameControlComponent
            ],
            imports: [
                CommonModule,
                MatIconModule,
                MatButtonModule,
                MatSliderModule,
            ],
            exports: [
                MatVideoComponent,
                MatVideoSourceDirective,
                MatVideoTrackDirective
            ],
            providers: [
                FullscreenService,
                EventService
            ]
        })
    ], MatVideoModule);
    return MatVideoModule;
}());
export { MatVideoModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDaEYsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0VBQXNFLENBQUM7QUFDckgsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQzFHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG9FQUFvRSxDQUFDO0FBQ3JILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBbUN0RDtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQWpDMUIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFO2dCQUNWLGlCQUFpQjtnQkFDakIsaUJBQWlCO2dCQUNqQiw2QkFBNkI7Z0JBQzdCLHNCQUFzQjtnQkFDdEIseUJBQXlCO2dCQUN6QiwwQkFBMEI7Z0JBQzFCLDRCQUE0QjtnQkFDNUIsdUJBQXVCO2dCQUN2QiwwQkFBMEI7Z0JBQzFCLHdCQUF3QjtnQkFDeEIsK0JBQStCO2dCQUMvQix1QkFBdUI7Z0JBQ3ZCLHNCQUFzQjtnQkFDdEIsK0JBQStCO2FBQ2xDO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLFlBQVk7Z0JBQ1osYUFBYTtnQkFDYixlQUFlO2dCQUNmLGVBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsaUJBQWlCO2dCQUNqQix1QkFBdUI7Z0JBQ3ZCLHNCQUFzQjthQUN6QjtZQUNELFNBQVMsRUFBRTtnQkFDUCxpQkFBaUI7Z0JBQ2pCLFlBQVk7YUFDZjtTQUNKLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO1NBQWxCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0U2xpZGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcclxuXHJcbmltcG9ydCB7IE1hdFZpZGVvU291cmNlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL21hdC12aWRlby1zb3VyY2UuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0VmlkZW9UcmFja0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9tYXQtdmlkZW8tdHJhY2suZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0U2xpZGVyUHJvZ3Jlc3NCYXJDb21wb25lbnQgfSBmcm9tICcuL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlY29uZHNUb1RpbWVQaXBlIH0gZnJvbSAnLi9waXBlcy9zZWNvbmRzLXRvLXRpbWUucGlwZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEZ1bGxzY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mdWxsc2NyZWVuLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREb3dubG9hZEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEZyYW1lQnlGcmFtZUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdEZ1bGxzY3JlZW5CdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1mdWxsc2NyZWVuLWJ1dHRvbi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0UGxheUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXBsYXktYnV0dG9uL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRRdWFsaXR5Q29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFNlZWtQcm9ncmVzc0NvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL3VpL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRUaW1lQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFZpZGVvU3Bpbm5lckNvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXZpZGVvLXNwaW5uZXIvbWF0LXZpZGVvLXNwaW5uZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0Vm9sdW1lQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vdWkvbWF0LXZvbHVtZS1jb250cm9sL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4vdmlkZW8uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTZWNvbmRzVG9UaW1lUGlwZSxcclxuICAgICAgICBNYXRWaWRlb0NvbXBvbmVudCxcclxuICAgICAgICBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCxcclxuICAgICAgICBNYXRQbGF5QnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIE1hdFZvbHVtZUNvbnRyb2xDb21wb25lbnQsXHJcbiAgICAgICAgTWF0RG93bmxvYWRCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgTWF0RnVsbHNjcmVlbkJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBNYXRUaW1lQ29udHJvbENvbXBvbmVudCxcclxuICAgICAgICBNYXRRdWFsaXR5Q29udHJvbENvbXBvbmVudCxcclxuICAgICAgICBNYXRWaWRlb1NwaW5uZXJDb21wb25lbnQsXHJcbiAgICAgICAgTWF0U2Vla1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCxcclxuICAgICAgICBNYXRWaWRlb1NvdXJjZURpcmVjdGl2ZSxcclxuICAgICAgICBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlLFxyXG4gICAgICAgIE1hdEZyYW1lQnlGcmFtZUNvbnRyb2xDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICAgICAgTWF0QnV0dG9uTW9kdWxlLFxyXG4gICAgICAgIE1hdFNsaWRlck1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBleHBvcnRzOiBbXHJcbiAgICAgICAgTWF0VmlkZW9Db21wb25lbnQsXHJcbiAgICAgICAgTWF0VmlkZW9Tb3VyY2VEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF0VmlkZW9UcmFja0RpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEZ1bGxzY3JlZW5TZXJ2aWNlLFxyXG4gICAgICAgIEV2ZW50U2VydmljZVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0VmlkZW9Nb2R1bGUgeyB9XHJcbiJdfQ==