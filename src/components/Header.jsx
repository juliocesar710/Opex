import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-yellow-300 transition"
        >
          {t("header.title")}
        </Link>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-yellow-300 transition">
            {t("header.home")}
          </Link>
          <Link to="/tripulacoes" className="hover:text-yellow-300 transition">
            {t("header.crews")}
          </Link>
          <Link to="/sobre" className="hover:text-yellow-300 transition">
            {t("header.about")}
          </Link>
          <LanguageSwitcher />
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-blue-800 px-4 pb-4 flex flex-col space-y-2">
          <Link
            to="/"
            onClick={toggleMenu}
            className="active:text-yellow-300 transition"
          >
            {t("header.home")}
          </Link>
          <Link
            to="/tripulacoes"
            onClick={toggleMenu}
            className="active:text-yellow-300 transition"
          >
            {t("header.crews")}
          </Link>
          <Link
            to="/sobre"
            onClick={toggleMenu}
            className="active:text-yellow-300 transition"
          >
            {t("header.about")}
          </Link>
          <LanguageSwitcher />
        </nav>
      )}
    </header>
  );
}
