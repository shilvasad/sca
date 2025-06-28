import express from "express";
import routes from "./routes/index.js";

const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Mount main routes
app.use("/", routes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("Server is running");
});

// Root endpoint with API docs link
app.get("/", (req, res) => {
  const { API_DOCS_URL, CLIENT_URL } = process.env;
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
        <p>Visit the documentation at our <a href="${CLIENT_URL}${API_DOCS_URL}">API Docs</a></p>
      </body>
    </html>`
  );
});

// Simple test endpoint
app.get("/test", (req, res) => {
  res.status(200).send("Hello World");
});

export default app;

