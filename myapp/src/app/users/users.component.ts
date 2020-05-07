import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';


export interface userModel {
  _id: string,
  email: string,
  password: string
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(public appService: AppService) {}

  //users: {_id: string, email: string, password: string}[] = [{_id: null, email: null, password: null}];
  @Input() public usersList: userModel[] = null


  ngOnInit() {
    this.appService.usersList()
    //.subscribe((res: any) => {
    .subscribe((res: {message: string, users: userModel[] }) => {
      console.log('in the app Service ',res);
      this.usersList=res.users;
      console.log(res.message, this.usersList);
    });
  }

  onDeleteUser(email: string) {
    console.log("sending id for deletion: ", email);
    this.appService.deleteUser(email)
      .subscribe((res) => {
        console.log(res);
        //writing the list function here again to refresh the userlist so that the deletion can be seen in UI
        //but this is not the effective way of coding
        this.appService.usersList()
        .subscribe((res: {message: string, users: userModel[] }) => {
          console.log('in the app Service ',res);
          this.usersList=res.users;
          console.log(res.message, this.usersList);
        });
      });
  }

}
