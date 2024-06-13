// server.js
const express = require("express");
const app = express();
const apiRouter = require("./routes/authRoutes");

app.use(express.json());
app.use("/api", apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
