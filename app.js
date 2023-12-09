const dotenv = require("dotenv");
dotenv.config({path:"./utils/.env"})
const express = require('express')
const app = express()
const cors = require('cors')
require("./utils/db")
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors("*"));


//routes
const userRoute = require("./routes/User")

// app.use("/",indexRouter)
app.use("/user", userRoute);




app.listen(PORT, () =>
  console.log(`Server Running on Port:${PORT}`)
)
