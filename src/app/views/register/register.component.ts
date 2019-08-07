import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html',
  providers: [LoginService]
})
export class RegisterComponent {

  public enrollment: string = '20175207';
  public fullName: string = 'Wildin Mota';
  public password: string = '1234';
  public confirmPasword: string = '1234';


  constructor(private loginService: LoginService,
              private route: Router
             ) { }

  registerUser() {
    if(this.password == this.confirmPasword) {
      let resident = {
        'fullname': this.fullName,
        'enrollment': this.enrollment,
        'password': this.password
      }
      this.loginService.register(resident).subscribe(data => {
        if (data.success) {
          this.route.navigate(['/login'])
        }
      },(err) => {
        console.log(err)
      })
    }

  }

}
