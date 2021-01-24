"use strict"

const {moduleInterop} = require("@textlint/module-interop");
const jaTechRules = moduleInterop(require("textlint-rule-preset-ja-technical-writing")).rules;

module.exports = {
    rules: {
        "no-mix-dearu-desumasu": jaTechRules["no-mix-dearu-desumasu"],
        "ja-no-mixed-period": jaTechRules["ja-no-mixed-period"]
    },
    rulesConfig: {
        // # 「である調」に統一します
        // https://github.com/azu/textlint-rule-no-mix-dearu-desumasu
        "no-mix-dearu-desumasu": {
            "preferInHeader": "である",
            "preferInBody": "である",
            "preferInList": "である",
            "strict": true
        },
        // # 文末の句点記号として「．」を使います
        // https://github.com/textlint-ja/textlint-rule-ja-no-mixed-period
        "ja-no-mixed-period": {
            "periodMark": "．"
        }
        // 次に開発する自分へ．jaTechRulesを全部Trueにしないとだめ．デフォルトではオフっぽい
    }
};