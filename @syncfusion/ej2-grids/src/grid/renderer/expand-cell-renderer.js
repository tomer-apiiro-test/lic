var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IndentCellRenderer } from './indent-cell-renderer';
/**
 * ExpandCellRenderer class which responsible for building group expand cell.
 * @hidden
 */
var ExpandCellRenderer = /** @class */ (function (_super) {
    __extends(ExpandCellRenderer, _super);
    function ExpandCellRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Function to render the expand cell
     * @param  {Cell} cell
     * @param  {Object} data
     * @param  {{ [x: string]: string }} attr
     * @param {boolean} isExpand
     */
    ExpandCellRenderer.prototype.render = function (cell, data, attr, isExpand) {
        var node = this.element.cloneNode();
        node.className = isExpand ? 'e-recordplusexpand' : 'e-recordpluscollapse';
        node.setAttribute('ej-mappingname', data.field);
        node.setAttribute('ej-mappingvalue', data.key);
        node.setAttribute('aria-expanded', isExpand ? 'true' : 'false');
        node.setAttribute('tabindex', '-1');
        node.appendChild(this.parent.createElement('div', {
            className: isExpand ? 'e-icons e-gdiagonaldown e-icon-gdownarrow' : 'e-icons e-gnextforward e-icon-grightarrow'
        }));
        return node;
    };
    return ExpandCellRenderer;
}(IndentCellRenderer));
export { ExpandCellRenderer };
