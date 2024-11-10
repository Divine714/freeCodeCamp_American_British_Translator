'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let { text, locale } = req.body
      let translation = '';

      if(text === "") {
        res.json({ error: "No text to translate" })
        return;
      }

      if(!text|| !locale) {
        res.json({ error: "Required field(s) missing" });
        return;
      }
      
      if (locale === "american-to-british") {
        translation = translator.americanToBritish(text);
      } else if (locale === "british-to-american") {
        translation = translator.britishToAmerican(text);
      } else {
        res.json({ error: 'Invalid value for locale field' });
        return;
      }

      if (translation === text) {
        res.json({ text: text, translation: "Everything looks good to me!" })
        return;
      }

      return res.json({ text: text, translation: translation })
    });
};
