import * as Http from "http";

export namespace A08Server {

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
    console.log("I hear voices!");    //Konsolenausgabe "I hear voices"

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    _response.write(_request.url);      // URL wird ausgegeben

    _response.end();
  }
}