const fs = require('fs');

console.log('Starting Program')

//  fs.readFile('./Session-17/hello.txt', 'utf-8',function(err,content){
//     if(err){
//         console.log('Error in file reading', err);
        
//     }else{
//         console.log('File Reading Success',content);

//     }
//  })

 sum(2,5,(result)=> {

     console.log('Result is', result);
 })

console.log('End of program');

function sum(a,b,cb){
    setTimeout(()=>{
        cb(a+b)

    },5*1000)
}
console.log();


// 1 . Read the contents of file from hello.txt                     const file = fs.ReadFileSync(hello)
// 2. Then create a new file named as backup.txt                    fs.createFile(backup)
// 3. Copy the contents of hello file to backup file.               fs.writeFile(backup,file)
// 4. Delete the hello file.                                        fs.delete(hello)

