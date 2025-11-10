const express = require("express");
const fs = require("fs");
const path = require("path");

const eventsRoutes = require("./routes/eventsRoutes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());

// Routes
app.use("/api/events", eventsRoutes);

// /api/info untuk discoverability
app.get("/api/info", (req, res) => {
  res.status(200).json({
    status: "success",
    service: "Events API",
    version: "1.0.0",
    description: "API sederhana untuk mengelola data events (UTS)",
    endpoints: {
      getAll: "GET /api/events",
      getById: "GET /api/events/:id",
      create: "POST /api/events",
      update: "PUT /api/events/:id",
      delete: "DELETE /api/events/:id",
      info: "GET /api/info",
    },
  });
});

// 404 handler for unknown routes (JSON)
app.use((req, res, next) => {
  res.status(404).json({ status: "fail", message: "Endpoint tidak ditemukan" });
});

// Centralized error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
