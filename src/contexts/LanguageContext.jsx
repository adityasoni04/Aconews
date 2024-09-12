import React, { createContext, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}