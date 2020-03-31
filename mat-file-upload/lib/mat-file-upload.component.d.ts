import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class MatFileUploadComponent implements OnInit {
    labelText: string;
    selectButtonText: string;
    uploadButtonText: string;
    allowMultipleFiles: boolean;
    showUploadButton: boolean;
    acceptedTypes: string;
    customSvgIcon?: string;
    uploadClicked: EventEmitter<FileList>;
    selectedFilesChanged: EventEmitter<FileList>;
    fileInputRef: ElementRef;
    selectedFiles: FileList;
    selectedFileText: string;
    constructor();
    ngOnInit(): void;
    filesChanged(files?: FileList): void;
    uploadFiles(): void;
    resetFileInput(): void;
}
