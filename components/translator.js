const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

let translationKeysUS = [];

Object.keys(americanOnly).forEach((key) => {
    translationKeysUS.push([key, americanOnly[key]])
});
Object.keys(americanToBritishSpelling).forEach((key) => {
    translationKeysUS.push([key, americanToBritishSpelling[key]])
});
Object.keys(americanToBritishTitles).forEach((key) => {
    translationKeysUS.push([key, americanToBritishTitles[key]])
});
Object.keys(britishOnly).forEach((key) => {
    translationKeysUS.push([britishOnly[key], key])
});

let translationKeysUK = [];

Object.keys(americanOnly).forEach((key) => {
    translationKeysUK.push([americanOnly[key], key])
});
Object.keys(americanToBritishSpelling).forEach((key) => {
    translationKeysUK.push([americanToBritishSpelling[key], key])
});
Object.keys(americanToBritishTitles).forEach((key) => {
    translationKeysUK.push([americanToBritishTitles[key], key])
});
Object.keys(britishOnly).forEach((key) => {
    translationKeysUK.push([key, britishOnly[key]])
});










class Translator {

    americanToBritish(text) {
        let textString = text

        if (textString) {
            let split = textString.split(" ")
            console.log(split);
            if (split[split.length-1].includes(".") || split[split.length-1].includes("!") || split[split.length-1].includes("?")){
                let clean = split[split.length-1].slice(0, split[split.length-1].length-1);
                split.splice(split.length - 1 , 1, clean);
            }
            let split2 = []
            if(split){
                let i = 0;
                while(i < (split.length - 1)){
                    split2.push(split[i] + " " + split[i + 1])
                    i++;
                    
                }
            }
            let split3 = [];
            if(split){
                let i = 0;
                while(i < (split.length - 2)){
                    split3.push(split[i] + " " + split[i + 1] + " " + split[i + 2])
                    i++;
                    
                }
            }
            
            split3.map((phrase) => {
                translationKeysUS.forEach((word) => {

                    if (phrase === word[0]) {
                       textString = textString.replace(phrase , '<span class="highlight">' + word[1] + '</span>')
                       textString = textString.replace(phrase.charAt(0).toUpperCase() + phrase.slice(1),
                       '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>'
                    )
                    }
                }) 
            })
            split2.map((phrase) => {
                translationKeysUS.forEach((word) => {

                    if (phrase === word[0]) {
                        textString = textString.replace(phrase , '<span class="highlight">' + word[1] + '</span>')
                        textString = textString.replace(phrase.charAt(0).toUpperCase() + phrase.slice(1),
                        '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>'
                     )
                    }
                }) 
            })
            split.map((phrase) => {
                translationKeysUS.forEach((word) => {
                    if (phrase === word[0]) {
                        textString = textString.replace(phrase , '<span class="highlight">' + word[1] + '</span>')
                        textString = textString.replace(phrase.charAt(0).toUpperCase() + phrase.slice(1),
                        '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>'
                     )
                    } else if (phrase.toLowerCase() === word[0]) {
                        textString = textString.replace(phrase , '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>')
                    }
                    
                }) 
            })
            
        }

        const timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9]))/g;
        let changeTime = textString.match(timeRegex);
        if (changeTime) {
            changeTime.forEach((time) => {
                textString = textString.replace(time, '<span class="highlight">' + time.replace(":", ".") + '</span>')
            })
        }

        return textString
    }

    britishToAmerican(text) {
        let textString = text

        if (textString) {
            let split = textString.split(" ")

            console.log(split);
            if (split[split.length-1].includes(".") || split[split.length-1].includes("!") || split[split.length-1].includes("?")){
                let clean = split[split.length-1].slice(0, split[split.length-1].length-1);
                split.splice(split.length - 1 , 1, clean);
            }
            let split2 = []
            if(split){
                let i = 0;
                while(i < (split.length - 1)){
                    split2.push(split[i] + " " + split[i + 1])
                    i++;
                    
                }
            }
            let split3 = [];
            if(split){
                let i = 0;
                while(i < (split.length - 2)){
                    split3.push(split[i] + " " + split[i + 1] + " " + split[i + 2])
                    i++;
                    
                }
            }
            
            split3.map((phrase) => {
                translationKeysUK.forEach((word) => {

                    if (phrase === word[0]) {
                       textString = textString.replace(phrase , '<span class="highlight">' + word[1] + '</span>')
                       textString = textString.replace(phrase.charAt(0).toUpperCase() + phrase.slice(1),
                       '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>'
                    )
                    }
                }) 
            })
            split2.map((phrase) => {
                translationKeysUK.forEach((word) => {

                    if (phrase === word[0]) {
                        textString = textString.replace(phrase , '<span class="highlight">' + word[1] + '</span>')
                        textString = textString.replace(phrase.charAt(0).toUpperCase() + phrase.slice(1),
                        '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>'
                     )
                    }
                }) 
            })
            split.map((phrase) => {
                translationKeysUK.forEach((word) => {
                    if (phrase === word[0]) {
                        textString = textString.replace(phrase , '<span class="highlight">' + word[1] + '</span>')
                        textString = textString.replace(phrase.charAt(0).toUpperCase() + phrase.slice(1),
                        '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>'
                     )
                    } else if (phrase.toLowerCase() === word[0]) {
                        textString = textString.replace(phrase , '<span class="highlight">' + word[1].charAt(0).toUpperCase() + word[1].slice(1) + '</span>')
                    }
                    
                }) 
            })
            
        }

        const timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9]))/g;
        let changeTime = textString.match(timeRegex);
        if (changeTime) {
            changeTime.forEach((time) => {
                textString = textString.replace(time, '<span class="highlight">' + time.replace(".", ":") + '</span>')
            })
        }
        return textString
    }
}

module.exports = Translator;