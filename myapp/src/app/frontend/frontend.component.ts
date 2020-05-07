import { Component, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppComponent } from '../app.component'
import { AppService } from '../app.service' //importing the AppService


@Component({
  selector: "app-frontend",
  templateUrl: "./frontend.component.html",
  styleUrls: ["./frontend.component.css"]
})

export class FrontendComponent {

msg: string = '';
constructor(public appService: AppService) {} //constructor for invoking the server

  placeholderString = "Enter your name1";
  onSubmitName(form: NgForm) {
    console.log("Entered name is: ", form.value.userName);
    console.log("Entered age is: ", form.value.userAge);

  //this.appService.getMessageFromServer(); //calling the appserive to invoke the server

  this.appService.getMessageFromServer()
    .subscribe((response: {message: string}) => {
      console.log(response.message);
     this.msg = 'I am from GET ' + response.message;
    });


  }

  onSettingName(form: NgForm) {
    console.log('i am on setting fn');
    this.appService.postMessageOnServer(form.value.userName)
    .subscribe((res: {message: string}) => {
      this.msg = 'I am from POST ' + res.message;
      console.log("I am from POST", res.message);
    });
  }

}
