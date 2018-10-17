const express = require('express');
const os = require('os');
const http = require('http');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
const server = http.createServer(app);

app.set('port', port);
server.listen(port);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

server.on('listening', () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
});

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/marco', (req, res) => res.send('polo'));
