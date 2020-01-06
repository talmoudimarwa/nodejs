const fs = require('fs')
fs.readFile(process.argv[2],(err,data)=>{
    if(err){
       console.log('can not read the file')
    }else{
        console.log(data.toString().split('\n').length-1)
    }
})