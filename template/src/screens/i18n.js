import i18next from 'i18next'
import { noop } from 'lodash'
import moment from 'moment'
import { initReactI18next } from 'react-i18next'
import { getLocales } from 'react-native-localize'
import en from '../assets/locales/en.json'
import it from '../assets/locales/it.json'
import 'moment/locale/it' // without this, moment.locale doesn't work

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

moment.locale(i18next.language)

export default i18next
