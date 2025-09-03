import 'dotenv/config'

import http from 'node:http';
import app from './app.js';

const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.on('listening',()=>{
    console.log(`Server on http:localhost:${port}`);
});

server.listen(port);