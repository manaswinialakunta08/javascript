let score = 33
console.log(typeof score)
let score1 = "33"
console.log(typeof score1)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)
let score2 = null 
console.log(typeof score2)
let score3 = undefined 
console.log(typeof score3)

let score4 = true
console.log(score4)

//"33" => 33
//"33abc" => NaN
// true => 1 , false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn )
// 1 => true , 0 => false 
// "" => fale 
// "manaswini" =>true 

let somenumber = 33
let stringNumber = String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)
// operations
let value = 3
let negvalue = -value
console.log(negvalue);

let str1 = "hello"
let str2 = "manaswini"
let str3 = str1+str2
console.log(str3)

console.log("1" + 2)
console.log(2+"1")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

let counter = 100
counter++;
console.log(counter);
// prefix and postfix 
// in prefix change the value first and then use it 
let x = 5
let y = ++x
console.log(x)
console.log(y)

// in poostfix use the current value first and then change it 
let x1 = 7
let y1 = x++
console.log(x1)
console.log(y1)
