import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {

  }


  mensagem = ""
  userModel = new User()

  logarUsuario() {
    this.userService.signin(this.userModel).subscribe({
      next:(response) => {
        console.log(response);

        this.mensagem = "Login feito com sucesso"
      },
      error: (err) => {
        console.log(err);
        this.mensagem = err.error
      }
    } )
  }


  ngOnInit(): void {
  }

}
