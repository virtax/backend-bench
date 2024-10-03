const app = require('fastify')({ logger: false });
const port = 3101;

// Declare a route
app.get('/', async (request, reply) => {
  return { message: 'Hello, World!' }
})

// Run the server
const start = async () => {
  try {
    await app.listen({
      port,
      host: '0.0.0.0'
    })
    app.log.info(`Fastify app listening on http://localhost:3101`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}
start();

// Handle SIGTERM for graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing fastify app');
  server.close(() => {
    console.log('Fastify app closed');
    process.exit(0);
  });
});
