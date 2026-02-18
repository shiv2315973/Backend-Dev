const fs = require('fs');


function analyzeLogFile(filePath) {
    try {
        
        const data = fs.readFileSync(filePath, 'utf8');

        
        const lines = data.split('\n');

        let totalLines = 0;
        let errorCount = 0;
        let warningCount = 0;
        let infoCount = 0;

        
        lines.forEach(line => {
            if (line.trim() === '') return;

            totalLines++;

            if (line.includes('ERROR')) {
                errorCount++;
            } else if (line.includes('WARNING')) {
                warningCount++;
            } else if (line.includes('INFO')) {
                infoCount++;
            }
        });

        
        console.log('📊 Log File Analysis Report');
        console.log('----------------------------');
        console.log('Total Log Entries :', totalLines);
        console.log('INFO Messages     :', infoCount);
        console.log('WARNING Messages  :', warningCount);
        console.log('ERROR Messages    :', errorCount);

    } catch (err) {
        console.error('Log Analysis Error:', err.message);
    }
}


const logFile = process.argv[2];

if (!logFile) {
    console.log('Usage: node logAnalyzerSync.js <logfile>');
} else {
    analyzeLogFile(logFile);
}
