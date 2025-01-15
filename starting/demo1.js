"use strict";

let loggedin = "s"; 
// console.log(loggedin) 

let bool_log = Boolean(loggedin)
// console.log(bool);
/* 
 1 => true , 0 => false , any other number than zero is treated as a true in conversion to bool . 
 
  "" => false , "string" => true , anything written as string is treated as a true in conversion to bool, even if it is false written itself in the string we are converting.  "false" => true.

*/

let num = 456;

let s_num = String(num);

console.log(num);
console.log(s_num);
console.log(typeof num);
console.log(typeof s_num);

