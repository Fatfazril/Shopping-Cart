require("dotenv").config();

const express = require("express");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => res.send("Shopping Cart API is running"));

// Start server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
