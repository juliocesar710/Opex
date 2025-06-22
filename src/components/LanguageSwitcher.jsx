import { useI18n } from '../i18n'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR')
  }

  const nextLang = language === 'pt-BR' ? 'en-US' : 'pt-BR'
  const title = language === 'pt-BR' ? 'Mudar para inglês' : 'Switch to Portuguese'

  return (
    <button
      onClick={toggleLanguage}
      title={title}
      className="text-sm bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-1 rounded transition font-medium"
    >
      {nextLang === 'pt-BR' ? 'PT' : 'EN'}
    </button>
  )
}
