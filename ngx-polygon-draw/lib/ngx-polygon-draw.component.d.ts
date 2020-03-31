import { OnInit, Renderer2 } from '@angular/core';
export declare class NgxPolygonDrawComponent implements OnInit {
    private rd;
    constructor(rd: Renderer2);
    private src;
    private created;
    private polygon;
    perimeter: any[];
    complete: boolean;
    private canvas;
    private ctx;
    private static line_intersects;
    private point;
    undo(): void;
    clear_canvas(): void;
    private draw;
    private check_intersect;
    point_it(event: any): boolean;
    private start;
    ngOnInit(): void;
    private setBcg;
}
