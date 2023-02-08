// const reverseSeq = (n) => {
//   const mus = [];
//   for (let i = n; i > 0; i -= 1) {
//     mus.push(i);
//   }
//   return mus;
// };

// console.log(reverseSeq(5));

//-------------------------------------------------------------

// function findOdd(A) {
//   var obj = {};
//   A.forEach(function (el) {
//     obj[el] ? obj[el]++ : (obj[el] = 1);
//   });
//   console.log(obj);
//   for (prop in obj) {
//     if (obj[prop] % 2 !== 0) return Number(prop);
//   }
// }
// console.log(findOdd([1, 1, 1, 3, 3, 3, 1, 4, 4, 4, 3]));

//-------------------------------------------------------------

// function digPow(n, p) {
//   let sum = 0;

//   for (const m of [...n+'']) {
//     sum += m ** p;
//     p += 1;
//   }

//   return parseInt(sum / n) ? sum / n : -1;
// }

// function digPow(n, p) {
//   const k = [...(n + "")].reduce((a, b, i) => a + b ** (p + i), 0) / n;
//   return Number.isInteger(k) ? k : -1;
// }

// console.log(digPow(46288, 3));
// console.log(digPow(92, 1));

//-------------------------------------------------------------

// function findNb(m) {
//   let sum = 0;
//   for (let i = 1; i = i; i++) {
//     sum += i ** 3;
//     if (sum === m) {
//       return i;
//     } else if (sum > m) {
//       return -1;
//     }
//   }
// }

// console.log(findNb(40539911473216));

//-------------------------------------------------------------

// function removeSmallest(numbers) {
//   return [
//     ...numbers.slice(0, numbers.indexOf(Math.start(...numbers))),
//     ...numbers.slice(numbers.indexOf(Math.start(...numbers)) + 1),
//   ];
// }

// console.log(removeSmallest([]));

//-------------------------------------------------------------

// function wave(str) {
//   const mus = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == ' ') {
//       continue;
//     }
//     const le = str.split("");
//     le[i] = le[i].toUpperCase()
//     mus.push(le.join(''));
//   }
//   return mus;
// }

// console.log(wave("hello bro"));

//-------------------------------------------------------------

// let cub = 8;

// console.log(cub ** 2 * 2 + (cub ** 2 - cub * 2) * 4);
// console.log(cub ** 2 * 6 - cub * 8);

//-------------------------------------------------------------

// function digitize(n) {
//   console.log([...(n + "")].map((a) => +a).reverse());
// }

// console.log(digitize(563782));

//-------------------------------------------------------------

// Налаштування
// Налаштування
// function rangeOfNumbers(startNum, endNum) {

//     if (endNum < startNum) {
//         return [];
//     } else {
//         const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     return countArray;
//   }

// };
// function filteredArray(arr, elem) {
//   let newArr = [];
//   // Змініть код лише під цим рядком
//   let inc = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == elem) {
//         inc = !inc;
//         break;
//       }
//     }
//     inc ? newArr.push(arr[i]) : inc = true;

//   }
//   // Змініть код лише над цим рядком
//   return newArr;
// }
// console.log(
//   filteredArray(
//     [
//       [3, 2, 3],
//       [1, 6, 3],
//       [3, 13, 26],
//       [19, 4, 9],
//     ],
//     3
//   )
// );

//-------------------------------------------------------------

// function findElement(arr, func) {
//   for (let a of arr) {
//       if (func(a)) {
//       return a;
//     }
//   }
//   return;
// }

// console.log(findElement([1,  3, ], (num) => num % 2 === 0));

//-------------------------------------------------------------

// function titleCase(str) {
//  let newStr = '';
//   let mus = str.split(' ');
//   for (let m of mus) {
//     console.log(m.split(""));

//   }
//   return newStr;
// }

// titleCase("I'm a little tea pot");

// function titleCase(str) {
//   let newStr = [];
//    let mus = str.split(' ');
//    for(let m of mus){
//      let nm = m.split('')
//      for(let i = 0; i < nm.length; i++){
//         if(i == 0){
//          newStr.push(nm[i].toUpperCase())
//          continue;
//        }
//          newStr.push(nm[i].toLowerCase())
//       }
//       newStr.push(' ')
//     }
//    return newStr.join('').trimEnd();
//   }

