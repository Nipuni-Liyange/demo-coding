// main.js (Run via terminal using: node main.js)

// 1. Bring in core Node modules
const os = require('os');

// 2. Define application logic
function initializeServerMetrics() {
    console.log('--- Initializing System Metrics Tool ---');
    
    // Fetch system configurations
    const systemPlatform = os.platform();
    const freeMemoryGb = (os.freemem() / 1024 / 1014 / 1024).toFixed(2);
    
    // Print results directly to the command line
    console.log(`Operating System: ${systemPlatform}`);
    console.log(`Available Memory: ${freeMemoryGb} GB`);
}

// 3. Execute the function immediately
initializeServerMetrics();
