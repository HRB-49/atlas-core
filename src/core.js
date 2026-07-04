const http = require('http');
const PORT = 3000;

// Initialize a standard HTTP network service handler
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    status: "online", 
    service: "atlas-core-engine", 
    telemetry: "nominal",
    timestamp: new Date().toISOString()
  }));
});

// Bind the service engine to its designated port tree
server.listen(PORT, () => {
  console.log(`[DEPLOYED] Atlas-Core system active and listening on port ${PORT}`);
});
