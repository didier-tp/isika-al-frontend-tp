import { Component, OnInit } from '@angular/core';
import { TvaService } from 'src/app/common/service/tva.service';

@Component({
  selector: 'app-tva-with-service',
  templateUrl: './tva-with-service.component.html',
  styleUrls: ['./tva-with-service.component.scss']
})
export class TvaWithServiceComponent implements OnInit {

  tabTaux :number[] = [ 5 , 10 , 20 ];
  
  ht /*:number*/ = 0;
  tauxTva /*:number*/ = 20; //en %
  tva /*:number*/ =0;
  ttc /*:number*/ =0;

  onCalculTvaTtc(){
    this.tva = this.tvaService.tva(this.ht,this.tauxTva);
    this.ttc = this.ht + this.tva ;
  }

  constructor(private  tvaService : TvaService) { }

  ngOnInit(): void {
  }


}
