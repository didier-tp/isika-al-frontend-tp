ng add @angular/material
et ajouter dans app/app.module.tabs
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
et
 imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],

  et en ajoutant
  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css"
  dans angular.json