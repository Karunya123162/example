const fs = require('fs');

//read a file
fs.readFile('input.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})

//writing Files
fs.writeFile('output.txt','Hello World!',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File has been written');
})
//append data to an existing file
fs.appendFile('output.txt','\nAppended text',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Data appended to file');
});

//Delete a file
fs.unlink('output.txt',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File deleted');
})

//Working with Directories
//Create a new Directory
fs.mkdir('new_directory',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory created');
})

//Remove directory
fs.rmdir('new_directory',(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory removed');
})

//Watching for file changes
fs.watch('input.txt',(eventType,filename)=>{
    if(filename){
        console.log(`File changed:${filename}`);
    }
});

fs.appendFile('input.txt','\nAppnded text',(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Data appended to file');
});