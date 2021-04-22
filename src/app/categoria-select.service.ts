import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CategoriaSelectService {

  categoriaSelect: string='';
  nombreCategoria: string='';

  constructor() { }
}
