import http from "node:http";

const port = 8000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.statusCode = 200;
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: "hello world" }));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "not found" }));
  }
});
server.listen(port, () => {
  console.log(`server runing on http://localhost:${port}`);
});