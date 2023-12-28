const fs = require('fs');

const removeExtraSpaces = (filePath) => {
  fs.readFile(filePath, 'utf-8', (err, data)=>{
    if(err){
      console.log(err);
      return;
    }
    const modifiedData = data.replace(/\s+/g, ' ').trim();
    fs.writeFile(filePath,  modifiedData,(err)=>{
      if(err){
        console.log(err);
        return;
      }
      console.log('File has been cleaned')
    })
  })

}
  

removeExtraSpaces('test.txt');
