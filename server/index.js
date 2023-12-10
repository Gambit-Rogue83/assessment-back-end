const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/// DESTRUCTURE FUNCTION FROM CONTROLLER
const { getCompliment, getFortune, getCards, deleteCard, createCard } = require('./controller')


////ENDPOINTS   /////
app.get("/api/compliment", getCompliment)
app.get('/api/fortune', getFortune)
app.get('/api/cards', getCards)
app.delete('/api/cards/:id', deleteCard)
app.post('/api/cards', createCard)
// app.put('/api/cards/:id', updateMovie)


////LISTEN   ////
app.listen(4000, () => console.log("Server running on 4000"));
