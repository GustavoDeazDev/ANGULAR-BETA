import { Injectable } from '@angular/core';

@Injectable(
  
)
export class CompartilhamentoService {
  valorCompartilhado:number;
 constructor(){
 console.log('SharedService foi inicializado!')
 this.valorCompartilhado = Math.round(Math.random()*100);
 console.log(this.valorCompartilhado);
 }
 public obterValorCompartilhado() {
 return this.valorCompartilhado;
 }
}


