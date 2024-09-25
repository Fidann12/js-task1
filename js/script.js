// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// let number = n;
// if (number % 3 == 0 && number%7==0) {
//   console.log("eded 3e ve 7e qaliqsiz bolunur");
// } else {
//   console.log("3e ve 7e bolunmur");
// }

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// let number = n;
// let result = 1;

// if (number > 0) {
//   for (let i = 1; i <= number; i++) {
//     result *= i;
//   }
//   console.log(result);
// } else {
//   console.log("musbet eded deyil");
// }

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// let array = [n, n1, n2, n3];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     sum += array[i] ** 2;
//   }
// }
// console.log(sum);

// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

// let mail;
// let password;

// if (mail == "cavid@code.edu.az" && password == "12345") {
//   console.log("girish oldu");
// } else {
//   console.log("Mail ve yaxud password sehvdir");
// }

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// let array = [n, n1.n2.n3];
// let count = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);

// --------------------------------------------------------------------------------------------------

// 1) Verilmiş n - ədədinin 3-ə və 7-ə bölünüb-bölünməməsini tapan bir function yazin.

// function numbers(num) {
//   if (num % 3 == 0 && num % 7 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let a = 7;

// let result = numbers(a);

// console.log(result);

// const numbers = (n) => {
//   if (n % 3 == 0 && n % 7 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let result = numbers();

// numbers();
// console.log(result);

// 2) Functiona musbet bir eded gelir, hemin funksiya gelen ededin faktorialini hesablayib geri qaytarmalidir.

// function positiveNumbers(num) {
//   let square = 1;
//   if (num > 0) {
//     for (let i = 1; i <= num; i++) {
//       square *= i;
//     }
//     return square;
//   }
// }

// let result = positiveNumbers();

// positiveNumbers();
// console.log(result);

// const positiveNumbers = (n) => {
//   let square = 1;
//   if (n > 0) {
//     for (let i = 1; i <= n; i++) {
//       square *= i;
//     }
//     return square;
//   }
// };

// let result = positiveNumbers();

// positiveNumbers();

// console.log(result);

// 3) Her hansisa number elementleri olan arayin icindeki cut ededlerin kvadratlarinin cemini hesablayan bir function yazin.

// function squareEvenNumbers(arr) {
//   let sum = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       sum += arr[i] * arr[i];
//     }
//   }
//   return sum;
// }

// let a = [1, 2, 4, 5];
// let result = squareEvenNumbers(a);

// console.log(result);

// const squareEvenNumbers = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       sum += arr[i] ** 2;
//     }
//   }
//   return sum;
// };

// let a = [1, 2, 3, 4, 5];

// let result = squareEvenNumbers(a);
// console.log(result);

// 4) Funtiona-a  mail ve password gelir. Mail beraberdirse cavid@code.edu.az -a ve password beraberdirse 12345 -e, ekranda "Girish olundu" yazilsin, eks halda "Mail ve yaxud password sehvdir" yazilsin.

// function login(mail, password) {
//   let correctMail = "cavid@code.edu.az";
//   let correctPassword = "12345";
//   if (mail == correctMail && password == correctPassword) {
//     return "Giris olundu";
//   } else {
//     return "mail ve yaxus sifre sehvdir";
//   }
// }

// let result = login("cavid@code.edu.az", "12345");
// console.log(result);

// const login = (mail, password) => {
//   let correctMail = "cavid@code.edu.az";
//   let correctPassword = "12345";
//   if (mail == correctMail && password == correctPassword) {
//     return "Giris olundu";
//   } else {
//     return "mail ve yaxus sifre sehvdir";
//   }
// };

// let result = login("cavid@code.edu.az", "12345");
// console.log(result);

// 5) Functiona ededlerden ibaret array gelir, function hemin arraydaki tek ededlerin cemini qaytarmalidir.

// function getOddNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// let array = [1, 2, 3, 5, 9];
// let result = getOddNumbers(array);

// console.log(result);

// const getOddNumbers = (arr) => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       sum += arr[i];
//     }
//   }
//   console.log(sum);
// };

// let array = [1, 3, 5, 6];

// getOddNumbers(array);

// 6) Functiona ededlerden ibaret array gelir, function hemin arraydaki cut ededlerin sayini qaytarmalidir.

// function getEvenNumbers(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let array = [1, 2, 3, 4, 6];

// let result = getEvenNumbers(array);
// console.log(result);

// const getEvenNumbers = (arr) => {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// let array = [1, 2, 3, 4, 5, 8, 10];
// getEvenNumbers(array);
