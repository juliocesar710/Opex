import { useI18n } from "../i18n";

export default function DetailsCharacter({ character }) {
  const { t } = useI18n();

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto font-wanted">
      {/* Cabeçalho estilo pôster de recompensa */}
      <div className="bg-pirateRed text-parchment p-4 rounded-t-lg border-4 border-pirateGold relative overflow-hidden mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center uppercase tracking-wider">
          {character.name}
        </h1>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#8d1f22]"></div>
        <div className="absolute top-0 left-0 right-0 h-4 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>
      </div>

      {/* Container principal com efeito de papel */}
      <div className="bg-parchment p-4 md:p-6 rounded-b-lg border-4 border-pirateGold shadow-lg relative">
        {/* Efeito de papel envelhecido */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] opacity-20 rounded pointer-events-none"></div>

        {character.imageUrl && (
          <div className="relative mb-6 overflow-hidden rounded-lg border-4 border-pirateGold group">
            <img
              src={character.imageUrl}
              alt={character.name}
              className="w-full max-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder-character.jpg";
              }}
            />
            {/* Efeito de vinheta na imagem */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_10px_rgba(0,0,0,0.3)] pointer-events-none"></div>
          </div>
        )}

        {/* Grid de informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
          {/* Seção de Informações Básicas */}
          <div className="bg-[#fdf3d8] p-4 rounded-lg border-3 border-pirateGold shadow-md">
            <div className="flex items-center mb-3 border-b-2 border-pirateGold pb-2">
              <span className="text-2xl text-pirateRed mr-2">{'{'}</span>
              <h2 className="text-xl font-bold text-pirateRed">
                {t("detailsCharacter.basicInfo") || "Informações Básicas"}
              </h2>
              <span className="text-2xl text-pirateRed ml-2">{'}'}</span>
            </div>

            <div className="space-y-3">
              <p className="flex flex-wrap">
                <span className="font-semibold text-pirateRed w-32">
                  {t("character.bounty")}:
                </span>
                <span className="text-lg font-bold">
                  ฿{character.bounty.toLocaleString("en-US")}
                </span>
              </p>

              <p className="flex flex-wrap">
                <span className="font-semibold text-pirateRed w-32">
                  {t("character.crew")}:
                </span>
                <span>{character.crew}</span>
              </p>

              <p className="flex flex-wrap">
                <span className="font-semibold text-pirateRed w-32">
                  {t("detailsCharacter.role")}:
                </span>
                <span>{character.role}</span>
              </p>

              <p className="flex flex-wrap">
                <span className="font-semibold text-pirateRed w-32">
                  {t("detailsCharacter.status")}:
                </span>
                <span>{character.status}</span>
              </p>
            </div>
          </div>

          {/* Seção de Habilidades/Origem */}
          <div className="bg-[#fdf3d8] p-4 rounded-lg border-3 border-pirateGold shadow-md">
            <div className="flex items-center mb-3 border-b-2 border-pirateGold pb-2">
              <span className="text-2xl text-pirateRed mr-2">{'{'}</span>
              <h2 className="text-xl font-bold text-pirateRed">
                {t("detailsCharacter.details") || "Habilidades"}
              </h2>
              <span className="text-2xl text-pirateRed ml-2">{'}'}</span>
            </div>

            <div className="space-y-3">
              {character.fruit && (
                <p className="flex flex-wrap">
                  <span className="font-semibold text-pirateRed w-32">
                    {t("detailsCharacter.fruit")}:
                  </span>
                  <span className="font-bold">{character.fruit}</span>
                </p>
              )}

              <p className="flex flex-wrap">
                <span className="font-semibold text-pirateRed w-32">
                  {t("detailsCharacter.origin")}:
                </span>
                <span>{character.origin}</span>
              </p>

              {/* Espaço para adicionar mais habilidades se necessário */}
              {character.abilities && (
                <div className="mt-4">
                  <h3 className="font-semibold text-pirateRed mb-2">
                    {t("detailsCharacter.skills")}:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {character.abilities.map((ability, index) => (
                      <li key={index}>{ability}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Selo dos Marines */}
        <div className="absolute bottom-4 right-4 w-14 h-14 bg-pirateRed rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-lg">
          MARINE
        </div>

        {/* Marcas de prego nos cantos */}
        <div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-pirateGold"></div>
        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-pirateGold"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 rounded-full bg-pirateGold"></div>
      </div>
    </div>
  );
}