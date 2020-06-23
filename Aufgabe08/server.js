"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
    console.log("Starting server"); //Konsolenausgabe "Starting server"
    let port = Number(process.env.PORT); //Variable port + Zuweisung
    if (!port)
        port = 8100; //Überprüfung port + Festlegung
    let server = Http.createServer(); //Erstellung einer Variable namens "server"
    server.addListener("request", handleRequest); //Handler wird hinzugefügt
    server.addListener("listening", handleListen); //server "hört" auf port
    server.listen(port);
    function handleListen() {
        console.log("Listening"); //Konsolenausgabe "Listening"
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); //Konsolenausgabe "I hear voices"
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url); // URL wird ausgegeben
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=server.js.map