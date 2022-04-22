import { Component} from '@angular/core';
import { CompartilhamentoService } from '../compartilhamento.service';

@Component({
  selector: 'app-filho-tres',
  templateUrl: './filho-tres.component.html',
  styleUrls: ['./filho-tres.component.css'],
  providers:[]
})
export class FilhoTresComponent  {

  valorCompartilhado;
  constructor(private sharedService:CompartilhamentoService){
   this.valorCompartilhado = sharedService.obterValorCompartilhado();
   console.log('Componente filhotres ' + this.valorCompartilhado.toString());
   }
  }

