const fs = require('fs')
const path = require('path')

const basePath = path.join(__dirname, '..', 'src', 'assets', 'locales')
const filesPath = [
  path.join(basePath, 'it.json'),
  path.join(basePath, 'en.json'),
  // path.join(basePath, 'es.json'),
  // path.join(basePath, 'fr.json'),
  // path.join(basePath, 'de.json'),
]

filesPath.forEach(filePath => {
  const translations = require(filePath).translation

  let sortedTranslations = {}
  Object.keys(translations)
    .sort((a, b) => a.localeCompare(b))
    .forEach(key => {
      sortedTranslations[key] = translations[key]
    })

  sortedTranslations = {
    translation: sortedTranslations,
  }

  fs.writeFileSync(filePath, JSON.stringify(sortedTranslations, undefined, 2))
})
