// create folder server and inside it create file serve.js
// npm run build
// install express

const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));
app.listen(port);

// app.listen(port, () => {
//   console.log(`server is up on port ${port}`);
// });
