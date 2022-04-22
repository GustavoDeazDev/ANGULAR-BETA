import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiUmComponent } from './pai-um/pai-um.component';
import { PaiDoisComponent } from './pai-dois/pai-dois.component';
import { FilhoUmComponent } from './filho-um/filho-um.component';
import { FilhoDoisComponent } from './filho-dois/filho-dois.component';
import { FilhoTresComponent } from './filho-tres/filho-tres.component';
import { CompartilhamentoService } from './compartilhamento.service';

@NgModule({
  declarations: [
    AppComponent,
    PaiUmComponent,
    PaiDoisComponent,
    FilhoUmComponent,
    FilhoDoisComponent,
    FilhoTresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CompartilhamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
