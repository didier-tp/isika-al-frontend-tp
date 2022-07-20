npm install bootstrap --save
npm install -s @fortawesome/fontawesome-free
npm install ngx-bootstrap --save --force

après git clone ou git pull , npm install --force
NB: --force uniquement nécessaire pour que ngx-bootstrap 8 puisse fonctionner avec angular 14

======================
pour onglets en version material:

npm install -s @angular/material 
ou mieux encore
ng add @angular/material 
depuis le répertoire my-app et verifier package.json

ajouter si besoin dans partie styles: [] de angular.json
"./node_modules/@angular/material/prebuilt-themes/indigo-pink.css",

on ajoute dans src/app/app.module.ts
import {MatTabsModule} from '@angular/material/tabs';
et
imports: [
   ...,
    MatTabsModule,
     ],...

et dans basic.component.html
<mat-tab-group>
    <mat-tab label="calculatrice">
       <app-calculatrice></app-calculatrice>
   </mat-tab>
   <mat-tab label="calcul tva">
       <app-tva></app-tva>
    </mat-tab>
</mat-tab-group>

