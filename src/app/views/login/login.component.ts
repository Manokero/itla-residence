import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public email: string = '20175207';
  public password: string = '1234';


  constructor(private loginService: LoginService, private route: Router) {

  }

  ngOnInit() {
    if(localStorage.getItem('access_token')) {
      this.route.navigate(['/'])
    }
  }

  loginUser() {
    let data = {
      'username': this.email,
      'password': this.password
    }
    this.loginService.login(data).subscribe((result) => {
      if(result.success) {
        localStorage.setItem('access_token', JSON.stringify({'token': result.token}))
        localStorage.setItem('user', JSON.stringify({ 'id': result.user_id }))
        this.route.navigate(['/'])
      }
      console.log(result.message);
    }, (err) => {
      console.log(err);
    })
  }

}
