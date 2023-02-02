L'extension "Eslint" est disponible et conseillée dans Visual Studio code

npm init @eslint/config
--> interactives choices (js ot ts , ...)
et propose entre autres de déclencher automatiquement la commande utile suivante:

npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

Le fichier de configuration
.eslintrc.json (ou .js ou .yml) est créé (et rempli selon les choix effectués).

 "rules": {
        "no-unused-vars":"warn",
        "no-var" : "warn",
        "prefer-const":"warn",
        "@typescript-eslint/no-inferrable-types": "warn"
    }