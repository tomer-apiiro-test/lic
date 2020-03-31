/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
var MatFileUploadComponent = /** @class */ (function () {
    function MatFileUploadComponent() {
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
    MatFileUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?=} files
     * @return {?}
     */
    MatFileUploadComponent.prototype.filesChanged = /**
     * @param {?=} files
     * @return {?}
     */
    function (files) {
        this.selectedFiles = files;
        this.selectedFilesChanged.emit(this.selectedFiles);
        if (this.selectedFiles) {
            /** @type {?} */
            var numSelectedFiles = this.selectedFiles.length;
            this.selectedFileText =
                numSelectedFiles === 1
                    ? this.selectedFiles[0].name
                    : numSelectedFiles + " files selected";
        }
        else {
            this.selectedFileText = '';
            this.resetFileInput();
        }
    };
    /**
     * @return {?}
     */
    MatFileUploadComponent.prototype.uploadFiles = /**
     * @return {?}
     */
    function () {
        this.uploadClicked.emit(this.selectedFiles);
        this.resetFileInput();
    };
    /**
     * @return {?}
     */
    MatFileUploadComponent.prototype.resetFileInput = /**
     * @return {?}
     */
    function () {
        this.fileInputRef.nativeElement.value = '';
    };
    MatFileUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mat-file-upload',
                    template: "\n    <span class=\"file-input-text\">{{ labelText }}</span>\n    <button\n      mat-button\n      color=\"primary\"\n      class=\"file-input-button\"\n      (click)=\"fileInput.click()\"\n      [attr.aria-label]=\"selectButtonText\"\n    >\n      <span>{{ selectButtonText }}</span>\n      <input\n        #fileInput\n        type=\"file\"\n        style=\"display: none\"\n        [accept]=\"acceptedTypes\"\n        [multiple]=\"allowMultipleFiles\"\n        (change)=\"filesChanged($event.target.files)\"\n      />\n    </button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      class=\"file-input-button\"\n      [disabled]=\"!selectedFiles\"\n      (click)=\"uploadFiles()\"\n      *ngIf=\"showUploadButton\"\n      [attr.aria-label]=\"uploadButtonText\"\n    >\n      {{ uploadButtonText }}\n    </button>\n    <span class=\"file-input-text\">{{ selectedFileText }}</span>\n    <button\n      mat-icon-button\n      (click)=\"filesChanged(null)\"\n      aria-label=\"Remove Selected File(s)\"\n    >\n      <mat-icon *ngIf=\"!customSvgIcon\">close</mat-icon>\n      <mat-icon *ngIf=\"customSvgIcon\" [svgIcon]=\"customSvgIcon\"></mat-icon>\n    </button>\n  ",
                    styles: ['.file-input-button { margin-right: 8px !important }',
                        '.file-input-text { font-size: 14px !important; margin-right: 8px !important }']
                }] }
    ];
    /** @nocollapse */
    MatFileUploadComponent.ctorParameters = function () { return []; };
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
    return MatFileUploadComponent;
}());
export { MatFileUploadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZpbGUtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC1maWxlLXVwbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9tYXQtZmlsZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUE7QUFFdEI7SUE4REU7UUFkUyxjQUFTLEdBQUcsZ0JBQWdCLENBQUE7UUFDNUIscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUE7UUFDbkMscUJBQWdCLEdBQUcsZ0JBQWdCLENBQUE7UUFDbkMsdUJBQWtCLEdBQUcsS0FBSyxDQUFBO1FBQzFCLHFCQUFnQixHQUFHLElBQUksQ0FBQTtRQUN2QixrQkFBYSxHQUFHLEtBQUssQ0FBQTtRQUNyQixrQkFBYSxHQUFZLElBQUksQ0FBQTtRQUM1QixrQkFBYSxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFBO1FBQ3BFLHlCQUFvQixHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFBO1FBSXJGLHFCQUFnQixHQUFHLEVBQUUsQ0FBQTtJQUVMLENBQUM7Ozs7SUFFakIseUNBQVE7OztJQUFSLGNBQWEsQ0FBQzs7Ozs7SUFFZCw2Q0FBWTs7OztJQUFaLFVBQWEsS0FBZ0I7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUE7UUFDMUIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDbEQsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFOztnQkFDaEIsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ25CLGdCQUFnQixLQUFLLENBQUM7b0JBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQzVCLENBQUMsQ0FBSSxnQkFBZ0Isb0JBQWlCLENBQUE7U0FDM0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUE7WUFDMUIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1NBQ3RCO0lBQ0gsQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMzQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDdkIsQ0FBQzs7OztJQUVELCtDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDNUMsQ0FBQzs7Z0JBeEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUscXFDQXVDVDs2QkFFQyxxREFBcUQ7d0JBQ3JELCtFQUErRTtpQkFFbEY7Ozs7OzRCQUVFLEtBQUs7bUNBQ0wsS0FBSzttQ0FDTCxLQUFLO3FDQUNMLEtBQUs7bUNBQ0wsS0FBSztnQ0FDTCxLQUFLO2dDQUNMLEtBQUs7Z0NBQ0wsTUFBTTt1Q0FDTixNQUFNOytCQUVOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQStCM0MsNkJBQUM7Q0FBQSxBQXpGRCxJQXlGQztTQTFDWSxzQkFBc0I7OztJQUNqQywyQ0FBcUM7O0lBQ3JDLGtEQUE0Qzs7SUFDNUMsa0RBQTRDOztJQUM1QyxvREFBbUM7O0lBQ25DLGtEQUFnQzs7SUFDaEMsK0NBQThCOztJQUM5QiwrQ0FBc0M7O0lBQ3RDLCtDQUE4RTs7SUFDOUUsc0RBQXFGOztJQUVyRiw4Q0FBbUU7O0lBQ25FLCtDQUF1Qjs7SUFDdkIsa0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWZpbGUtdXBsb2FkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJmaWxlLWlucHV0LXRleHRcIj57eyBsYWJlbFRleHQgfX08L3NwYW4+XHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIG1hdC1idXR0b25cclxuICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgY2xhc3M9XCJmaWxlLWlucHV0LWJ1dHRvblwiXHJcbiAgICAgIChjbGljayk9XCJmaWxlSW5wdXQuY2xpY2soKVwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwic2VsZWN0QnV0dG9uVGV4dFwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuPnt7IHNlbGVjdEJ1dHRvblRleHQgfX08L3NwYW4+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgICNmaWxlSW5wdXRcclxuICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBub25lXCJcclxuICAgICAgICBbYWNjZXB0XT1cImFjY2VwdGVkVHlwZXNcIlxyXG4gICAgICAgIFttdWx0aXBsZV09XCJhbGxvd011bHRpcGxlRmlsZXNcIlxyXG4gICAgICAgIChjaGFuZ2UpPVwiZmlsZXNDaGFuZ2VkKCRldmVudC50YXJnZXQuZmlsZXMpXCJcclxuICAgICAgLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBtYXQtcmFpc2VkLWJ1dHRvblxyXG4gICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICBjbGFzcz1cImZpbGUtaW5wdXQtYnV0dG9uXCJcclxuICAgICAgW2Rpc2FibGVkXT1cIiFzZWxlY3RlZEZpbGVzXCJcclxuICAgICAgKGNsaWNrKT1cInVwbG9hZEZpbGVzKClcIlxyXG4gICAgICAqbmdJZj1cInNob3dVcGxvYWRCdXR0b25cIlxyXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInVwbG9hZEJ1dHRvblRleHRcIlxyXG4gICAgPlxyXG4gICAgICB7eyB1cGxvYWRCdXR0b25UZXh0IH19XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1pbnB1dC10ZXh0XCI+e3sgc2VsZWN0ZWRGaWxlVGV4dCB9fTwvc3Bhbj5cclxuICAgIDxidXR0b25cclxuICAgICAgbWF0LWljb24tYnV0dG9uXHJcbiAgICAgIChjbGljayk9XCJmaWxlc0NoYW5nZWQobnVsbClcIlxyXG4gICAgICBhcmlhLWxhYmVsPVwiUmVtb3ZlIFNlbGVjdGVkIEZpbGUocylcIlxyXG4gICAgPlxyXG4gICAgICA8bWF0LWljb24gKm5nSWY9XCIhY3VzdG9tU3ZnSWNvblwiPmNsb3NlPC9tYXQtaWNvbj5cclxuICAgICAgPG1hdC1pY29uICpuZ0lmPVwiY3VzdG9tU3ZnSWNvblwiIFtzdmdJY29uXT1cImN1c3RvbVN2Z0ljb25cIj48L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgICcuZmlsZS1pbnB1dC1idXR0b24geyBtYXJnaW4tcmlnaHQ6IDhweCAhaW1wb3J0YW50IH0nLFxyXG4gICAgJy5maWxlLWlucHV0LXRleHQgeyBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgbWFyZ2luLXJpZ2h0OiA4cHggIWltcG9ydGFudCB9JyxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RmlsZVVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgbGFiZWxUZXh0ID0gJ1NlbGVjdCBGaWxlKHMpJ1xyXG4gIEBJbnB1dCgpIHNlbGVjdEJ1dHRvblRleHQgPSAnU2VsZWN0IEZpbGUocyknXHJcbiAgQElucHV0KCkgdXBsb2FkQnV0dG9uVGV4dCA9ICdVcGxvYWQgRmlsZShzKSdcclxuICBASW5wdXQoKSBhbGxvd011bHRpcGxlRmlsZXMgPSBmYWxzZVxyXG4gIEBJbnB1dCgpIHNob3dVcGxvYWRCdXR0b24gPSB0cnVlXHJcbiAgQElucHV0KCkgYWNjZXB0ZWRUeXBlcyA9ICcqLionXHJcbiAgQElucHV0KCkgY3VzdG9tU3ZnSWNvbj86IHN0cmluZyA9IG51bGxcclxuICBAT3V0cHV0KCkgdXBsb2FkQ2xpY2tlZDogRXZlbnRFbWl0dGVyPEZpbGVMaXN0PiA9IG5ldyBFdmVudEVtaXR0ZXI8RmlsZUxpc3Q+KClcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRGaWxlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxGaWxlTGlzdD4gPSBuZXcgRXZlbnRFbWl0dGVyPEZpbGVMaXN0PigpXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dCcsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWxlSW5wdXRSZWY6IEVsZW1lbnRSZWZcclxuICBzZWxlY3RlZEZpbGVzOiBGaWxlTGlzdFxyXG4gIHNlbGVjdGVkRmlsZVRleHQgPSAnJ1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHsgfVxyXG5cclxuICBmaWxlc0NoYW5nZWQoZmlsZXM/OiBGaWxlTGlzdCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3RlZEZpbGVzID0gZmlsZXNcclxuICAgIHRoaXMuc2VsZWN0ZWRGaWxlc0NoYW5nZWQuZW1pdCh0aGlzLnNlbGVjdGVkRmlsZXMpXHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZEZpbGVzKSB7XHJcbiAgICAgIGNvbnN0IG51bVNlbGVjdGVkRmlsZXMgPSB0aGlzLnNlbGVjdGVkRmlsZXMubGVuZ3RoXHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlVGV4dCA9XHJcbiAgICAgICAgbnVtU2VsZWN0ZWRGaWxlcyA9PT0gMVxyXG4gICAgICAgICAgPyB0aGlzLnNlbGVjdGVkRmlsZXNbMF0ubmFtZVxyXG4gICAgICAgICAgOiBgJHtudW1TZWxlY3RlZEZpbGVzfSBmaWxlcyBzZWxlY3RlZGBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRGaWxlVGV4dCA9ICcnXHJcbiAgICAgIHRoaXMucmVzZXRGaWxlSW5wdXQoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkRmlsZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwbG9hZENsaWNrZWQuZW1pdCh0aGlzLnNlbGVjdGVkRmlsZXMpXHJcbiAgICB0aGlzLnJlc2V0RmlsZUlucHV0KClcclxuICB9XHJcblxyXG4gIHJlc2V0RmlsZUlucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxlSW5wdXRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnXHJcbiAgfVxyXG59XHJcbiJdfQ==