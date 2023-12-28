const fs = require('fs');

function readFromFile(){
 fs.readFile('text.txt','utf-8', (err,data)=>{
    console.log(data);
    // expensiveOperation();
 })

 
}
const writeToFile = (filePath, content) => {
    fs.writeFile('text.txt', 'Hello World', 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Content has been written to the file.');
    });
  };
// Simulated expensive operation
const expensiveOperation = () => {
    // Perform some task that consumes time
    const startTime = Date.now();
    for (let i = 0; i < 10000000000; i++) {
      // This loop is just for simulating an expensive task
    }
    const endTime = Date.now();
    console.log(`Expensive operation took ${endTime - startTime}ms`);
  };
  writeToFile()
  readFromFile()