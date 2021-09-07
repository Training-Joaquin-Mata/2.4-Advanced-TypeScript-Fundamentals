"use strict";
//#region channing operator and ?? operator videos 1 y 2
// type SerializationOptions = {
//   formatting?:{
//     indent?: number;
//   }
// }
var _a, _b;
// import { of } from "core-js/core/array";
// import { throwError } from "rxjs";
// function serializeJSON(value, options?: SerializationOptions){
//   //Se pueden crear este tipo de cadenas para hacer que estos 
//   //valores sean opcionales y tambien para checar que haya algun valor en este tipo de valores
//   ////el operador ?? actua diferente que || pues con este ultimo se pueden tomar todos los valores que sean falsy incluyendo el 0 y con ?? solo null y undefined
//   const indent = options?.formatting?.indent ?? 2;
//   return JSON.stringify(value, null, indent);
// }
// const user={
//   name:'Joaquin',
//   lastName:'Mata',
// }
// const json = serializeJSON(user,{formatting:{indent:2}});
// console.log(json);
//#endregion
//#region Statically Type Unknown Values with TypeScript's unknown Type videos 3 y 4
// // //Si usamos any como el tipo de value puede tomar cualquier valor, si se usa unknown
// // //Es mas sencillo identificar el tipo de valor que es value
// // let value: unknown;
// // value ="hello world";
// // value = undefined;
// // if(typeof value === 'string'){
// //   const uppercaseText = value.toUpperCase();
// //   console.log(uppercaseText);
// // }
// // function assert(condition:boolean, message: string): asserts condition{
// //   if(!condition){
// //     throw Error(message); 
// //   }
// // }
// function assertIsNumber(value: unknown, name: string): asserts value is number{
//   if(typeof value !== 'number'){
//     throw Error(` ERROR: ${value}, ${name} `)
//   }
// }
// //Se declara dos veces el prototipo de la funcion, 
// //uno con number para asignarle los valores de number
// //y el otro como unknown para añadirle la funcionalidad 
// //de que solo se puedan enviar valores de tipo number 
// function range(from: number, to: number): number[];
// function range(from: unknown, to: unknown): number[] {
//   assertIsNumber(from, "from")
//   assertIsNumber(to, "to")
// // assert(typeof from === 'number',"from must be type number");
// // assert(typeof to === 'number', "to must be type number")
// //   if (typeof from !== "number" || typeof to !== "number") {
// //     throw Error("range() expects exactly 2 numbers");
// //   }
//   const values: number[] = [];
//   for (let i = from; i < to; i++) {
//     values.push(i);
//   }
//   return values;
// }
// console.log(range(0, 5));
//#endregion
//#region not null check with assert video 5
// //la forma correcta de evitar el error que podria provocar lo anterior es:
// function assertIsNotNullish<T>(value: T, message: string): asserts value is NonNullable<T>{
//   if(value===null || value === undefined){
//     throw Error(message);
//   }
// }
// //Se añade el ! al final de la declaracion para evitar que mande un error de null
// const root = document.getElementById("root");
// //la forma correcta de evitar el error que podria provocar lo anterior es(2):
// assertIsNotNullish(root, "Couldn´t find DOM element #root")
// root.addEventListener("click", e =>{
// });
//#endregion
//#region private variables VIDEOS 6 7 y 8
// // class Counter{
// //   //AL AGREGAR PRIVATE EN UNA VARIABLE DENTRO DE LA CLASE LA HACE PRIVADA DENTRO DE LA COMPILACION PERO NO EN LA EJECUCION
// //   // SI SE AGREGA EL # LA HACE PRIVADA INCLUSO EN EL RUNTIME
// //   #value = 0;
// //   increment(){
// //     this.#value+=1;
// //   }
// // get count(){
// //   return this.#value;
// // }
// // }
// // const counter = new Counter();
// // counter.increment();
// // counter.increment();
// // counter.increment();
// // console.log(counter.count);
// //Create private variables in a closure
// function createCounter(){
//   let value=0;
// return{
//   increment(){
//     value+=1;
//   },
//   get count(){
//     return value;
//   }
// }
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.count);
//#endregion
//#region strict property initialization videos 9
//en tsconfig set to true strict
class User {
    constructor(username) {
        this.username = username;
    }
    setUserName(username) {
        this.username = username;
    }
}
const user = new User("JoaquinMA");
const username = (_b = (_a = user.username) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "n/a";
console.log(`username: ${username}`);
//#endregion
