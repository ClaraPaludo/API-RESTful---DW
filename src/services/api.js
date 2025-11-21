import express from "express";
export const API_URL = "http://localhost:3000/api";

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
   res.send(`Ola pertile`);
})

app.listen(PORT, () => console.log(`O servidor esta rodando na porta ${PORT}`));