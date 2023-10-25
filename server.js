import express from 'express';

import pollRoute from './src/routes';

const server =  express();

server.use(express.json());
server.use('/api/polls/',pollRoute);

server.listen(2400);

console.log("server is running");