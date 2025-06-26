import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());

app.use("/", routes);

app.get("/", (req, res) => {
  const API_DOCS_URL = process.env.API_DOCS_URL;
  const CLIENT_URL = process.env.CLIENT_URL;
  res.send(
    `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shahid Cadet Academy, Uttara</title>
      </head>
      <body>
        <h1>Welcome to Shahid Cadet Academy, Uttara.</h1>
        <h2>Server endpoint is open.</h2>
        <p>Visit the documentation at our <a href=${CLIENT_URL}${API_DOCS_URL}>API Docs</a></p>
      </body>
    </html>`
  );
});

export default app;

