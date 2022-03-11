//basic
const pi = Math.PI;
let square = (length) => length * length;
let cube = (length) => length * length * length;
let round = (number) => Math.round(number);

//triangles
let areaOfTriangles = (base, height) => (base * height) / 2;
let areaOfTriangularPrism = (base, height, depth) =>
  ((base * height) / 2) * depth;

//rectangles & squares
let areaOfRectangle = (length, height) => length * height;
let cubicVolume = (length, height, depth) => length * height * depth;

//circles & spheres
let areaOfCircle = (radius) => pi * square(radius);
let circumferenceOfCircle = (radius) => pi * (radius * 2);
let volumeOfSphere = (radius) => (4 / 3) * pi * cube(radius);
let surfaceAreaOfSphere = (radius) => 4 * pi * square(radius);

//cylinders
let volumeOfCylinder = (radius, length) => pi * square(radius) * length;
let surfaceAreaOfCylinder = (radius, height) =>
  pi * square(radius) * 2 + 2 * pi * radius * height;

//cones
let volumeOfCone = (radius, height) => (1 / 3) * pi * square(radius) * height;
let surfaceAreaOfCone = (radius, slantHeight) =>
  pi * radius * (radius + Math.sqrt(square(slantHeight) + square(radius)));

// length of line
let lengthOfLine = (x1, x2, y1, y2) =>
  Math.sqrt(square(x2 - x1) + square(y2 - y1));
let midpoint = (x1, x2, y1, y2) => {
  return (x1 + x2) / 2, (y1 + y2) / 2;
};
let hypotenuse = (a, b) => Math.sqrt(square(a) + square(b));
