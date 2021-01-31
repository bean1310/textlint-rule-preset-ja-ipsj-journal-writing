"use strict"

const {moduleInterop} = require("@textlint/module-interop");
const jaTechRules = moduleInterop(require("textlint-rule-preset-ja-technical-writing")).rules;

module.exports = {
    rules: {
        "no-mix-dearu-desumasu": jaTechRules["no-mix-dearu-desumasu"],
        "ja-no-mixed-period": jaTechRules["ja-no-mixed-period"],
        "arabic-kanji-numbers": jaTechRules["arabic-kanji-numbers"],
        "no-double-negative-ja": jaTechRules["no-double-negative-ja"],
        "no-dropping-the-ra": jaTechRules["no-dropping-the-ra"],
        "no-doubled-conjunction": jaTechRules["no-doubled-conjunction"],
        "no-doubled-josh": jaTechRules["no-doubled-joshi"],
        "no-nfd": jaTechRules["no-nfd"],
        "no-hankaku-kana": jaTechRules["no-hankaku-kana"],
        "ja-no-weak-phrase": jaTechRules["ja-no-weak-phrase"],
        "ja-no-successive-word": jaTechRules["ja-no-successive-word"],
        "ja-no-abusage": jaTechRules["ja-no-abusage"],
        "ja-no-redundant-expression": jaTechRules["ja-no-redundant-expression"],
        "ja-unnatural-alphabet": jaTechRules["ja-unnatural-alphabet"],
        "no-unmatched-pair": jaTechRules["no-unmatched-pair"],
        "no-exclamation-question-mark": jaTechRules["no-exclamation-question-mark"],
        "ja-use-comma-instead-of-touten": moduleInterop(require("textlint-rule-ja-use-comma-instead-of-touten"))
    },
    rulesConfig: {
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        "no-mix-dearu-desumasu": {
            "preferInHeader": "である",
            "preferInBody": "である",
            "preferInList": "である",
            "strict": true
        },
        // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
        "ja-no-mixed-period": {
            "periodMark": "．"
        },
        // https://github.com/azu/textlint-rule-preset-JTF-style
        "arabic-kanji-numbers": true,
        // https://github.com/azu/textlint-rule-no-double-negative-ja
        "no-double-negative-ja": true,
        // https://github.com/azu/textlint-rule-no-dropping-the-ra
        "no-dropping-the-ra": true,
        // https://github.com/takahashim/textlint-rule-no-doubled-conjunction
        "no-doubled-conjunction": true,
        // https://github.com/textlint-ja/textlint-rule-no-doubled-joshi
        "no-doubled-joshi": true,
        // https://github.com/azu/textlint-rule-no-nfd
        "no-nfd": true,
        // https://github.com/azu/textlint-rule-no-hankaku-kana
        "no-hankaku-kana": true,
        // https://github.com/textlint-ja/textlint-rule-ja-no-weak-phrase
        "ja-no-weak-phrase": true,
        // https://github.com/textlint-ja/textlint-rule-ja-no-successive-word
        "ja-no-successive-word": true,
        // https://github.com/textlint-ja/textlint-rule-ja-no-abusage
        "ja-no-abusage": true,
        // https://github.com/textlint-ja/textlint-rule-ja-no-redundant-expression
        "ja-no-redundant-expression": true,
        // https://github.com/textlint-ja/textlint-rule-ja-unnatural-alphabet
        "ja-unnatural-alphabet": true,
        // https://github.com/textlint-rule/textlint-rule-no-unmatched-pair
        "no-unmatched-pair": true,
        // https://github.com/textlint-rule/textlint-rule-no-exclamation-question-mark
        "no-exclamation-question-mark": true,
        // https://github.com/bean1310/textlint-rule-ja-use-comma-instead-of-touten
        "ja-use-comma-instead-of-touten": true
    }
};