// console.log(  titleCase("lgj cvdkl fdfas hgdfl fldk IUYGTIG"));

//-------------------------------------------------------------

// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];

//   }
// }

// function bouncer(arr) {
//   const newArr = [];
//   for(let a of arr){
//     if(!!a){
//       newArr.push(a)
//     }
//   }
//   return newArr;
// }

// console.log(bouncer([7, "ate", "", false, 9]));

//-------------------------------------------------------------

// function getIndexToIns(arr, num) {
//     const sortMus = arr.sort((a, b) => a - b);
//     for (let i = 0; i < sortMus.length; i++) {
//         if (sortMus[i] >= num) {
//             return i;
//         }
//     }
// }

// console.log(getIndexToIns([40, 60], 50));

//-------------------------------------------------------------

// function mutation(arr) {
//   const normArr = [];
//   normArr.push(arr[0].toLowerCase())
//   normArr.push(arr[1].toLowerCase())
//   for(let i = 0; i < normArr[1].length; i++){
//     if(!normArr[0].includes(normArr[1][i])){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(mutation(["hllo", "HllO"]));

//-------------------------------------------------------------

// function mutation(arr) {
//   const normArr = arr.map(e => e.toLowerCase());

//   for(let i = 0; i < normArr[1].length; i++){
//     if(!normArr[0].includes(normArr[1][i])){
//       return false;
//     }
//   }
//   return true;
// }

// console.log(mutation(["hllo", "Hll"]));

//-------------------------------------------------------------

// function chunkArrayInGroups(arr, size) {
//   const newArr = [];
//   for(let i = 0; i < arr.length; i += size){
//     newArr.push(arr.slice(i, size +i))
//   }
//    return newArr;
//  }

// console.log( chunkArrayInGroups(["a", "b", "c", "d",'j','k'], 2));

//-------------------------------------------------------------

// Глобальна змінна
// const bookList = [
//     "The Hound of the Baskervilles",
//     "On The Electrodynamics of Moving Bodies",
//     "Philosophiæ Naturalis Principia Mathematica",
//     "Disquisitiones Arithmeticae",
// ];

// // Змініть код під цим рядком
// function add(bookName) {
//     let nbl = [...bookList];
//     nbl.push(bookName);
//     return nbl;

//     // Змініть код над цим рядком
// }

// // Змініть код під цим рядком
// function remove(bookName) {
//     const book_index = bookList.indexOf(bookName);
//     if (book_index >= 0) {
//         let bL = [...bookList];
//         bL.splice(book_index, 1);
//         return bL;

//         // Змініть код над цим рядком
//     }
// }

// console.log(add('qwe'));

//-------------------------------------------------------------

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//   // Змініть код лише під цим рядком
// let newArr = [...arr];
// return newArr.sort((a,b) =>  a - b)

//   // Змініть код лише над цим рядком
// }

// console.log(nonMutatingSort(globalArray));

//-------------------------------------------------------------

// function splitify(str) {
//   // Змініть код лише під цим рядком
// return str.split(/[-,\,,\s]/)

//   // Змініть код лише над цим рядком
// }

// console.log(splitify("Hello World,I-am code"));

//-------------------------------------------------------------

// Змініть код лише під цим рядком
// function urlSlug(title) {

//   return title.toLowerCase().split(/\s/).filter(i => i).join('-');

//   }
//   // Змініть код лише над цим рядком
// console.log(  urlSlug("A Mind  Needs Books Like A Sword Needs A Whetstone"));

//-------------------------------------------------------------

// function checkPositive(arr) {
//   // Змініть код лише під цим рядком

// return arr.every(function(num){
//   return num > 0;
// })
//   // Змініть код лише над цим рядком
// }

// console.log(checkPositive([1, 2, 3, 4, 5]));

//-------------------------------------------------------------

// function add(x) {
//     // Змініть код лише під цим рядком

//     return function (y) {
//         return function (z) {
//             return x + y + z;
//         };
//     };

//     // Змініть код лише над цим рядком
// }

// console.log(add(10)(20));

//-------------------------------------------------------------

