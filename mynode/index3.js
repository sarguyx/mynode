fstat.writeFile("message.txt","Hello from NodeJS!",(err)=>{
    if (err) throw err;
    console.log("The file has been saved!");
});