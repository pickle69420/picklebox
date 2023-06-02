import createBareServer from '@tomphttp/bare-server-node';
import express from 'express';
import http from 'node:http';
import { handler } from './build/handler.js';
import { uvPath } from '@titaniumnetwork-dev/ultraviolet';

console.log(uvPath);

const httpServer = http.createServer();

const app = express();

app.use("/uv/", express.static(uvPath));

app.use(handler);

const bareServer = createBareServer('/bare/');

httpServer.on('request', (req, res) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeRequest(req, res);
	} else {
		app(req, res);
	}
});

httpServer.on('upgrade', (req, socket, head) => {
	if (bareServer.shouldRoute(req)) {
		bareServer.routeUpgrade(req, socket, head);
	} else {
		socket.end();
	}
});

httpServer.on('listening', () => {
	console.log('PickleHub listening on port 3000');
});

httpServer.listen({
	port: 3000,
});