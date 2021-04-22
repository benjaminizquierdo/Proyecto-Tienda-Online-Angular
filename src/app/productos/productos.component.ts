import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { ApiService} from '../api.service';
import {CategoriaSelectService} from '../categoria-select.service';
import{CarritoService} from '../carrito.service';
import {ProductosService} from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @ViewChild('sideNavigation') sideNavigation: ElementRef | undefined;
  @ViewChild('items') items: ElementRef | undefined;
  @ViewChild('total') total: ElementRef | undefined;
  @ViewChild('carrito') carrito: ElementRef | undefined;

  productos:any[]=[];
  Total: number=0;
  nomCategoria:string='';

  constructor( private api: ApiService,
    private CarritoCompra: CarritoService,
    public categoriaSelect: CategoriaSelectService,
    public nombreCategoria: CategoriaSelectService,
    private Element: Renderer2,
    private el: ElementRef,
    public Productos: ProductosService) { }

    

  ngOnInit(): void {
    this.getProductos();
    this.getProductosCategotia();
  }

  getProductos(){
    this.api.getProductos().subscribe((respuesta)=>{
      this.Productos.productos=respuesta;
    });
    
  }

  getProductosCategotia(){
      this.Productos.productos.forEach((item) =>{
        if(item.idCategoria==this.categoriaSelect.categoriaSelect){
          this.productos.push(item);
        }
      });
      this.nomCategoria=this.nombreCategoria.nombreCategoria;
  }

openNav(){

this.Element.addClass(this.sideNavigation?.nativeElement,'open');
this.Element.addClass(this.items?.nativeElement,'open2');

}

closeNav(){
  this.Element.removeClass(this.sideNavigation?.nativeElement,'open');
  this.Element.removeClass(this.items?.nativeElement,'open2');
}


anadirProducto(id:any){
    if(this.CarritoCompra.carritoCompra.length >0){
      this.Productos.productos.forEach((item)=>{
      const includ=this.CarritoCompra.carritoCompra.includes(item);
       if(includ==false && item.id==id){
          this.CarritoCompra.carritoCompra.push(item);
       }
      });
    }

    else{
      this.Productos.productos.forEach((item)=>{
        if(item.id==id){
      this.CarritoCompra.carritoCompra.push(item);
        }
      });
    }

this.renderizarCarrito(id);
this.openNav();
this.calcularTotal(id);
}


renderizarCarrito(id:any){
  // Vaciamos todo el html
  const carrito=this.Element.createText('');
  this.Element.appendChild(this.carrito?.nativeElement,carrito);
  // Generamos los Nodos a partir de carrito
  this.CarritoCompra.carritoCompra.forEach((item) => {

        if(item.id==id){
            const miNodo = this.Element.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2', 'liCarrito');
            //Creo un div para el texto
            const divTexto=this.Element.createElement('div');
            divTexto.classList.add('divTexto');
            divTexto.textContent = `${item.nombre} - ${item.precio}`;
            miNodo.appendChild(divTexto);
            // Mezclamos nodos
            this.Element.appendChild(this.carrito?.nativeElement,miNodo);
            }
    
      
  });


}
  
calcularTotal(id:any) {
  // Limpiamos precio anterior
  this.Total=0;
  // Recorremos el array del carrito
  this.CarritoCompra.carritoCompra.forEach((item) => {
      // De cada elemento obtenemos su precio
   
      this.Total = this.Total + parseInt(item.precio);
  });
  // Renderizamos el precio en el HTML
  this.Element.setProperty(this.total?.nativeElement,'innerHTML',this.Total+"€")
  //this.Element.createText(this.Total);
 // DOMtotal.textContent = total.toFixed(2);
}





}
