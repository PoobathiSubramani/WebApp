import { Component } from '@angular/core';
import { AppService } from './app.service'

export interface userModel {_id: string, email: string, password: string}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  constructor(public appService: AppService) {}
  private tabs: Array<string> = ['Home', 'Signup', 'Login', 'Users']
  users: userModel[] = [] //[{_id: null, email: null, password: null}]
 // allUsers: userModel[] = []

  onSignup(singedupUser: userModel) {
    console.log("new user", singedupUser);
    console.log("before adding user", this.users)
    this.users.push(singedupUser);
    console.log("after adding user", this.users);
  }

  onTabSelection(i) {

    console.log(this.tabs[i]);
    if (this.tabs[i]==='Users') {
      this.appService.usersList()
      //.subscribe((res: any) => {
      .subscribe((res: {message: string, users: userModel[] }) => {
        console.log('in the app Service ',res);
        this.users = res.users
        console.log(res.message, res.users);
      });
    } else {
      return;
    }


  }

}
