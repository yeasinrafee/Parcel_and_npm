import cloneDeep from "lodash-es/cloneDeep.js";

const obj = {
  human: {
    name: "Rafee",
    age: 22,
  },
  study: {
    education: true,
  },
};

const person1 = Object.assign({}, obj);
console.log(person1);

const person2 = cloneDeep(obj);
console.log(person2);
obj.study.education = false;

console.log("Hello world");

// For Polyfilling New ES6 methods:
import "core-js/stable";

// For Polifilling async functions:
import "regenerator-runtime/runtime";
