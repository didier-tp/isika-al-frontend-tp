import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bases-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.scss']
})
export class TvaComponent implements OnInit {
  tabTaux :number[] = [ 5 , 10 , 20 ];
  
  ht /*:number*/ = 0;
  tauxTva /*:number*/ = 20; //en %
  tva /*:number*/ =0;
  ttc /*:number*/ =0;

  onCalculTvaTtc(){
    this.tva = this.ht * this.tauxTva / 100;
    this.ttc = this.ht + this.tva ;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
