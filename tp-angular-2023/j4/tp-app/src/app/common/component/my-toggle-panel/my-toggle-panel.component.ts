import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-toggle-panel',
  templateUrl: './my-toggle-panel.component.html',
  styleUrls: ['./my-toggle-panel.component.scss']
})
export class MyTogglePanelComponent {

  toggleP /* : boolean */ =false;

  @Input()
  title /* : string */ = 'default panel title';

  constructor() { }

}
