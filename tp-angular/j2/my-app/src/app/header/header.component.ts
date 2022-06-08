import { Component, Input, OnInit } from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  titre :string = "titre par defaut"

  constructor(public preferencesService : PreferencesService) {
    //injection de dépendance par constructeur
   }

   
  ngOnInit(): void {
  }

//partie "menu déroulant basé sur bootstrap et le module bs-util"

   //<bsu-nav-bar  [menuDefs]="myMenuDefs"></bsu-nav-bar> coté .html
  myMenuDefs : MenuDefinition[] = [
    { label : "basic" , path : "/ngr-basic" } , 
    { label : "welcome" , path : "/ngr-welcome" } ,
    { label : "autres" , 
      children : [
        { label : "login" , path : "/ngr-login" } ,
        { divider : true },
        { label : "demo" , path : "/ngr-demo" },
        { label : "devise (crud)" , path : "/ngr-devise" }
      ]
    }
    ];


}
