const fs=require('fs');

fs.readFile('./imp.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString() );
})
let a="hellow World"
console.log(a);
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
       console.log('Bna di g directory')
    })
}

const readstream=fs.createReadStream('imp.txt',{encoding:'utf-8'})
const writestream=fs.createWriteStream('imp.txt')

readstream.on('data',(chunk)=>{
    console.log("------Chubk aa rha ha-------")
    console.log(chunk);
    writestream.write('\n New Chunk Here \n');

})

readstream.pipe(writestream )