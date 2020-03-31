
# About

Simple lightweight library to draw polygons over images. This library was created to markup areas on the photo, where the computer vision algorithms will track events. Any other usecase is appreciated, contact me on issues.

# Getting started

`<Ngx-NgxPolygonDraw [src]="<linkToImg>" (created)="created($event)"></Ngx-NgxPolygonDraw>`

To create points, just click on the image, they will be connected by lines.

When you're done, do the Right Click and the event created will be emitted and the array of points coordinates will be returned.

##### Example:

`[{x: 248.09375, y: 111}, {x: 194.09375, y: 179}, {x: 221.09375, y: 235}, {x: 366.09375, y: 255}]`

### Controls

You can access components methods to track clicks one by one with @ViewChild.

##### Example

`clearCanvas()` - method allows you to delete existing points

`undo()` - method allows you to undo action

You also can check whether the polygon is complete (boolean), its perimeter(array of objects).

# Contact

**E-mail:** `mitia2022@gmail.com`

**Telegram:** `@Hennessy81`
