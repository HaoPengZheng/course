
var rect = require('./rectangle');
function solveRect(l,b){
  console.log("Solving for rectangle with l = " + l + "and b = " + b);
  rect(l,b,(err,rectangle)=>{
    if(err){
      console.log("ERROR:",err.message);
    }else{
      console.log("This perimeter of the rectangle is " + rectangle.perimeter());
      console.log("The area of the rectangle is "+rectangle.area());
    }
    console.log("This statement after the call to rect()");
  })
}
solveRect(0,4);
solveRect(2,4);
solveRect(3,5);

// function solveRect(l, b) {
//   console.log("Solving for rectangle with l = " + l + "and b = " + b);
//   if (l <= 0 || b <= 0) {
//     console.log("Rectangle dimension should be greater than zero :l = " + l + ", and b = " + b);
//   } else {
//     console.log("This perimeter of the rectangle is " + rect.perimeter(l,b));
//     console.log("The area of the rectangle is "+rect.area(l,b));
//   }
// }

// var rect = {
//   perimeter: (x, y) => (2 * (x + y)),
//   area: (x, y) => (x * y)
// }


// solveRect(2,4);