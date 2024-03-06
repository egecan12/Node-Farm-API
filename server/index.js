const http = require("http");
const url = require("url");
const fs = require("fs");
const cors = require("cors"); // Import the cors middleware

const corsOptions = {
  origin: "http://localhost:3000", // Replace with the origin of your React app
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

const data = fs.readFileSync(
  `${__dirname}/dev-data/data.json`,
  "utf-8",
  (err, data) => {}
);
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  cors(corsOptions)(req, res, () => {});

  console.log(req.url);

  const pathName = req.url;

  if (pathName === "overview" || pathName === "/") {
    res.end("this is the overview Page");
  } else if (pathName === "products") {
    res.end("this is the products Page");
  } else if (pathName === "/api") {
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>Page is not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is listening on port 8000");
});
