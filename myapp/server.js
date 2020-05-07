const http = require('http');
const app = require('./backend/app'); //importing express app
const port = process.env.PORT || 3000;
app.set('port', port); //set the port for express app
const server = http.createServer(app); //invoke express in the server

server.listen(port, () => {
  console.log("Server listening on port: ",port);
});
