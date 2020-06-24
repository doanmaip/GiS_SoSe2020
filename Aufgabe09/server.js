"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe09 = void 0;
const Http = require("http");
const Url = require("url");
var Aufgabe09;
(function (Aufgabe09) {
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
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let path = url.pathname;
            if (path == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (path == "/json") {
                let jsonString = JSON.stringify(url.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(Aufgabe09 = exports.Aufgabe09 || (exports.Aufgabe09 = {}));
//# sourceMappingURL=server.js.map