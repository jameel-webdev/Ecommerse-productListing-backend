import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import userRoutes from "./routes/userRoutes.js";
// DB CONNECTION
import connectDB from "./config/db.js";
const port = process.env.PORT || port;
// EXPRESS INITIATED
const app = express();
connectDB();
//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//ROUTES
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res
    .json(`E_COMMERSE MAIN SERVER ROUTE`)
    .send({ message: `E-comm Main route` });
});
//SERVER LISTENING ON PORT
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
