import { useEffect, useState, useMemo } from "react";
import { fetchCharactersByName } from "../api/character.js";
import CharacterCard from "./CharacterCard";
import debounce from "lodash.debounce";

export default function CharacterSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Função de busca com debounce (evita spam de chamadas)
  const debouncedSearch = useMemo(() =>
    debounce(async (value) => {
      if (!value) {
        setResults([]);
        return;
      }
      setLoading(true);
      setError("");
      try {
        const characters = await fetchCharactersByName(value);
        setResults(characters);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }, 500), // 500ms de atraso
  []);

  useEffect(() => {
    debouncedSearch(query);
    // Cleanup: cancela chamadas antigas quando desmontar/componente for atualizado
    return () => debouncedSearch.cancel();
  }, [query]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <input
        type="text"
        placeholder="Buscar personagem..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 border-2 border-pirateGold rounded-lg mb-6"
      />

      {loading && <p className="text-center">Carregando...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {results.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>
    </div>
  );
}
