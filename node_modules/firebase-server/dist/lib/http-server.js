"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const http = require("http");
const url = require("url");
const log = debug('firebase-server');
function HttpServer(port, address, db) {
    function writeResponse(response, payload) {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(payload));
        response.end();
    }
    function handleReadRequest(request, response, path) {
        db.ref(path).once('value').then((snapshot) => {
            writeResponse(response, snapshot.val());
        });
    }
    function handleWriteRequest(request, response, path, writeMethod) {
        let body = '';
        request.on('data', (data) => {
            body += data;
            if (body.length > 1e6) {
                request.connection.destroy();
            }
        });
        request.on('end', () => {
            const payload = JSON.parse(body);
            db.ref(path)[writeMethod](payload);
            if (writeMethod === 'update') {
                db.ref(path).once('value').then((snapshot) => writeResponse(response, snapshot.val()));
            }
            else {
                writeResponse(response, payload);
            }
        });
    }
    function handleDeleteRequest(request, response, path) {
        db.ref(path).remove();
        writeResponse(response, null);
    }
    const server = http.createServer((request, response) => {
        const urlParts = url.parse(request.url);
        let path = urlParts.pathname;
        if (!path || !path.match(/\.json$/)) {
            response.writeHead(404);
            response.end();
            return;
        }
        path = path.replace(/\.json$/, '');
        log(`${request.method} ${path}`);
        switch (request.method) {
            case 'GET':
                handleReadRequest(request, response, path);
                break;
            case 'PUT':
                handleWriteRequest(request, response, path, 'set');
                break;
            case 'PATCH':
                handleWriteRequest(request, response, path, 'update');
                break;
            case 'DELETE':
                handleDeleteRequest(request, response, path);
                break;
            default:
                response.writeHead(400);
                response.end();
        }
    });
    server.listen(port, address);
    return server;
}
exports.HttpServer = HttpServer;
//# sourceMappingURL=http-server.js.map