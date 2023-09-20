import { Component} from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  user= {
  lastName : "Doe",
  firstName: "John",
  age : 25,
  quote : 'too hot to sleep',
  photo : 'https://randomuser.me/api/portraits/lego/2.jpg',  
  buttonText : "hide age"
  };

  isTextHidden: boolean = false;

  hideAge() {
      this.isTextHidden = !this.isTextHidden;
      if (this.user.buttonText === "hide age") {
        this.user.buttonText = "show age";
      } else if (this.user.buttonText === "show age") {
        this.user.buttonText = "hide age";
      }
    }
    
  
}

      
  
