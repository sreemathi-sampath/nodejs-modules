import http from 'http';
import process from 'process';
const server = http.createServer(function (_req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
});
server.listen(8080);

process.on('uncaughtException', err => {
  console.log(`Uncaught Exception: ${err.message}`)
  process.exit(1)
})