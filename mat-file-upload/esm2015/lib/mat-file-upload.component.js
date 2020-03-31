/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
export class MatFileUploadComponent {
    constructor() {
        this.labelText = 'Select File(s)';
        this.selectButtonText = 'Select File(s)';
        this.uploadButtonText = 'Upload File(s)';
        this.allowMultipleFiles = false;
        this.showUploadButton = true;
        this.acceptedTypes = '*.*';
        this.customSvgIcon = null;
        this.uploadClicked = new EventEmitter();
        this.selectedFilesChanged = new EventEmitter();
        this.selectedFileText = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?=} files
     * @return {?}
     */
    filesChanged(files) {
        this.selectedFiles = files;
        this.selectedFilesChanged.emit(this.selectedFiles);
        if (this.selectedFiles) {
            /** @type {?} */
            const numSelectedFiles = this.selectedFiles.length;
            this.selectedFileText =
                numSelectedFiles === 1
                    ? this.selectedFiles[0].name
                    : `${numSelectedFiles} files selected`;
        }
        else {
            this.selectedFileText = '';
            this.resetFileInput();
        }
    }
    /**
     * @return {?}
     */
    uploadFiles() {
        this.uploadClicked.emit(this.selectedFiles);
        this.resetFileInput();
    }
    /**
     * @return {?}
     */
    resetFileInput() {
        this.fileInputRef.nativeElement.value = '';
    }
}
MatFileUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'mat-file-upload',
                template: `
    <span class="file-input-text">{{ labelText }}</span>
    <button
      mat-button
      color="primary"
      class="file-input-button"
      (click)="fileInput.click()"
      [attr.aria-label]="selectButtonText"
    >
      <span>{{ selectButtonText }}</span>
      <input
        #fileInput
        type="file"
        style="display: none"
        [accept]="acceptedTypes"
        [multiple]="allowMultipleFiles"
        (change)="filesChanged($event.target.files)"
      />
    </button>
    <button
      mat-raised-button
      color="primary"
      class="file-input-button"
      [disabled]="!selectedFiles"
      (click)="uploadFiles()"
      *ngIf="showUploadButton"
      [attr.aria-label]="uploadButtonText"
    >
      {{ uploadButtonText }}
    </button>
    <span class="file-input-text">{{ selectedFileText }}</span>
    <button
      mat-icon-button
      (click)="filesChanged(null)"
      aria-label="Remove Selected File(s)"
    >
      <mat-icon *ngIf="!customSvgIcon">close</mat-icon>
      <mat-icon *ngIf="customSvgIcon" [svgIcon]="customSvgIcon"></mat-icon>
    </button>
  `,
                styles: ['.file-input-button { margin-right: 8px !important }',
                    '.file-input-text { font-size: 14px !important; margin-right: 8px !important }']
            }] }
];
/** @nocollapse */
MatFileUploadComponent.ctorParameters = () => [];
MatFileUploadComponent.propDecorators = {
    labelText: [{ type: Input }],
    selectButtonText: [{ type: Input }],
    uploadButtonText: [{ type: Input }],
    allowMultipleFiles: [{ type: Input }],
    showUploadButton: [{ type: Input }],
    acceptedTypes: [{ type: Input }],
    customSvgIcon: [{ type: Input }],
    uploadClicked: [{ type: Output }],
    selectedFilesChanged: [{ type: Output }],
    fileInputRef: [{ type: ViewChild, args: ['fileInput', { static: false },] }]
};
if (false) {
    /** @type {?} */
    MatFileUploadComponent.prototype.labelText;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectButtonText;
    /** @type {?} */
    MatFileUploadComponent.prototype.uploadButtonText;
    /** @type {?} */
    MatFileUploadComponent.prototype.allowMultipleFiles;
    /** @type {?} */
    MatFileUploadComponent.prototype.showUploadButton;
    /** @type {?} */
    MatFileUploadComponent.prototype.acceptedTypes;
    /** @type {?} */
    MatFileUploadComponent.prototype.customSvgIcon;
    /** @type {?} */
    MatFileUploadComponent.prototype.uploadClicked;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectedFilesChanged;
    /** @type {?} */
    MatFileUploadComponent.prototype.fileInputRef;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectedFiles;
    /** @type {?} */
    MatFileUploadComponent.prototype.selectedFileText;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZpbGUtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1maWxlLXVwbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9tYXQtZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUE7QUFpRHRCLE1BQU0sT0FBTyxzQkFBc0I7SUFlakM7UUFkUyxjQUFTLEdBQUcsZ0JBQWdCLENBQUE7UUFDNUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUE7UUFDbkMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUE7UUFDbkMsdUJBQWtCLEdBQUcsS0FBSyxDQUFBO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQTtRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQTtRQUNyQixrQkFBYSxHQUFZLElBQUksQ0FBQTtRQUM1QixrQkFBYSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFBO1FBQ3BFLHlCQUFvQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFBO1FBSXJGLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtJQUVMLENBQUM7Ozs7SUFFakIsUUFBUSxLQUFLLENBQUM7Ozs7O0lBRWQsWUFBWSxDQUFDLEtBQWdCO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO1FBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ2xELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTs7a0JBQ2hCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTtZQUNsRCxJQUFJLENBQUMsZ0JBQWdCO2dCQUNuQixnQkFBZ0IsS0FBSyxDQUFDO29CQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUM1QixDQUFDLENBQUMsR0FBRyxnQkFBZ0IsaUJBQWlCLENBQUE7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7WUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3ZCLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtJQUM1QyxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUNUO3lCQUVDLHFEQUFxRDtvQkFDckQsK0VBQStFO2FBRWxGOzs7Ozt3QkFFRSxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLE1BQU07bUNBQ04sTUFBTTsyQkFFTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7OztJQVZ6QywyQ0FBcUM7O0lBQ3JDLGtEQUE0Qzs7SUFDNUMsa0RBQTRDOztJQUM1QyxvREFBbUM7O0lBQ25DLGtEQUFnQzs7SUFDaEMsK0NBQThCOztJQUM5QiwrQ0FBc0M7O0lBQ3RDLCtDQUE4RTs7SUFDOUUsc0RBQXFGOztJQUVyRiw4Q0FBbUU7O0lBQ25FLCtDQUF1Qjs7SUFDdkIsa0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWZpbGUtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJmaWxlLWlucHV0LXRleHRcIj57eyBsYWJlbFRleHQgfX08L3NwYW4+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIG1hdC1idXR0b25cclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgY2xhc3M9XCJmaWxlLWlucHV0LWJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwic2VsZWN0QnV0dG9uVGV4dFwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuPnt7IHNlbGVjdEJ1dHRvblRleHQgfX08L3NwYW4+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNmaWxlSW5wdXRcclxuICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcclxuICAgICAgICBbYWNjZXB0XT1cImFjY2VwdGVkVHlwZXNcIlxyXG4gICAgICAgIFttdWx0aXBsZV09XCJhbGxvd011bHRpcGxlRmlsZXNcIlxyXG4gICAgICAgIChjaGFuZ2UpPVwiZmlsZXNDaGFuZ2VkKCRldmVudC50YXJnZXQuZmlsZXMpXCJcclxuICAgICAgLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBjbGFzcz1cImZpbGUtaW5wdXQtYnV0dG9uXCJcclxuICAgICAgW2Rpc2FibGVkXT1cIiFzZWxlY3RlZEZpbGVzXCJcclxuICAgICAgKGNsaWNrKT1cInVwbG9hZEZpbGVzKClcIlxyXG4gICAgICAqbmdJZj1cInNob3dVcGxvYWRCdXR0b25cIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInVwbG9hZEJ1dHRvblRleHRcIlxyXG4gICAgPlxyXG4gICAgICB7eyB1cGxvYWRCdXR0b25UZXh0IH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pbnB1dC10ZXh0XCI+e3sgc2VsZWN0ZWRGaWxlVGV4dCB9fTwvc3Bhbj5cclxuICAgIDxidXR0b25cclxuICAgICAgbWF0LWljb24tYnV0dG9uXHJcbiAgICAgIChjbGljayk9XCJmaWxlc0NoYW5nZWQobnVsbClcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIFNlbGVjdGVkIEZpbGUocylcIlxyXG4gICAgPlxyXG4gICAgICA8bWF0LWljb24gKm5nSWY9XCIhY3VzdG9tU3ZnSWNvblwiPmNsb3NlPC9tYXQtaWNvbj5cclxuICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY3VzdG9tU3ZnSWNvblwiIFtzdmdJY29uXT1cImN1c3RvbVN2Z0ljb25cIj48L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgICcuZmlsZS1pbnB1dC1idXR0b24geyBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50IH0nLFxyXG4gICAgJy5maWxlLWlucHV0LXRleHQgeyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudCB9JyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbGFiZWxUZXh0ID0gJ1NlbGVjdCBGaWxlKHMpJ1xyXG4gIEBJbnB1dCgpIHNlbGVjdEJ1dHRvblRleHQgPSAnU2VsZWN0IEZpbGUocyknXHJcbiAgQElucHV0KCkgdXBsb2FkQnV0dG9uVGV4dCA9ICdVcGxvYWQgRmlsZShzKSdcclxuICBASW5wdXQoKSBhbGxvd011bHRpcGxlRmlsZXMgPSBmYWxzZVxyXG4gIEBJbnB1dCgpIHNob3dVcGxvYWRCdXR0b24gPSB0cnVlXHJcbiAgQElucHV0KCkgYWNjZXB0ZWRUeXBlcyA9ICcqLionXHJcbiAgQElucHV0KCkgY3VzdG9tU3ZnSWNvbj86IHN0cmluZyA9IG51bGxcclxuICBAT3V0cHV0KCkgdXBsb2FkQ2xpY2tlZDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3Q+KClcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWxlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlSW5wdXRSZWY6IEVsZW1lbnRSZWZcclxuICBzZWxlY3RlZEZpbGVzOiBGaWxlTGlzdFxyXG4gIHNlbGVjdGVkRmlsZVRleHQgPSAnJ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBmaWxlc0NoYW5nZWQoZmlsZXM/OiBGaWxlTGlzdCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpbGVzID0gZmlsZXNcclxuICAgIHRoaXMuc2VsZWN0ZWRGaWxlc0NoYW5nZWQuZW1pdCh0aGlzLnNlbGVjdGVkRmlsZXMpXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgIGNvbnN0IG51bVNlbGVjdGVkRmlsZXMgPSB0aGlzLnNlbGVjdGVkRmlsZXMubGVuZ3RoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlVGV4dCA9XHJcbiAgICAgICAgbnVtU2VsZWN0ZWRGaWxlcyA9PT0gMVxyXG4gICAgICAgICAgPyB0aGlzLnNlbGVjdGVkRmlsZXNbMF0ubmFtZVxyXG4gICAgICAgICAgOiBgJHtudW1TZWxlY3RlZEZpbGVzfSBmaWxlcyBzZWxlY3RlZGBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlVGV4dCA9ICcnXHJcbiAgICAgIHRoaXMucmVzZXRGaWxlSW5wdXQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwbG9hZENsaWNrZWQuZW1pdCh0aGlzLnNlbGVjdGVkRmlsZXMpXHJcbiAgICB0aGlzLnJlc2V0RmlsZUlucHV0KClcclxuICB9XHJcblxyXG4gIHJlc2V0RmlsZUlucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxlSW5wdXRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnXHJcbiAgfVxyXG59XHJcbiJdfQ==