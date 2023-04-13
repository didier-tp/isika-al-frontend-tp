import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'toggle-panel',
  templateUrl: './toggle-panel.component.html',
  styleUrls: ['./toggle-panel.component.scss']
})
export class TogglePanelComponent implements OnInit {

  toggleP : boolean =false;

  @Input()
  title : string = 'default panel title';

  constructor() { }

  ngOnInit() {
  }

}

/*
exemple d'utilisation:

<bsu-toggle-panel [title]="'panel1'" >
		<app-part1></app-part1> ou ...
	</bsu-toggle-panel>
	  
	<bsu-toggle-panel [title]="'panel2'" >
		<div>contenu du paneau 2</div>
	</bsu-toggle-panel>

*/
