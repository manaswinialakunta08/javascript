function myfunction(){
    console.log("hello i am starting functions in js ");
}
myfunction();
function myFunction(msg)
{
    console.log(msg);
}
myFunction("buidfcbid");
function add(x,y)
{
    console.log(x+y);
}
add(12,31);
function sum(a,b)
{
    s= a+b;
    return s;
}
let res = sum(10,20);
console.log(res);

const arrowsum = (a,b) => {
    return a+b;
}
console.log(arrowsum(10,20));

const mul=(a,b) =>{
    return a*b;
}
console.log(mul(2,3));

const print = ()=>{
    console.log("hello");
}
print();
// Practice

function countvowels(str){
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count ++;
        }
    }
        return count;
}

// arrow function
const countvowels2 = (str) =>{
    let count = 0;
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
            count ++;
        }
    }
    return count;
}
console.log(countvowels2("mini"));
let arr = [1,2,3,4,5];
arr.forEach(function printval(val){
    console.log(val);
});
//using arrow function 
let arr1 = ["hyd","mumbai","delhi"];
arr1.forEach((val) =>{
    console.log(val);
});
let arr3 = ["hyd","mumbai","delhi"];
arr3.forEach((val , idx, arr3) =>{
    console.log(val , idx, arr3);
});
//practice
let arr2 =[1,2,3,4];
arr2.forEach((val) => {
    console.log(val)
})
let newarr = arr2.map((val) => {
   return val * 2;
})
console.log(newarr);

let nums1 = [10,20,30,40,50,60,70];
nums1.forEach((val) =>{
    console.log(val);
});
let newNums = nums1.filter((val) =>{
    return val % 2 === 0;
});
console.log(newNums);

let arr4 = [1,2,3,4];
 const output =arr4.reduce((res, curr) =>{
    return res+curr;
});
console.log(output);
