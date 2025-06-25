import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCharacterById } from "../api/character.js";
import { useI18n } from "../i18n";
import Header from "../components/Header";
import DetailsCharacter from "../components/DetailsCharacter.jsx";

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);
  const { t } = useI18n();

  useEffect(() => {
    fetchCharacterById(id)
      .then(setCharacter)
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!character)
    return <p className="p-6">{t("loading") || "Carregando..."}</p>;

  return (
    <>
      <Header />
      <DetailsCharacter character={character}/>
      
    </>
  );
}
