const express = require("express");
const path = require("path");
const http = require("http");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => console.log(`Server listening on:  http://localhost:${PORT}`));