import { PipeTransform } from '@angular/core';
export declare class TruncateWordsPipe implements PipeTransform {
    transform(value: string, limit?: number, trail?: string): string;
}