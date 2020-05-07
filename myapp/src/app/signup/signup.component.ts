import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupModel } from '../signup.model';
import { AppService } from '../app.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public appService: AppService) {}


  onSubmitSignupForm(form: NgForm) {
    let signup: SignupModel =  {_id: null, email: null, password: null};

   // console.log(form.value.emailInput, form.value.passwordInput);
    signup._id=null;
    signup.email=form.value.emailInput;
    signup.password=form.value.passwordInput;

    console.log(signup);
    this.appService.signupUser(signup)
      .subscribe(result => {
        console.log(result);
      })
  }

}
