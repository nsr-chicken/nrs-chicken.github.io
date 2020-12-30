// require("dotenv").config();
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 2005;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev: false });
const handle = routes.getRequestHandler(app);

app.prepare().then((r) => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    handle(req, res, parsedUrl);
  }).listen(process.env.PORT || 2005, (err) => {
    if (err) {
      throw err;
    }
  });
});
