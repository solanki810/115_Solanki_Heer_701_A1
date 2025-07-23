const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('output.zip');
const archive = archiver('zip', { zlib: { level: 9 } });  // Highest compression

output.on('close', function () {
    console.log('Zip file created successfully.');
    console.log(archive.pointer() + ' total bytes');
});

archive.on('error', function(err){
    throw err;
});

archive.pipe(output);

// Replace 'myfolder' with your folder name to zip
archive.directory('myfolder/', false);

archive.finalize();
