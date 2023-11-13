import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from "./routes/userRoutes.js"
import sunnaRoutes from "./routes/sunnaRoutes.js"
import { errorHandler, notFound } from "./middleware/errorMiddleware.js"
import path from "path"

dotenv.config();
connectDB();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRoutes)
app.use("/api/sunna", sunnaRoutes)


// Deploying
const __dirname = path.resolve()

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', "build", "index.html"))
    })
} else {
    app.get("/", (req, res) => {
        res.send('Api is running...')
    })
}

app.use(errorHandler)
app.use(notFound)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});