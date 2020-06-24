import * as Http from "http";
import * as Url from "url";


export namespace Aufgabe09 {

  console.log("Starting server");     //Konsolenausgabe "Starting server"
  let port: number = Number(process.env.PORT);    //Variable port + Zuweisung

  if (!port)
    port = 8100;             //Überprüfung port + Festlegung

  let server: Http.Server = Http.createServer();        //Erstellung einer Variable namens "server"

  server.addListener("request", handleRequest);      //Handler wird hinzugefügt
  server.addListener("listening", handleListen);      //server "hört" auf port
  server.listen(port);


  function handleListen(): void {
    console.log("Listening");       //Konsolenausgabe "Listening"
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let path: string | null = url.pathname;
      if (path == "//html") {
        for (let key in url.query) {
          _response.write(key + ": " + url.query[key] + "<br/>");
        }
      }
      else if (path == "//json") {
        let jsonString: string = JSON.stringify(url.query);
        _response.write(jsonString);
      }
      else if (path == "//A8") {
        _response.write(_request.url);      //URL wird ausgegeben
      }
    }
    _response.end();
  }
}