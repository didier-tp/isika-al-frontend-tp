import { Component, Input, OnInit } from '@angular/core';
import { PreferencesService } from '../../services/preferences.service';

@Component({
  selector: 'core-header',
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

}
