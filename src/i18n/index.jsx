// src/i18n/index.js

import { createContext, useContext, useState } from 'react'
import { dictionaries } from './dictionaries'

const I18nContext = createContext()

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('pt-BR')

  const translate = (key) => {
    const parts = key.split('.')
    let result = dictionaries[language]

    for (const part of parts) {
      result = result?.[part]
      if (!result) return key // fallback: retorna a chave se não achar
    }

    return result
  }

  return (
    <I18nContext.Provider value={{ language, setLanguage, t: translate }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
