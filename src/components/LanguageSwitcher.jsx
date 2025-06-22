import { useI18n } from '../i18n'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css' // Estilo base
import 'tippy.js/animations/shift-away.css' // Animação suave
import 'tippy.js/themes/light.css' // Tema customizável

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en-US' : 'pt-BR')
  }

  const nextLang = language === 'pt-BR' ? 'en-US' : 'pt-BR'
  const tooltipContent = language === 'pt-BR' ? 'Mudar para inglês' : 'Switch to Portuguese'

  return (
    <Tippy
      content={tooltipContent}
      delay={[300, 0]} // 300ms para aparecer, 0ms para desaparecer
      animation="shift-away"
      theme="light"
      arrow={true}
      placement="top"
      duration={200}
      offset={[0, 10]} // Ajuste fino da posição
    >
      <button
        onClick={toggleLanguage}
        className="text-sm bg-yellow-400 hover:bg-yellow-300 text-black px-3 py-1 rounded transition font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
      >
        {nextLang === 'pt-BR' ? 'PT' : 'EN'}
      </button>
    </Tippy>
  )
}