const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const { Translate } = require("@google-cloud/translate").v2;

const app = express();
const PORT = 5000;

app.use(cors());

const API_KEY = process.env.API_KEY_NINJAS;
const GOOGLE_API_KEY = process.env.API_KEY_TRADUTOR; 
const translate = new Translate({ key: GOOGLE_API_KEY });
console.log("Chave do Tradutor:", GOOGLE_API_KEY);

// Função para traduzir um texto usando a API do Google
async function traduzirTexto(texto) {
  try {
    let [traducao] = await translate.translate(texto, "pt");
    return traducao;
  } catch (error) {
    console.error("Erro ao traduzir:", error);
    return texto; // Retorna o original caso a tradução falhe
  }
}

app.get("/api/exercicios", async (req, res) => {
  try {
    const { musculo, tipo, dificuldade, nome } = req.query;

    let apiUrl = "https://api.api-ninjas.com/v1/exercises?";
    if (musculo) apiUrl += `muscle=${musculo}&`;
    if (tipo) apiUrl += `type=${tipo}&`;
    if (dificuldade) apiUrl += `difficulty=${dificuldade}&`;
    if (nome) apiUrl += `name=${nome}&`;

    const response = await axios.get(apiUrl, {
      headers: { "X-Api-Key": API_KEY },
    });

    // Traduzir os resultados antes de enviá-los para o frontend
    const exerciciosTraduzidos = await Promise.all(
      response.data.map(async (exercicio) => ({
        nome: await traduzirTexto(exercicio.name),
        musculo: await traduzirTexto(exercicio.muscle),
        tipo: await traduzirTexto(exercicio.type),
        dificuldade: await traduzirTexto(exercicio.difficulty),
        instrucoes: await traduzirTexto(exercicio.instructions),
      }))
    );

    res.json(exerciciosTraduzidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar exercícios." });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
