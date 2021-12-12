namespace Shapes {
  export namespace Polygons {
    export class Triangle {}
    export class Square {}
  }
}

import polygons = Shapes.Polygons;

let sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
