let sisiA = 3;
let sisiB = 4;
let sisiC = 5;

if (sisiA === sisiB && sisiB === sisiC) {
  console.log("Segitiga adalah segitiga sama sisi.");
} else if (sisiA === sisiB || sisiB === sisiC || sisiA === sisiC) {
  console.log("Segitiga adalah segitiga sama kaki.");
} else {
  console.log("Segitiga adalah segitiga sembarang.");
}
