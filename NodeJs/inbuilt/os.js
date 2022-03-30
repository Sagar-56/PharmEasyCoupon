//   operating system

 // let os = require('os');
// console.log(os.platform())
// // console.log(os.arch())
// // console.log(os.cpus()
 let a= require('os');
 console.log(a.platform())
 console.log(a.arch())
//  console.log(a.cpus().length)
console.log(`${a.cpus().length} core`)
console.log(a.freemem())
console.log(a.userInfo())