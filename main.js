//1
// let a = 3;
// let b = 4;
// let S = a * b; // Yuzasi
// let P = 2 * (a + b); // Parametri
// console.log(S); //12
// console.log(P); //14

//2
// let son = parseInt(prompt("butun sonni kiriting"));

// if (son > 0) {
//     son += 1 // 1 ga oshirish
// } else if (son < 0) {
//     son -= 2; // 2 ga kamaytirish
// } else {
//     son = 10 // Agar 0 bo'lsa 10 ni o'zlashtirish
// }
// //ekranga chiqarish
// alert("Hosil bo'lgan son" + son)

//3
// let son1 = parseInt(prompt("Birinchi sonni kiriting"))
// let son2 = parseInt(prompt("Ikkinchi sonni kiriting"))
// if (son1 > son2) {
//     alert("Katta son: " + son1 + ", Kichik son:" + son2 );
// } else if (son2 > son1) {
//     alert("Katta son: " + son2 + ", Kichik son: " +son1);
// } else {
//     alert("Ikkala son ham teng: " + son1);
// }

//4
// let k = parseInt(prompt("Baho natijasi uchun 1 dan 5 gacha bo'lgan son kiriting"))
// switch (k) {
//     case 1:
//         alert("Yomon");
//         break;
//     case 2:
//         alert("Qoniqarsiz");
//         break;
//     case 3:
//         alert("Qoniqarli");
//         break;
//     case 4:
//         alert("Yahshi");
//         break;
//     case 5:
//         alert("a'lo");
//         break;
//     default:
//         alert("Xato")
// }

//5
// let Oy = parseInt(prompt("Oy raqamini kiriting"))
// switch (Oy) {
//     case 1:
//         alert("Qish")
//         break
//     case 2:
//         alert("Qish")
//         break
//     case 3:
//         alert("Bahor")
//         break
//     case 4:
//         alert("Bahor")
//         break
//     case 5:
//         alert("Bahor")
//         break
//     case 6:
//         alert("Yoz")
//         break
//     case 7:
//         alert("Yoz")
//         break
//     case 8:
//         alert("Yoz")
//         break
//     case 9:
//         alert("Sentabr")
//         break
//     case 10:
//             alert("Sentabr")
//             break
//     case 11:
//         alert("Sentabr")
//         break
//     case 12:
//         alert("Qish")
//         break    
// }

//6 
// let k = parseInt(prompt("k sonini kiriting:"));
// let n = paresInt(prompt("n sonini kiriting (n > 0):"));

// if (n > 0) {
//     for (let i = 0; i < n; i++)
//     {
//         console.log(k);
//     }
// } else {
//     alert("n soni 0 dan katta bo'lishi kerak.");
// }


//7
// let n = parseInt(prompt("n natural sonni kiriting:"));
// let toqSonlar = [];
// for (let i = 1;
//     toqSonlar.length < n; i += 2)
// {
//     toqSonlar.push(i);
// }
// console.log("Dastlabki " + n + " ta toq son:");
// for (let i = 0; i < toqSonlar.length; i++) {
//     console.log(toqSonlar[i]);
// }

//8
// let n = parseInt(prompt("Massivdagi elementlar sonini kiriting:"));
// let massiv = [];
// for (let i = 0; i < n; i++) {
//   let element = prompt((i + 1) + "-elementni kiriting:");
//   massiv.push(element);
// }
// console.log("Massiv elementlari teskari tartibda:");
// for (let i = n - 1; i >= 0; i--) {
//   console.log(massiv[i]);
// }

//9
// function kattaSonniChiqar() {
//     let son1 = parseInt(prompt("Birinchi sonni kiriting:"));
//     let son2 = parseInt(prompt("Ikkinchi sonni kiriting:"));
  
//     if (son1 > son2) {
//       console.log("Katta son: " + son1);
//     } else if (son2 > son1) {
//       console.log("Katta son: " + son2);
//     } else {
//       console.log("Sonlar teng");
//     }
//   }
  
//   kattaSonniChiqar();

//10
// function juftYokiToq() {
//     let son = parseInt(prompt("Sonni kiriting:"));
  
//     if (son % 2 === 0) {
//       console.log(son + " juft son.");
//     } else {
//       console.log(son + " toq son.");
//     }
//   }
  
//   juftYokiToq();
  
  