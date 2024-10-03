const express = require('express');
const app = express();
const port = 3100;

// Declare a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Run the server
const server = app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});

// Handle SIGTERM for graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing Express app');
  server.close(() => {
    console.log('Express app closed');
    process.exit(0);
  });
});
