"use strict";

// Important:
// To solve these challenges you have use (for in ,for of) or (Object.keys ,Object.values, Object.entries )
// Resources:
// for in : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// for of : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// -------------------------------------------------------------------------------------------------------
//  Challenge 1:
//  Required:
//
//  Write a function that takes an object and returns the formatted text based on the provided object as the example:
// 
// Input:
//  const obj = {
//      firstName: 'Ellie',
//      lastName: 'jon',
//      age: 67,
//      hobby: 'Gaming and Sleeping'
//  }
//
//  Output: "my name is Ellie Jon I am 67 YO, and I love Gaming and Sleeping."

//  Note that:
//  1- The text template is "my name is ** ** I am ** YO, and I love **." 
// the output should match the above template, no extra spaces or letters.
//  2- The first letter of the firstName and lastName should be capital letter

const objLit = (obj) => {
  let formatFirstName = obj.firstName.toUpperCase().slice(0,1) + obj.firstName.slice(1, obj.firstName.length);
  let formatLastName = obj.lastName.toUpperCase().slice(0,1) + obj.lastName.slice(1, obj.lastName.length);
  let output = `my name is ${formatFirstName} ${formatLastName} I am ${obj.age} YO, and I love ${obj.hobby}.`;
  return output;
}

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:

// You are given an object that contains name and age of some customers.
// Write a function that returns an array of strings that follows the below structure
//
// the string format is "Customer Name :*** *** , Age :**"

// Input:
// const obj = {
//     "Romio Joliat": 35,
//     "Mario Ristrova": 39,
//     "Sofia firnando": 50,
// }
//
// Output:
// ["Customer Name :Romio Joliat , Age :35", "Customer Name :Mario Ristrova , Age :39", ... ]

const customerAndAge = (obj) => {
  const output = [];
for (const key in obj){
  output.push(`Customer Name :${key} , Age :${obj[key]}`);

}
return output;
};
// -------------------------------------------------------------------------------------------------------

module.exports = {
  objLit,
  customerAndAge
};