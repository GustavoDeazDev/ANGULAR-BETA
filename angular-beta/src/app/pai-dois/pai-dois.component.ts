import { Component } from '@angular/core';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-pai-dois',
  templateUrl: './pai-dois.component.html',
  styleUrls: ['./pai-dois.component.css'],
  providers: [CompartilhamentoService]
})
export class PaiDoisComponent{
  valorCompartilhado;
   constructor(private sharedService:CompartilhamentoService){
   this.valorCompartilhado = sharedService.obterValorCompartilhado();
   console.log('Componente paidois ' + this.valorCompartilhado.toString());
   }
  }
