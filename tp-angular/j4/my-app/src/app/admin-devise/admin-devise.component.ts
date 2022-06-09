import { Component, OnInit } from '@angular/core';
import { DeviseService } from '../common/service/devise.service';
import { messageFromError } from '../common/util/util';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.scss']
})
export class AdminDeviseComponent implements OnInit {

  codeDevise! : string;
  message : string = "";

  constructor(private _deviseService : DeviseService) { 
  }
  
  onSupprimer(){
  
    this._deviseService.deleteDeviseServerSide$(this.codeDevise)
    .subscribe({
      next: ()=>{this.message="ok"; } ,
      error: (error) => { this.message = messageFromError(error); }
      });
   
  }

  ngOnInit(): void {
  }

}
