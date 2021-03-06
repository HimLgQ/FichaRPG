import app from '../app';
import debug from 'debug';
debug('ficharpg:server')
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

const port = Number(process.env.PORT) || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('Server running on http://localhost:' + (port + 1)));
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
