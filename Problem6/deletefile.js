// Check if file exists before deleting
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

fs.access(filePath, fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist:', filePath);
  } else {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully.');
      }
    });
  }
});
