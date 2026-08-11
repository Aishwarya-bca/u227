/*4.write a nodejs program demonstarte custom module for student marks calculation*/
const marks=require("./marks.js")
let total=marks.calTotal(50,60,70)
let avg=marks.calAvg(total)
console.log(`Total marks=${total}`)
console.log(`Percentage=${avg}`)