import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../../services/produit.service';

@Component({
  selector: 'bases-seuil',
  templateUrl: './seuil.component.html',
  styleUrls: ['./seuil.component.scss']
})
export class SeuilComponent implements OnInit {

  public seuilMax=100; //à saisir

  onSeuilChange(){
    this._produitService.changerSeuil(this.seuilMax);
  }

  constructor(private _produitService : ProduitService) { }

  ngOnInit(): void {
  }

}
