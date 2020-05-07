import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupModel } from './signup.model';
import { environment } from '../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({providedIn: "root"})
export class AppService {

//creating a constructor to connect to the server. import 'HttpClient' for this
constructor(public http: HttpClient) {}

getMessageFromServer(){
  return this.http.get(API_URL)
  }

postMessageOnServer(userName: string) {
  console.log("calling post from app service");
  return this.http.post<{message: string}>(API_URL + '/val', {message: userName})
  }

signupUser(signupInfo: SignupModel) {
  return this.http.post(API_URL + '/signup', {
    signupInfo: signupInfo
  });
}

usersList() {
  let users: any = [];
  return this.http.get(API_URL + '/users')
  }

deleteUser(email: string){
  console.log("invoking service to delete user: ", email);
  return this.http.delete(API_URL + '/users/' + email);
  }

}
