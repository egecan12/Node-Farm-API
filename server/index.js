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
  const pathName = url.parse(req.url, true).pathname;
  const queryObject = url.parse(req.url, true).query;

  if (pathName === "/overview" || pathName === "/") {
    res.end("this is the overview Page");
  } else if (pathName === "/product") {
    const id = queryObject.id;
    if (id) {
      const product = dataObject.find((item) => item.id === Number(id));
      if (product) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(product));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Product not found");
      }
    } else {
      // Handle requests without an id parameter
    }
  } else if (pathName === "/api") {
    // console.log(typeof data);
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
