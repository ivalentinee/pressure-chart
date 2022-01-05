import * as http from "http";
import * as fs from "fs/promises";
import * as values from "./src/values.js";

const host = '0.0.0.0';
const port = 8000;
const valueGenerator = values.generator();

const serve404 = function(response) {
  response.setHeader("Content-Type", "text/plain");
  response.writeHead(200);
  response.end("Not found");
};

const serveIndex = function(response) {
  fs.readFile("./build/index.html")
    .then(contents => {
      response.setHeader("Content-Type", "text/html");
      response.writeHead(200);
      response.end(contents);
    })
    .catch(error => {
      response.writeHead(500);
      response.end("Error: no index.html");
      return;
    });
};

const serveData = function(response) {
  const { value } = valueGenerator.next();
  response.setHeader("Content-Type", "application/json");
  response.writeHead(200);
  response.end(JSON.stringify(value));
};

const requestListener = function (request, response) {
  const { method, url } = request;
  console.log(method, url);

  if (method == "GET" && url == "/") {
    serveIndex(response);
    return;
  };

  if (method == "GET" && url == "/data") {
    serveData(response);
    return;
  };

  serve404(response);
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
