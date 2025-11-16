import { useEffect, useState } from "react";
import { API_URL } from "../services/api";

export default function TeamsList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/teams`)
      .then(res => res.json())
      .then(data => setTeams(data))
      .catch(err => console.error("Erro ao carregar equipes:", err));
  }, []);

  return (
    <div>
      <h1>Lista de Equipes</h1>
      <ul>
        {teams.length === 0 && <p>Nenhuma equipe encontrada.</p>}

        {teams.map(team => (
          <li key={team.id}>{team.name}</li>
        ))}
      </ul>
    </div>
  );
}
