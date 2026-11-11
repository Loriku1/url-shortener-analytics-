import express from "express";

const app = express();
const PORT = 3103;

app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "healthy",
    service: "analytics-service",
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Analytics Service running on port ${PORT}`);
});