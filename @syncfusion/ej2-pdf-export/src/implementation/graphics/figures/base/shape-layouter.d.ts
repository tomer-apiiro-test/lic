/**
 * ShapeLayouter.ts class for EJ2-PDF
 * @private
 */
import { ElementLayouter, PdfLayoutResult, PdfLayoutParams } from './element-layouter';
import { RectangleF } from './../../../drawing/pdf-drawing';
import { PdfShapeElement } from './pdf-shape-element';
/**
 * ShapeLayouter class.
 * @private
 */
export declare class ShapeLayouter extends ElementLayouter {
    /**
     * Initializes the object to store `older form elements` of previous page.
     * @default 0
     * @private
     */
    olderPdfForm: number;
    /**
     * Initializes the offset `index`.
     * * @default 0
     * @private
     */
    private static index;
    /**
     * Initializes the `difference in page height`.
     * * @default 0
     * @private
     */
    private static splitDiff;
    /**
     * Determines the `end of Vertical offset` values.
     * * @default false
     * @private
     */
    private static last;
    /**
     * Determines the document link annotation `border width`.
     * * @default 0
     * @private
     */
    private static readonly borderWidth;
    /**
     * Checks weather `is pdf grid` or not.
     * @private
     */
    isPdfGrid: boolean;
    /**
     * The `bounds` of the shape element.
     * * @default new RectangleF()
     * @private
     */
    shapeBounds: RectangleF;
    /**
     * The `bottom cell padding`.
     * @private
     */
    bottomCellPadding: number;
    /**
     * Total Page size of the web page.
     * * @default 0
     * @private
     */
    private totalPageSize;
    /**
     * Initializes a new instance of the `ShapeLayouter` class.
     * @private
     */
    constructor(element: PdfShapeElement);
    /**
     * Gets shape element.
     * @private
     */
    readonly element: PdfShapeElement;
    /**
     * Layouts the element.
     * @private
     */
    protected layoutInternal(param: PdfLayoutParams): PdfLayoutResult;
}
