const { execSync } = require('child_process');

// Store benchmark results for each service
const results = {};

// Function to run the command and log the result
function runBenchmark(serviceName, url, runNumber) {
  const command = `ab -n 100 -c 10 -s 120 -q ${url}`;

  try {
    // Synchronous execution of the command
    const stdout = execSync(command).toString();

    // Parse the "Requests per second" line
    const requestsPerSecondMatch = stdout.match(/Requests per second:\s+([0-9.]+)/);
    if (requestsPerSecondMatch) {
      const requestsPerSecond = parseFloat(requestsPerSecondMatch[1]);
      console.log(`${serviceName} #${runNumber} requests per second: ${requestsPerSecond}`);

      // Store the result for this service
      if (!results[serviceName]) {
        results[serviceName] = [];
      }
      results[serviceName].push(requestsPerSecond);
    } else {
      console.error(`Could not parse "Requests per second" for ${serviceName} #${runNumber}`);
    }
  } catch (error) {
    console.error(`Error executing ${serviceName} benchmark: ${error.message}`);
  }
}

// Function to run multiple benchmarks
function runMultipleBenchmarks(serviceName, url, times) {
  for (let i = 1; i <= times; i++) {
    runBenchmark(serviceName, url, i);
  }
}

// Function to calculate average results and print them sorted
function printSortedResults() {
  const averages = [];

  for (const serviceName in results) {
    const serviceResults = results[serviceName];
    const total = serviceResults.reduce((sum, value) => sum + value, 0);
    const average = total / serviceResults.length;
    averages.push({ serviceName, average });
  }

  // Sort by average requests per second in descending order
  averages.sort((a, b) => b.average - a.average);

  console.log("\nAverage results by Service:");
  averages.forEach((result, index) => {
    console.log(`#${index + 1} ${result.serviceName}: ${result.average.toFixed(2)} requests per second`);
  });
}

// Run tests 3 times for each service
setTimeout(() => {
  runMultipleBenchmarks('Node.js Express', 'http://node-express-app:3000/', 3);
  runMultipleBenchmarks('Go Gin', 'http://go-gin-app:8080/', 3);
  runMultipleBenchmarks('Python Django', 'http://python-django-app:8000/', 3);
  printSortedResults();

}, 5000); // Initial 5-second delay before starting tests
