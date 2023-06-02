import { Component } from '@angular/core';
import { User } from '../common/data/user';
import { UserService } from '../common/service/user.service';
import { messageFromEx } from '../common/util/util';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  public user = new User(); //user to add or update
  public existingUser = false; //true if getUserByUsername succeed before PUT , false before POST
  public message :string ="" ;

  constructor(public userService : UserService){
  }

  public async onSave(){
    //this.message = "user = " + JSON.stringify(this.user);
    try{
      if(this.existingUser){
          this.user = await firstValueFrom(this.userService.putUser$(this.user));
          this.message = "existing user successfully update server side (PUT)";
      }
      else{
          this.user = await firstValueFrom(this.userService.postUser$(this.user));
          this.message = "new user successfully added server side (POST)";
          this.existingUser = true; //if post succeed , existingUser become true
      }
    }
    catch(ex){
      this.message = messageFromEx(ex,"echec saveUser (post or put)"); 
    }
  }

  public async onDelete(){
    try{
      if(this.existingUser){
          await firstValueFrom(this.userService.deleteUserServerSide$(this.user.username));
          this.message = "existing user successfully deleted server side";
          this.user = new User();
          this.existingUser = false; //if post succeed , existingUser become false
      }
    }
    catch(ex){
      this.message = messageFromEx(ex,"echec delete User"); 
    }
  }

  public async onFetchFromUsername(){
    try{
      let username=this.user.username;
      this.user = await firstValueFrom(this.userService.getUserByUsername$(username));
      this.existingUser = true;
      this.message = "existing user found, may be updated"
    }
    catch(ex){
      this.existingUser = false;
      this.user = new User(null,this.user.username,null,null,null,null,null);
      //this.message = messageFromEx(ex,"echec getUserByUsername (get)"); 
      console.log(messageFromEx(ex,"echec getUserByUsername (get)"));
      this.message="no existing user with this username";
    }
  }

}
