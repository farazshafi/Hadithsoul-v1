import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js"
import sunnaRoutes from "./routes/sunnaRoutes.js"

dotenv.config();
connectDB();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes)
app.use("/api/sunna", sunnaRoutes)

app.get('/', (req, res) => {
    res.send('Api is running..');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});