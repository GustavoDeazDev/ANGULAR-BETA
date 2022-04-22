import { Component } from '@angular/core';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-pai-um',
  templateUrl: './pai-um.component.html',
  styleUrls: ['./pai-um.component.css'],
  providers: [CompartilhamentoService]
})
export class PaiUmComponent{
  valorCompartilhado;
  constructor(private sharedService:CompartilhamentoService){
  this.valorCompartilhado = sharedService.obterValorCompartilhado();
  console.log('Componente paium ' + this.valorCompartilhado.toString());
  }
 }
 