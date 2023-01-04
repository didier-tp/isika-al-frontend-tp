import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 's-toggle-panel',
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

<s-toggle-panel title="panel1" >
		<app-part1></app-part1> ou ...
	</s-toggle-panel>
	  
	<s-toggle-panel title="panel2" >
		<div>contenu du paneau 2</div>
	</s-toggle-panel>

*/
