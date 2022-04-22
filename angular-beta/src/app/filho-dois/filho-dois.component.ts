import { Component } from '@angular/core';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-filho-dois',
  templateUrl: './filho-dois.component.html',
  styleUrls: ['./filho-dois.component.css'],
  providers:[]
})
export class FilhoDoisComponent{
  valorCompartilhado;

  constructor(private sharedService:CompartilhamentoService){
   this.valorCompartilhado = sharedService.obterValorCompartilhado();
   console.log('Componente filhodois ' + this.valorCompartilhado.toString());
   }
  }
  
 
