let fs= require('fs')
let path= require ('path')
fs.readdir(process.argv[2],(err,list)=>{
    if(err){
        throw err;
    } 
    for(let i=0;i<list.length;i++){
        if(path.extname(list[i])=== '.'+process.argv[3]){
            console.log(list[i])
        }
    }
})