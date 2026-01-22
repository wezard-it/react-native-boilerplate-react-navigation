import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'
import { setDefaultOptions } from 'date-fns'
import { it, enUS } from 'date-fns/locale'
import en from '../assets/locales/en.json'
import it from '../assets/locales/it.json'

// Simple noop function
const noop = () => {}

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback) => {
    const language = getLocales()[0].languageCode
    callback(language)
  },
  init: noop,
  cacheUserLanguage: noop,
}

i18next.use(languageDetector).use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en',
  debug: true,
  resources: { en, it },
})

// Set date-fns locale based on i18n language
const dateFnsLocales = {
  it,
  en: enUS,
}

setDefaultOptions({
  locale: dateFnsLocales[i18next.language] || enUS,
})

export default i18next
