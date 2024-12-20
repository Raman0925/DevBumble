const express = require("express");
const { PORT } = require("./config");
const app = express();
const db = require("../src/config/dbconfig");
const { userRoutes, authRoutes, requestRoutes,profileRoutes } = require("./routes/index");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/requests", requestRoutes);
app.use("/profile",profileRoutes)

const startServer = async () => {
  


  try {
    await db.connect(process.env.DB_URI); 
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
};

startServer();
