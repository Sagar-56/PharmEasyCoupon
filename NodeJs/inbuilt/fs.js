// file system
// let fs = require('fs');
// // fs.writeFile(path,data,call back function)
// fs.writeFile('MyCode.txt', 'my code of node js is a language', (err) => {
//     if (err) throw err;
//     console.log('My File Created')
// })

let fs = require('fs');
// fs.appendFile('Mytext.txt', `${Math.random()*1000} This is node js code\n`, (err) => {
//     if (err) throw err;
//     console.log('My File Created')
// })

fs.rename('Mytext.txt', 'Mytext1.txt', (err) => {
    if (err) throw err;
    console.log('My File renamed')
})



// fs.readFile('Mytext.txt','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data)
// })


// fs.unlink('myfile.txt',(err) =>{
//     if(err) throw err;
//     console.log('File Deleted')
// })