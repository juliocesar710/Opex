import { useState, useEffect } from "react";
import { fetchAllCharacters } from "../api/character";
import CharacterCard from "./CharacterCard";

export default function CharacterGrid() {
  const [originalCharacters, setOriginalCharacters] = useState([]);
  const [displayedCharacters, setDisplayedCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await fetchAllCharacters();
        setOriginalCharacters(data);
        setDisplayedCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  useEffect(() => {
    if (sortOption === "default") {
      setDisplayedCharacters([...originalCharacters]);
      return;
    }

    const sortedCharacters = [...originalCharacters].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "bounty-asc":
          return (a.bounty || 0) - (b.bounty || 0);
        case "bounty-desc":
          return (b.bounty || 0) - (a.bounty || 0);
        case "crew-asc":
          return (a.crew || "").localeCompare(b.crew || "");
        case "crew-desc":
          return (b.crew || "").localeCompare(a.crew || "");
        default:
          return 0;
      }
    });

    setDisplayedCharacters(sortedCharacters);
  }, [sortOption, originalCharacters]);

  if (loading) return (
    <div className="text-center py-12">
      <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-pirateGold"></div>
      <p className="mt-4 font-wanted text-xl text-pirateRed">CARREGANDO CARTEIRA DE PROCURADOS...</p>
    </div>
  );

  if (error) return (
    <div className="bg-pirateRed text-parchment p-6 rounded-lg text-center font-wanted max-w-2xl mx-auto">
      <p className="text-2xl">☠️ ERRO NA CARTA MARITIMA ☠️</p>
      <p className="mt-2">{error}</p>
    </div>
  );

  return (
    <section className="bg-parchment py-10 px-4 md:px-8">
      {/* Componente de Ordenação Estilizado */}
      <div className="max-w-6xl mx-auto mb-8 bg-[#fdf3d8] p-4 rounded-lg border-4 border-pirateGold shadow-md relative">
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-pirateGold"></div>
        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-pirateGold"></div>
        
        <h2 className="text-xl font-wanted text-center text-pirateRed mb-4">ORDENAR PROCURADOS</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="px-4 py-2 bg-parchment border-2 border-pirateGold rounded font-wanted text-ink hover:bg-[#e6d1a9] transition-colors"
          >
            <option value="default">Padrão (Sem ordenação)</option>
            <option value="name-asc">Nome (A-Z)</option>
            <option value="name-desc">Nome (Z-A)</option>
            <option value="bounty-asc">Recompensa (Menor primeiro)</option>
            <option value="bounty-desc">Recompensa (Maior primeiro)</option>
            <option value="crew-asc">Tripulação (A-Z)</option>
            <option value="crew-desc">Tripulação (Z-A)</option>
          </select>
          
          <button
            onClick={() => setSortOption("default")}
            className="px-4 py-2 bg-pirateRed text-parchment font-wanted rounded border-2 border-[#8d1f22] hover:bg-[#8d1f22] transition-colors"
          >
            RESETAR ORDENAÇÃO
          </button>
        </div>
      </div>

      {/* Grid de personagens */}
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {displayedCharacters.map((char) => (
          <CharacterCard
            key={char.id}
            id={char.id}
            name={char.name}
            bounty={char.bounty}
            crew={char.crew}
            imageUrl={char.imageUrl}
          />
        ))}
      </div>

      {displayedCharacters.length === 0 && (
        <div className="text-center py-12 bg-[#fdf3d8] border-2 border-pirateGold rounded-lg">
          <p className="font-wanted text-xl text-pirateRed">NENHUM PROCURADO ENCONTRADO!</p>
        </div>
      )}
    </section>
  );
}