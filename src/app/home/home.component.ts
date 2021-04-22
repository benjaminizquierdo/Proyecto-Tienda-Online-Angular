import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service';
import {Router} from '@angular/router';
import {CategoriaSelectService} from '../categoria-select.service';
import {CarritoService} from '../carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private api: ApiService,
    private router: Router,
    public categoriaSelect: CategoriaSelectService,
    public nombreCategoria: CategoriaSelectService,
    public CarritoCompra: CarritoService) { }

  categorias: any[] = [];
  ngOnInit(): void {
    this.getCategorias();
  }


  getCategorias(){
    this.api.getCategorias().subscribe((respuesta)=>{
      this.categorias=respuesta;

    });
  }

  verProducto(id:any,Denominacion:any){
    this.router.navigate(['/Productos']);
    this.categoriaSelect.categoriaSelect=id;
    this.nombreCategoria.nombreCategoria=Denominacion;
    alert(this.categoriaSelect.categoriaSelect);
  }





}
