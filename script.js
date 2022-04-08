const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
  const requestUrl = url.parse(request.url).pathname;

  if (requestUrl === "/") {
    fs.readFile("./iniJson.json", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not Found");
      } else {
        response.writeHead(200, { "Content-Type": "application/json" });
        response.write(data);
      }
      response.end();
    });
  } else if (requestUrl === "/halaman-lain") {
    fs.readFile("./index.html", null, (error, data) => {
      if (error) {
        response.writeHead(404);
        response.write("Not FOund");
      } else {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(data);
      }
      response.end();
    });
  }
});

server.listen(8080);
