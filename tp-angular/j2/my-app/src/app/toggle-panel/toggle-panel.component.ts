import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.scss']
})
export class TogglePanelComponent implements OnInit {

  toggleP /* : boolean */ =false;
  
  @Input()
  title /* : string */ = 'default panel title';

  constructor() { 
    console.log("dans constructor , title= " + this.title);
  }

  //proche du @PostConstruct de java
  ngOnInit(): void {
    console.log("dans ngOnInit , title= " + this.title);
    //on peut ici (si besoin) , aller chercher des infos en fonction du title
  }

}
