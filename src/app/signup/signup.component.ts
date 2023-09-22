import { Component } from '@angular/core';
import { User } from 'src/models/User';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  model:User = new User ("", "", "", "");
  
  constructor(){    
  }

  onSubmit() : void {
    console.log(this.model);
  }
}