// function sumAll(arr) {
//   let sum = 0;
//   for(let i = Math.start(...arr); i <= Math.end(...arr); i++){
// sum += i;
//   }
//   return sum;
// }

// console.log(sumAll([1, 2]));

//-------------------------------------------------------------

// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for(let a of arr1){
//     if(!arr2.includes(a)){
//       newArr.push(a)
//     }
//   }
//   for(let aa of arr2){
//     if(!arr1.includes(aa) && !newArr.includes(aa)){
//       newArr.push(aa)
//     }
//   }
//   return newArr;
// }

// console.log(diffArray([1, 2, 3, 7], [1, 2, 3,22, 4, 5]));

//-------------------------------------------------------------

// function whatIsInAName(collection, source) {
//     const arr = [];
//     // Змініть код лише під цим рядком
//     let keys = Object.keys(source);

//     // let arr1 = collection.filter(obj => {
//     //     for (let i = 0; i < keys.length; i++) {
//     //         if (
//     //             !collection.hasOwnProperty(keys[i]) ||
//     //             obj[keys[i]] !== source[keys[i]]
//     //         ) {
//     //             return false;
//     //         }
//     //     }
//     //     return true;
//     // });
//     let arr1 = collection.filter((obj) => {
//         for (let i = 0; i < keys.length; i++) {
//             if (
//                 !obj.hasOwnProperty(keys[i]) ||
//                 obj[keys[i]] !== source[keys[i]]
//             ) {
//                 return false;
//             }
//         }
//         return true;
//     });
//     console.log("afa", arr1);

//-------------------------------------------------------------

//     // Змініть код лише над цим рядком
//     return arr;
// }
// console.log(
//     whatIsInAName(
//         [
//             { apple: 1, bat: 2 },
//             { apple: 1 },
//             { apple: 1, bat: 2, cookie: 2 },
//             { bat: 2 },
//         ],
//         { apple: 1, bat: 2 }
//     )
// );

// function spinalCase(str) {
//     // Create a variable for the white space and underscores.
//     var regex = /\s+|_+/g;
//     // Replace low-upper case to low-space-uppercase
//     str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//     console.log(str);

//     // Replace space and underscore with -
//     return str.replace(regex, "-").toLowerCase();
//   }

//   // test here
//   console.log(spinalCase("ThisIsSpinalTap"));

//-------------------------------------------------------------

// function translatePigLatin(str) {
//  const regexp = /(^[^aeuio]+)(.+)?/g;
//   if(regexp.test(str)){
//    return str.replace(regexp, "$2$1ay")
//   }
//   return str+"way"
// }

// console.log(translatePigLatin("rhythm"));

//-------------------------------------------------------------

// function myReplace(str, before, after) {
//     before[0] == before[0].toUpperCase()
//         ? (after = after.replace(after[0], after[0].toUpperCase()))
//         : (after = after.replace(after[0], after[0].toLowerCase()));

//     return str.replace(before, after);
// }

// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// function pairElement(str) {
//     let mus = [];

//     str.split("").map((el) => {
//         switch (el) {
//             case "A":
//                 mus.push(["A", "T"]);
//                 break;
//             case "T":
//                 mus.push(["T", "A"]);
//                 break;
//             case "C":
//                 mus.push(["C", "G"]);
//                 break;
//             case "G":
//                 mus.push(["C", "G"]);
//                 break;
//         }
//     });
//     return mus;
// }

// console.log(pairElement("ATCGA"));

//-------------------------------------------------------------

// function convertHTML(str) {
//     return str.replaceAll(/[&<>'"]/g, (el) => {
//         switch (el) {
//             case "&":
//                 return "&amp;";
//             case "<":
//                 return "&lt;";
//             case ">":
//                 return "&gt;";
//             case '"':
//                 return "&quot;";
//                 case "'":
//                     return "&apos;";
//             default:
//                 break;
//         }
//     });
// }

// console.log(convertHTML("<D'olce\" & Gabbana>"));

//-------------------------------------------------------------

// function sumFibs(num) {
//     let musFeb = [0, 1];

//     while (num >= musFeb[musFeb.length - 2] + musFeb[musFeb.length - 1]) {
//         musFeb.push(musFeb[musFeb.length - 2] + musFeb[musFeb.length - 1]);
//     }

