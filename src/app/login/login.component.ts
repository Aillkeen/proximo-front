import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  private email:string;
  private pass:number;

  constructor(
    private router:Router) { }

  OnSubmit(){
    if(this.email === "admin@admin.com" && this.pass==1234){
      console.log('entrou')
      this.router.navigate(['cadastro'])
    }

  }


}
