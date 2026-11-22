import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();

// Log every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());

// Health‑check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Student API is running' });
});

// API routes
app.use('/students', studentRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