//     return musFeb.reduce((sum, num) => {
//         if (num % 2) {
//             return (sum += num);
//         }
//         return sum;
//     });
// }
// console.log(sumFibs(1000));
// //   sumFibs(4);

//-------------------------------------------------------------

// function sumPrimes(num) {
//     let sum = [];
//     nextPrime:
//     for (let i = 2; i <= num; i++) {
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
//       sum.push(i);
//     }

//     return sum.reduce( (a,b) => a+b);
//   }

//  console.log( sumPrimes(977));

//-------------------------------------------------------------

// function smallestCommons(arr) {
//     const [start, end] = arr.sort((a, b) => a - b);
//     const num = end - start + 1;

//     let maxComm = 1;
//     for (let i = start; i <= end; i++) {
//         maxComm *= i;
//     }

//     for (let comm = end; comm <= maxComm; comm += end) {
//         let divisorCount = 0;
//         for (let i = start; i <= end; i++) {
//             if (comm % i === 0) {
//                 divisorCount += 1;
//             }
//         }
//         if (divisorCount === num) {
//             return comm;
//         }
//     }
// }

// console.log(smallestCommons([1, 5]));

//-------------------------------------------------------------

// function dropElements(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         if (func(arr[i])) {
//             return arr;
//         } else {
//             arr.shift();
//             i--;
//         }
//     }
//     return arr;
// }

// function steamrollArray(arr) {
//     const mus = [];
//     const fu = (arr) => {
//         for (const m of arr) {
//             if (m.__proto__.constructor == Array) {
//                 fu(m);
//             } else {
//                 mus.push(m);
//             }
//         }
//         return mus;
//     }
//     return fu(arr);
// }

// console.log(steamrollArray([1, {}, [3, [[4]]]]));

//-------------------------------------------------------------

// function binaryAgent(str) {
//     return str
//         .split(" ")
//         .map((e) => String.fromCharCode(parseInt(e, 2)))
//         .join("");
// }

// console.log(
//     binaryAgent(
//         "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
//     )
// );

// console.log(parseInt("01000001", 2));

//-------------------------------------------------------------

// function truthCheck(collection, pre) {
//     for (const col of collection) {
//        if(col[pre]){
//       }else{
//         return false;

//       }
//     }
//     return true;
// }
// console.log(
//     truthCheck(
//         [
//             { name: "Quincy", role: "Founder", isBot: false },
//             { name: "Naomi", role: "", isBot: false },
//             { name: "Camperbot", role: "Bot", isBot: true },
//         ],
//         "role"
//     )
// );

//-------------------------------------------------------------

// function addTogether(...arg) {
//     if (typeof a != "number" || typeof arg[0] != "number") {
//         return undefined;
//     }
//     function sumTwoAnd(a) {
//         if (typeof a != "number" || typeof arg[0] != "number") {
//             return undefined;
//         }
//         return arg[0] + a;
//     }
//     if (arg.length == 1 && typeof arg[0] == "number") {
//         return sumTwoAnd;
//     } else {
//         return arg.reduce((a, b) => {
//            console.log(a, b);
//             if (typeof a != "number" || typeof b != "number") {
//                 return undefined;
//             } else {
//                 return a + b;
//             }
//         });
//     }
// }

// console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

//-------------------------------------------------------------

// const Person = function(firstAndLast) {
//     // Змініть код лише під цим рядком
//     // Завершіть поданий нижче метод та впровадьте наступні схожим способом
//     this.getFullName = function() {
//       return firstAndLast;
//     };
//     this.getFirstName = function() {
//       return firstAndLast.split(' ')[0];
//     };
//     this.getLastName = function() {
//       return firstAndLast.split(' ')[1];
//     };
//    this.setFirstName = function(first) {
//           firstAndLast = firstAndLast.replace(firstAndLast.split(' ')[0], first);
//           return firstAndLast;
//       };
//       this.setLastName = function(last) {
//           firstAndLast = firstAndLast.replace(firstAndLast.split(' ')[1], last);
//           return firstAndLast;
//       };
//       this.setFullName = function(fit) {
//           firstAndLast = fit;
//           return firstAndLast;
//       };

//     return firstAndLast;
//   };



