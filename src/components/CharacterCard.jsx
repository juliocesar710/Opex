import { useI18n } from '../i18n'

export default function CharacterCard({ name, bounty, crew }) {
    const { t } = useI18n()

  return (
    <div className="bg-parchment text-ink border-4 border-pirateGold rounded-xl p-5 font-serif shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300">
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
  );
}
