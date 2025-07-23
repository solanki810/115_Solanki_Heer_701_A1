const fs = require('fs');
const util = require('util');

// Promisify unlink function
const unlinkFile = util.promisify(fs.unlink);

// Call the function with async/await
async function deleteMyFile(filePath) {
    try {
        await unlinkFile(filePath);
        console.log(` File '${filePath}' deleted successfully.`);
    } catch (err) {
        console.error(` Error deleting file: ${err.message}`);
    }
}

// Example usage
deleteMyFile('test.txt');  // Change filename as needed
