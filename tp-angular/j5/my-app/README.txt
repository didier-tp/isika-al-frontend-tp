npm install bootstrap --save
npm install -s @fortawesome/fontawesome-free

old version:
npm install ngx-bootstrap --save --force

new version:
ng add @angular/material

après git clone ou git pull , npm install --force
NB: --force uniquement nécessaire pour que ngx-bootstrap 8 puisse fonctionner avec angular 14

---------------------
config importante dans app.module.ts:
  imports: [
    ...,
    FormsModule,
    HttpClientModule
  ],
---------------------
config importante dans angular.json:

près de la ligne 33:
 "styles": [
              "src/styles.scss",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "./node_modules/@fortawesome/fontawesome-free/css/all.min.css"
            ],

près de la ligne 75:
 "options": {
            "browserTarget": "my-app:build",
            "proxyConfig": "proxy.conf.json"
          },

============
NB: cette application angular est compatible avec le backend "backend-tp-api"
et également avec le backend "myNodeServerPromiseDao" (avec un léger micro-décalage sur le put devise.name/nom)          

===============
pour éviter conflit entre cypress et angular,
il faut ajouter ceci dans tsconfig.json:
    ,
    "exclude": [
      "cypress.config.ts",
      "cypress/**/*.ts"
    ]