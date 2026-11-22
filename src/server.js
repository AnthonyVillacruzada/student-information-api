import express from 'express';
import studentRoutes from './routes/studentRoutes.js';
const app = express();
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use(express.json());
app.use('/students', studentRoutes);
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found',
    });
});
app.listen(4000, () => {
    console.log(`Server is running on my http://localhost:4000`);
});
