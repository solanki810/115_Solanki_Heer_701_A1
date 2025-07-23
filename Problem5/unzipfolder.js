const unzipper = require('unzipper');
const fs = require('fs');
const path = require('path');

// Input zip file and output folder
const zipFilePath = path.join(__dirname, 'output.zip');  // Change filename if needed
const outputFolder = path.join(__dirname, 'extracted_files'); 

// Create extraction folder if not exists
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Extract the zip file
fs.createReadStream(zipFilePath)
    .pipe(unzipper.Extract({ path: outputFolder }))
    .on('close', () => {
        console.log('Zip file extracted successfully to', outputFolder);
    })
    .on('error', (err) => {
        console.error(' Extraction failed:', err);
    });
