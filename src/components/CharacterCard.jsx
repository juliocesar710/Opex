import { Link } from "react-router-dom";
import { useI18n } from "../i18n";

export default function CharacterCard({ id, name, bounty, crew, imageUrl }) {
  const { t } = useI18n();

  return (
    <Link to={`/character/${id}`}>
      <div className="bg-parchment text-ink border-4 border-pirateGold rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300 font-serif cursor-pointer">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover object-center border-b-4 border-pirateGold"
          />
        )}
        <div className="p-5">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-pirateRed mb-3">
            {name}
          </h2>
          <p className="mb-1">
            <span className="font-semibold">{t("character.bounty")}:</span> ฿
            {bounty.toLocaleString("en-US")}
          </p>
          <p>
            <span className="font-semibold">{t("character.crew")}:</span> {crew}
          </p>
        </div>
      </div>
    </Link>
  );
}
