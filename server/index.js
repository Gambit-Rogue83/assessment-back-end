const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/// DESTRUCTURE FUNCTION FROM CONTROLLER
const { getCompliment, getFortune, createGoal } = require('./controller')


////ENDPOINTS   /////
app.get("/api/compliment", getCompliment)
app.get('/api/fortune', getFortune)
app.post('/api/goals', createGoal)


////LISTEN   ////
app.listen(4000, () => console.log("Server running on 4000"));
