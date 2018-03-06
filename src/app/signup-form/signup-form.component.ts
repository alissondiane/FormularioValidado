import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from './../User';
 

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  //Property for the gender
  private gender: string[];
  //Property for the user
  private user:User;
  constructor() { }

  ngOnInit() {
    this.gender =  ['Male', 'Female', 'Others'];
    //Create a new user object
    this.user = new User({
        email:"", password: { pwd: "" , confirm_pwd: ""}, 
        gender: this.gender[0], terms: false});
  }
  public onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
}

}
