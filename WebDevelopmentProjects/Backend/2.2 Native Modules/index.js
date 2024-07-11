const fs = require("fs");

fs.readFile('message.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 

/*
const fs = require("fs");

fs.writeFile("message.txt", "Hello from JS", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
*/

/*
data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }
*/