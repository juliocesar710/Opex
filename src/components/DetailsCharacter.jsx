import { useI18n } from "../i18n";


export default function DetailsCharacter({ character }) {

      const { t } = useI18n();


    return (
      <div className="p-6 max-w-4xl mx-auto text-ink font-serif">
        <h1 className="text-3xl font-bold mb-4 text-pirateRed uppercase">
          {character.name}
        </h1>

        {character.imageUrl && (
          <img
            src={character.imageUrl}
            alt={character.name}
            className="w-full max-h-[400px] object-cover rounded-xl border-4 border-pirateGold mb-4"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-character.jpg";
            }}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-parchment p-4 rounded-lg border-2 border-pirateGold">
            <h2 className="text-xl font-bold mb-3 text-pirateRed">
              {t("detailsCharacter.basicInfo") || "Informações Básicas"}
            </h2>

            <p className="mb-2">
              <span className="font-semibold">{t("character.bounty")}:</span> ฿
              {character.bounty.toLocaleString("en-US")}
            </p>

            <p className="mb-2">
              <span className="font-semibold">{t("character.crew")}:</span>{" "}
              {character.crew}
            </p>

            <p className="mb-2">
              <span className="font-semibold">{t("role")}:</span>{" "}
              {character.role}
            </p>

            <p className="mb-2">
              <span className="font-semibold">
                {t("detailsCharacter.status")}:
              </span>{" "}
              {character.status}
            </p>
          </div>

          <div className="bg-parchment p-4 rounded-lg border-2 border-pirateGold">
            {character.fruit && (
              <p className="mb-2">
                <span className="font-semibold">
                  {t("detailsCharacter.fruit")}:
                </span>{" "}
                {character.fruit}
              </p>
            )}

            <p className="mb-2">
              <span className="font-semibold">
                {t("detailsCharacter.origin")}:
              </span>{" "}
              {character.origin}
            </p>
          </div>
        </div>
      </div>
    );
}