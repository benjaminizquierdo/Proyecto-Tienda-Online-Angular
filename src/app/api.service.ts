import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
''


const URL='../assets/MOCSK/categorias.json';
const URL2='../assets/MOCSK/productos.json';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsuario(Usuario: string,Contrasena: string){
    if(Usuario!='' && Contrasena!=''){
      return true;
    }
    else{
      return false;
    }

  }

  getCategorias(): Observable<any>{
    return this.http.get(`${URL}`);
  }
  getProductos(): Observable<any>{
    return this.http.get(`${URL2}`);
  }

}
