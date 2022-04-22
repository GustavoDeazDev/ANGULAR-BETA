import { Component} from '@angular/core';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-filho-um',
  templateUrl: './filho-um.component.html',
  styleUrls: ['./filho-um.component.css'],
  providers:[]
})
export class FilhoUmComponent  {
  valorCompartilhado;
  constructor(private sharedService:CompartilhamentoService){
  this.valorCompartilhado = sharedService.obterValorCompartilhado();
  console.log('Componente filhoum ' + this.valorCompartilhado.toString());
  }
 }
 
