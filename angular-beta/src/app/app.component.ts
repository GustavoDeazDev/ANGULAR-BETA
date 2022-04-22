import { Component } from '@angular/core';
import { CompartilhamentoService } from './compartilhamento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CompartilhamentoService]
})
export class AppComponent {
  title = 'angular-beta';
  valorCompartilhado
  constructor(private servicoComp: CompartilhamentoService) {
    this.valorCompartilhado= servicoComp.obterValorCompartilhado()
    console.log('Componente pai-um exibe o seguinte valor:' + this.valorCompartilhado)
   }
}
