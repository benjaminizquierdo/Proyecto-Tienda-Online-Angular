import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string='';
  contrasena: string='';

  respuesta: boolean = false;
  mensaje:string='';
  constructor(private api: ApiService,
    private router: Router) { }

  ngOnInit(): void {
  }

  getUsuario(){
    this.respuesta=this.api.getUsuario(this.usuario,this.contrasena);
    if(this.respuesta==true){
      alert("correcto");
      this.router.navigate(['/Home']);
    }
    else{
      this.mensaje='Credenciales Incorrectas';
    }
   
  }

}
