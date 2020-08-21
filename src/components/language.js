import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

const languageName = {
  en: 'English',
  ko: '한국어',
  de: 'Deutsch',
}

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `red` : `pink`,
                margin: 10,
                fontSize: 13,
                textDecoration: `none`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language