//   const bob = new Person('Bob Ross');
//   bob.setFirstName('Haskell');
//   bob.setLastName("Curry")
//   bob.setFullName('ter lll')
//   console.log(bob.getFullName());

//-------------------------------------------------------------


// function orbitalPeriod(arr) {
//     const GM = 398600.4418;
//     const earthRadius = 6367.4447;
//   const newMus = [];
//     const getOrbPeriod = function (obj) {
//    let orbPeriod = Math.round(2 * Math.PI * Math.sqrt(((obj.avgAlt + earthRadius) ** 3) / GM))
//   return {name: obj.name, orbitalPeriod: orbPeriod}; 
//   }

//    for(el of arr){
//      newMus.push(getOrbPeriod(el))
//    }
//     return newMus;
//   }

// console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));

//-------------------------------------------------------------

// function palindrome(str) {
//     str = str.toLowerCase().replace(/[\W_]/g, '')
//     console.log(str);
// //     if(str.split('').reverse().join('') == str){
// //        return true;
// //    }else{

// //        return false;
// //    }
//   }

//   console.log(palindrome("0_0 (: /-\ :) 0-0"));

//-------------------------------------------------------------

// function convertToRoman(num) {
//     const mus = [
//       { M: 1000 },
//       { D: 500 },
//       { C: 100 },
//       { L: 50 },
//       { X: 10 },
//       { V: 5 },
//       { I: 1 }
//     ];
//     const result = [];

//     for (let i = 0; i < mus.length; i++) {
//       const key = Object.keys(mus[i]).join();
//       const val = mus[i][key];

//       if (num >= val * 0.9 && num < val) {
//         const cur = i == 0 || i == 1 ? 2 : i == 2 || i == 3 ? 4 : 6;
//         const keyE = Object.keys(mus[cur]).join();
//         result.push(keyE);
//         result.push(key);
//         console.log(num);
//         num -= val * 0.9; 
//         console.log(num);
//       } else if (num >= val) {
//         const cur1 = Math.trunc(num / val);
//         for (let i = 0; i < cur1; i++) {
//           result.push(key);
//           num -= val;
//         }
//       }
//     }
//     return result.join("");
//   }

//   console.log(convertToRoman(99));

//-------------------------------------------------------------

// function convertToRoman(num) {
//     const mus = [
//       { M: 1000 },
//       { D: 500 },
//       { C: 100 },
//       { L: 50 },
//       { X: 10 },
//       { V: 5 },
//       { I: 1 }
//     ];
//     let result = "";

//     const foo = (n) => {
//       for (let i = 0; i < mus.length; i++) {
//         const key = Object.keys(mus[i]).join();
//         const cur = i == 0 || i == 1 ? 2 : i == 2 || i == 3 ? 4 : 6;
//         const key1 = Object.keys(mus[cur]).join();
//         const val = mus[i][key];
//         if (val == 500 || val == 50 || val == 5) {
//           if (n >= val * 0.8 && n < val) {
//             num -= val * 0.8;
//             return key1 + key;
//           } else if (n >= val) {
//             num -= val;
//             return key;
//           }
//         } else {
//           if (n >= val * 0.9 && n < val) {
//             num -= val * 0.9;
//             return key1 + key;
//           } else if (n >= val) {
//             num -= val;
//             return key;
//           }
//         }
//       }
//       return;
//     };
//     while (num >= 1) {
//       result += foo(num);
//     }
//     return result;
//   }

//-------------------------------------------------------------

// function rot13(str) {
//   str = str.replace(/[A-Z]/gi, (match)=>{
//     let ind = match.charCodeAt();
//     return String.fromCodePoint(ind+13>90? ind-13 : ind+13)
//     })
//     return str;
//   }
//   console.log(rot13("SERR PBQR PNZC"))

//-------------------------------------------------------------

// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');

// let a;
// let b;
// let oper;
// const rl = readline.createInterface({ input, output });

// rl.question('Введічь перше ', (answer) => {
//  a = answer;
//  rl.close();
// });

// rl.question('Введічь друге', (answer) => {
//     b = answer;
// rl.close();
//    });
//    rl.question('Введічь оператор ', (answer) => {
//     oper = answer;

// console.log(a, b, oper);

//     rl.close();
//    });  

