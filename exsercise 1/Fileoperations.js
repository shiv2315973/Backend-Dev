const fs = require('fs');


fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('show Error reading file:', err);
    return;
  }

  const words = data.split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  const output = `Word Count: ${wordCount}`;
 
  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error('show Error  file:', err);
      return;
    }
    console.log('Word count is shown to output.txt');
  });
});
