const fs = require('fs');

console.log(`Reading test files from current directory`);

fs.readdirSync(__dirname).forEach(file => {
    if (file.endsWith('.test.js')) {  
        console.log(`Executing test file: ${file}`);
        require(`./${file}`);
    }
});

console.log('Finished running tests.');
