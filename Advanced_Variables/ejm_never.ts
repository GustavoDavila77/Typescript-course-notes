type Shape = "circle" | "square" | "triangle";

function getArea(shape: Shape): number {
  switch (shape) {
    case "circle":
      return Math.PI * 10 * 10;
    case "square":
      return 10 * 10;
    case "triangle":
      return 0.5 * 10 * 10;
    default:
      const exhaustiveCheck: never = shape;
      // If you add a new shape type and forget to handle it,
      // TypeScript will give you an error here
      return exhaustiveCheck;
  }
}

console.log(getArea("circle"));
getArea("square");
getArea("triangle");
//getArea("rectangle"); // This will cause a compile-time error