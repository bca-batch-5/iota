// 1.
// console.log("Nama: Fazztrack");
// console.log("Umur:----");
// console.log("Pendidikan Terakhir: ----");
// console.log("Pemrograman yang pernah dipelajari: ---");

//2.
// var: bisa variabel yang bisa dipakai dimana saja
// var name ="iota" ;
// let: variabel yang dipakainya di lingkup tertentu.
// jadi kalau misal dipanggil diluar lingkup for atau if yang dibuat maka variabelnya tidak akan dikenalin dan eror.
// function looping(){
//     for(let n= 0; n<3;n++){
//     console.log(n)}
//     console.log(n)}
//     looping()
//const : variabel yang hanaya bisa dipakai di blok dan fungsinya saja dan tidak bisa dirubah2 seperti let
// const nama = "iota";
// nama = "yaaa";
// console.log(nama); --> eror

//3.ganjil genap
// contohnya di angka 1-10
// for (var angka = 1; angka <= 10; angka++) {
//   if (angka % 2 === 0) {
//     console.log(angka, "genap");
//   } else {
//     console.log(angka, "ganjil");
//   }
// }

// 4.
// const readline = require("readline");
// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// reader.question("input angka:", (angka) => {
//   console.log("angkanya", angka);
//   reader.close();

//   var harga = angka;
//   if (harga >= 25000) {
//     console.log("mahal");
//   }
//   if (harga > 10000) {
//     console.log;
//     ("sedang");
//   }
//   if (harga > 0 && harga <= 10000) {
//     console.log("murah");
//   } else {
//     console.log("input salah");
//   }
// });

// 5.
// for (var angka = 10; angka <= 15; angka++) {
//   console.log(angka);
// }
// var angka = 10;
// while (angka <= 15) {
//   console.log(angka);
//   angka++;
// }
// do {
//   console.log(angka);
//   angka++;
// } while (angka <= 15);

//6.
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("input jarak:", (jarak) => {
  console.log("jaraknya berapa", jarak);
  reader.close();

  if (jarak <= 2) {
    console.log("ongkosnya 5000");
  }
  if (jarak > 2) {
    console.log("tambah 3000 ya per km nya heheheheheh ");
  } else {
    console.log("input salah");
  }
});
