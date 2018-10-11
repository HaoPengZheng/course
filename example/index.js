
function solveRect(l, b) {
  console.log("Solving for rectangle with l = " + l + "and b = " + b);
  if (l <= 0 || b <= 0) {
    console.log("Rectangle dimension should be greater than zero :l = " + l + ", and b = " + b);
  } else {
    console.log("This perimeter of the rectangle is " + rect.perimeter(l,b));
    console.log("The area of the rectangle is "+rect.area(l,b));
  }
}

var rect = {
  perimeter: (x, y) => (2 * (x + y)),
  area: (x, y) => (x * y)
}
solveRect(2,4);