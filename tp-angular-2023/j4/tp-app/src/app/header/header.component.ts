import { Component, Input, OnInit } from '@angular/core';
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
    console.log("dans constructeur de HeaderComponent, titre="+this.titre);
   }

  //ngOnInit() de angular est l'equivalent de @PostConstruct de java
  ngOnInit(): void {
    console.log("dans ngOnInit() de HeaderComponent, titre="+this.titre);
  }


}
