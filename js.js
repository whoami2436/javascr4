// TASK-1
// let brithday = new Date ("07.08.2004");
// setInterval(() => {
//     let now = new Date();
//     let between = now - brithday;
//     let saniye = Math.trunc(between / 1000) % 60;
//     let deqiqe = Math.trunc((between / (1000*60))%60);
//     let saat = Math.trunc((between / (1000*60*60)) %24);
//     let gun = Math.trunc(between / (1000*60*60*24));
//     let r = Math.floor(Math.random( )*256);
//     let g = Math.floor(Math.random( )*256);
//     let b = Math.floor(Math.random( )*256);
//     console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`, `color: rgb(${r},${g},${b})`);
// },1000
// );


// TASK-2
// let students = [
//     {
//       id: 1,
//       name: "Nurlan",
//       surname: "Guliyev",
//       point: 90,
//     },
//     {
//       id: 2,
//       name: "Asgar",
//       surname: "Nagdaliyev",
//       point: 94,
//     },
//     {
//       id: 3,
//       name: "Qulu",
//       surname: "Alisoy",
//       point: 80,
//     },
//     {
//       id: 4,
//       name: "Ferhat",
//       surname: "Ibrahimov",
//       point: 60,
//     },
//     {
//       id: 5,
//       name: "Tahir",
//       surname: "Salahov",
//       point: 50,

//     },
//   ];
//   let printStudent = [];
//   let dataName = prompt("daxil et: ");
//   let tap = students.filter((student) => student.name === dataName);
//   tap.map((student) => {
//     printStudent.push(
//       `${student.name}}dir`
//     );
//   });
//   console.log(printStudent.join(", "));

// TASK-3
// let word = prompt("Say hello");
// let length = word.length;

// for (let i = 1; i <= length * 2 - 1; i++) {
//   let textIndex;
//   if (i <= length) {
//     textIndex = word.substring(0, i);
//     console.log(textIndex);
//   } else {
//     textIndex = word.substring(0, length * 2 - i);
//     console.log(textIndex);
//   }
// }
  


