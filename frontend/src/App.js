import React, { useState } from "react";
import "./App.css"; // Importação do CSS

const traduzirParaIngles = {
  "Abdominais": "abdominals",
  "Abdutores": "abductors",
  "Adutores": "adductors",
  "Bíceps": "biceps",
  "Panturrilhas": "calves",
  "Peito": "chest",
  "Antebraços": "forearms",
  "Glúteos": "glutes",
  "Isquiotibiais": "hamstrings",
  "Dorsais": "lats",
  "Parte inferior das costas": "lower_back",
  "Parte média das costas": "middle_back",
  "Pescoço": "neck",
  "Quadríceps": "quadriceps",
  "Trapézio": "traps",
  "Tríceps": "triceps"
};

const tiposExercicio = {
  "Cardio": "cardio",
  "Levantamento Olímpico": "olympic_weightlifting",
  "Pliometria": "plyometrics",
  "Powerlifting": "powerlifting",
  "Força": "strength",
  "Alongamento": "stretching",
  "Strongman": "strongman"
};

const dificuldades = {
  "Iniciante": "beginner",
  "Intermediário": "intermediate",
  "Avançado": "expert"
};

const App = () => {
  const [musculo, setMusculo] = useState("");
  const [tipo, setTipo] = useState("");
  const [dificuldade, setDificuldade] = useState("");
  const [exercicios, setExercicios] = useState([]);

  const buscarExercicios = async () => {
    if (!musculo) return alert("Escolha um músculo!");

    const musculoIngles = traduzirParaIngles[musculo] || "";
    const tipoIngles = tiposExercicio[tipo] || "";
    const dificuldadeIngles = dificuldades[dificuldade] || "";

    let url = `http://localhost:5000/api/exercicios?musculo=${musculoIngles}`;
    if (tipoIngles) url += `&tipo=${tipoIngles}`;
    if (dificuldadeIngles) url += `&dificuldade=${dificuldadeIngles}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Verifique o formato dos dados recebidos da API

      // Verifique a estrutura dos dados antes de usá-los
      if (Array.isArray(data)) {
        setExercicios(data);
      } else {
        console.error("Os dados não estão no formato esperado:", data);
      }
    } catch (error) {
      console.error("Erro ao buscar exercícios:", error);
    }
  };

  return (
    <div className="container">
      <h1>Treino Diário 💪</h1>
      <div className="inputs">
        <select value={musculo} onChange={(e) => setMusculo(e.target.value)}>
          <option value="">Escolha um músculo</option>
          {Object.keys(traduzirParaIngles).map((musc) => (
            <option key={musc} value={musc}>{musc}</option>
          ))}
        </select>

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Escolha um tipo de exercício</option>
          {Object.keys(tiposExercicio).map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select value={dificuldade} onChange={(e) => setDificuldade(e.target.value)}>
          <option value="">Escolha a dificuldade</option>
          {Object.keys(dificuldades).map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <button onClick={buscarExercicios}>Buscar</button>
      </div>

      {exercicios.length > 0 && (
        <ul className="exercise-list">
          {exercicios.map((ex, index) => (
            <li key={index} className="exercise-item">
              <strong>{ex.nome}</strong> - {ex.tipo} ({ex.equipamento})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