//-------------------------------------------------------------

// const calcPOW = function (num, step){
//     if(step == 1){
//         return num
//     }else{
//         return num * calcPOW(num, step -1)
//     }
// }

// console.log(calcPOW(3, 3))

//-------------------------------------------------------------

// function checkCashRegister(price, cash, cid) {
//     cid.reverse();                                        // розвертаемо масив для зручності
//     const startChan = cash - price;                       // решта  
//     const allCash = cid.reduce( (a, b) => a + b[1], 0 );  // вся готівка в касі
//     const coins = [                                       // номінали монет з назвами
//                    {"ONE HUNDRED": 100},
//                    {"TWENTY": 20},
//                    {"TEN": 10},
//                    {"FIVE": 5},
//                    {"ONE": 1},
//                    {"QUARTER": 0.25},
//                    {"DIME": 0.1},
//                    {"NICKEL": 0.05},
//                    {"PENNY": 0.01},
//     ];
   
//     let change = [];       // масив для решти
//     let chan = startChan;  // решта 
//   //--------------------------------------Ствоюємо масив з рештою---------------------------------------------------
//   for( let i = 0; i < coins.length; i++){
//     let key = Object.keys(coins[i]) + '';               // назва монети
//     let val = coins[i][key];                            // номінал монети           
//     let availableAmount = cid[i][1];                    // доступна сума
//     let requiredAmount = (Math.floor(chan/val) * val);  // можлива сума на даній ітерації 
//         chan = +chan.toFixed(2)                         // округлення для правильнрї роботи
    
//     if((chan / val) >= 1){                                                  // чи перевіряемо наявеість в кассі
//       if(availableAmount > requiredAmount && requiredAmount - chan == 0){   // чи достатньо цими номіналом
//         change.push([key, requiredAmount]);                                 // якщо достатньо 'пушим' і виходимо з циклу 
//         chan -= requiredAmount
//         break;
//       }else{         
//         if(availableAmount - requiredAmount > 0){   //для запису потрібного значення
//           change.push([key, requiredAmount]);       //для запису потрібного значення
//           chan -= requiredAmount                    //для запису потрібного значення 
//         }else{                                      //для запису потрібного значення
//           if (availableAmount !== 0){               //для запису потрібного значення
//             change.push([key, availableAmount]);    //для запису потрібного значення
//             chan -= availableAmount                 //для запису потрібного значення
//           }
//         }
//       }
//     }
//   }
//   //-----------------------------Визначаємо статус, повертаємо обєкт-------------------------------------------------------------
//     if (chan > 0 || allCash < startChan ){         // якщо сума готівки в касі менша ніж здача, або не можете віддати без здачі
//       return {
//               status: "INSUFFICIENT_FUNDS",
//               change: []
//               };
//     }else if(chan == 0 && allCash === startChan){  // сума готівки в касі є значенням для ключа change якщо вона дорівнює здачі
//       return {
//               status: "CLOSED", 
//               change: cid.reverse()
//               }
//     }
//     return {status: "OPEN", change}                // якщо все гаразд
//   }
  
//   console.log(
//   checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER",1], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//   );
  
  // console.log(
  //   checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 10], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
  // );


  //-------------------------------------------------------------

//   class Wheel {
//     constructor(radius, width) {
//         this.wheels = { radius, width };
//     }
  
//     set wheels(params) {
//         const wheel = `${params.radius} ${params.width}`;
  
//         this.wheelArray = [wheel, wheel, wheel, wheel];
  
//         console.log('wheels set');
//     }
  
//     get wheels() {
//         console.log('wheels got');
  
//         return this.wheelArray;
//     }
  
//     toString() {
//         return `allWheel(inches mm): ${this.wheels}`;
//     }
//   }
  
//   const wheel = new Wheel('50', '10');
//   const params = {radius:'100', width:'20'}
//   wheel.wheels(params);
  
//   console.log(wheel.toString());

//-------------------------------------------------------------

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then(users => {
//         let ul = document.createElement("ul");
//         document.body.appendChild(ul)
//         for (const user of users) {
//             let li = document.createElement('li');
//             li.innerText = `${user.id} ${user.name} == ${user.website}`;
//             ul.appendChild(li);
//         }
//     });