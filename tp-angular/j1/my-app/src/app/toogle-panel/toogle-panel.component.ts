import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'toggle-panel',
  templateUrl: './toogle-panel.component.html',
  styleUrls: ['./toogle-panel.component.scss']
})
export class TooglePanelComponent implements OnInit {

  toggleP = false;

  @Input()
  title = "defaultTitle";

  constructor() { }

  ngOnInit(): void {
  }

}
