const express = require("express");
const app = express();
const ToDoRoute=require('./routes/ToDoRoute')
const BookRoutes = require('./routes/bookRoutes')

//env setup
require("dotenv").config();

//For Connecting with mongoDB database
const ConnectDB = require("./config/dataBase");
ConnectDB();

app.use(express.json());

//Demo Get API
app.get('/',(req,res)=>{
    res.send("Demo get API")
})

app.use('/api/todo',ToDoRoute);
app.use('/api/books',BookRoutes);

//Listen Should always be in last as it gives time for all middleware , routes , and models to get load
const PORT = process.env.PORT || 4321;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
