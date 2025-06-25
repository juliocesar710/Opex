import { useState } from "react";
import { fetchCharactersByFilters } from "../api/character";
import CharacterCard from "./CharacterCard";
import debounce from "lodash.debounce";
import { useI18n } from "../i18n";

export default function PirateFilter() {
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    crew: "",
    minBounty: "",
    maxBounty: "",
    origin: "",
    fruit: "",
    role: "",
    status: "",
  });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useI18n();

  const debouncedFilter = debounce(async (filters) => {
    setLoading(true);
    setError("");
    try {
      const characters = await fetchCharactersByFilters(filters);
      setResults(characters);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, 500);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Aplica filtro automaticamente quando os filtros estão visíveis
    if (showFilters) {
      debouncedFilter({ ...filters, [name]: value });
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
    if (!showFilters && Object.values(filters).some((val) => val !== "")) {
      debouncedFilter(filters);
    }
  };

  const resetFilters = () => {
    setFilters({
      name: "",
      crew: "",
      minBounty: "",
      maxBounty: "",
      origin: "",
      fruit: "",
      role: "",
      status: "",
    });
    setResults([]);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6">
      {/* Botão principal estilo One Piece */}
      <button
        onClick={toggleFilters}
        className="w-full md:w-auto mb-6 px-8 py-3 bg-[#a12c2f] text-[#f3e5ab] text-xl font-wanted tracking-wider rounded-lg border-4 border-[#af895c] shadow-lg hover:bg-[#8d1f22] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
      >
        <span className="text-2xl">☠️</span>
        {showFilters ? t("filters.hiden") : t("filters.show")}
        <span className="text-2xl">🏴‍☠️</span>
      </button>

      {/* Container de filtros com animação */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          showFilters ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#fdf3d8] p-6 rounded-lg border-4 border-[#af895c] shadow-md mb-6 relative">
          {/* Efeito de papel envelhecido */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-20 rounded pointer-events-none"></div>

          {/* Marcas de prego nos cantos */}
          <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-[#af895c]"></div>
          <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#af895c]"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-[#af895c]"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-[#af895c]"></div>

          <h2 className="text-2xl font-wanted text-center text-[#5c3c1c] mb-6 border-b-2 border-[#af895c] pb-2">
            {t("filters.wanted")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 relative z-10">
            {/* Inputs personalizados */}
            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t("character.name")}
              </label>
              <input
                type="text"
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                placeholder="Ex: Monkey D. Luffy"
              />
            </div>

            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t("character.crew")}
              </label>
              <input
                type="text"
                name="crew"
                value={filters.crew}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                placeholder="Ex: Chapéus de Palha"
              />
            </div>

            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t("character.bounty")} MÍN
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-[#5c3c1c] font-bold">
                  ฿
                </span>
                <input
                  type="number"
                  name="minBounty"
                  value={filters.minBounty}
                  onChange={handleFilterChange}
                  className="w-full pl-8 pr-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                  placeholder="Ex: 1000000"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t("character.bounty")} MÁX
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-[#5c3c1c] font-bold">
                  ฿
                </span>
                <input
                  type="number"
                  name="maxBounty"
                  value={filters.maxBounty}
                  onChange={handleFilterChange}
                  className="w-full pl-8 pr-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                  placeholder="Ex: 500000000"
                />
              </div>
            </div>

            {/* Outros inputs no mesmo estilo... */}
            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t("detailsCharacter.origin")}
              </label>
              <input
                type="text"
                name="origin"
                value={filters.origin}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                placeholder="Ex: East Blue"
              />
            </div>

            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t("detailsCharacter.fruit")}
              </label>
              <input
                type="text"
                name="fruit"
                value={filters.fruit}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                placeholder="Ex: Gomu Gomu no Mi"
              />
            </div>

            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t('detailsCharacter.role')}
              </label>
              <input
                type="text"
                name="role"
                value={filters.role}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] placeholder-[#8d6a43] font-wanted"
                placeholder="Ex: Capitão"
              />
            </div>

            <div>
              <label className="block text-sm font-wanted font-bold text-[#5c3c1c] mb-1">
                {t('detailsCharacter.status')}
              </label>
              <select
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="w-full px-3 py-2 border-2 border-[#af895c] rounded bg-[#f3e5ab] text-[#5c3c1c] font-wanted"
              >
                <option value="">{t('commom.all')}</option>
                <option value="Vivo">{t('commom.alive')}</option>
                <option value="Morto">{t('commom.dead')}</option>
                <option value="Desaparecido">{t('commom.unknown')}</option>
              </select>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {/* <button
              onClick={() => debouncedFilter(filters)}
              className="px-6 py-2 bg-[#a12c2f] text-[#f3e5ab] font-wanted rounded border-2 border-[#8d1f22] hover:bg-[#8d1f22] hover:scale-105 transition-all"
            >
              APLICAR FILTROS
            </button> */}

            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-[#af895c] text-[#3e2c1c] font-wanted rounded border-2 border-[#8d6a43] hover:bg-[#8d6a43] hover:scale-105 transition-all"
            >
             {t('filters.clean')}
            </button>

            <button
              onClick={toggleFilters}
              className="px-6 py-2 bg-[#3e2c1c] text-[#f3e5ab] font-wanted rounded border-2 border-[#2c1e12] hover:bg-[#2c1e12] hover:scale-105 transition-all"
            >
              {t('filters.hiden')}
            </button>
          </div>
        </div>
      </div>

      {/* Resultados */}
      {loading && (
        <div className="text-center py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#af895c]"></div>
          <p className="mt-2 font-wanted text-[#5c3c1c]">
            {t('filters.loading')}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-[#a12c2f] text-[#f3e5ab] p-4 rounded-lg text-center font-wanted">
          {error}
        </div>
      )}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
        {results.map((char) => (
          <CharacterCard key={char.id} {...char} />
        ))}
      </div>

      {!loading && results.length === 0 && showFilters && (
        <div className="text-center p-6 bg-[#fdf3d8] border-2 border-[#af895c] rounded-lg">
          <p className="font-wanted text-xl text-[#5c3c1c]">
            {t('filters.nothing')}
          </p>
          <p className="text-[#8d6a43]">{t('filters.adjuste')}</p>
        </div>
      )}
    </div>
  );
}
