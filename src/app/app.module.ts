import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { rootRouterConfig } from './app.routes';
import { CidadeService } from './cidades/cidades.service';
import { ListaCidadeComponent } from './cidades/lista-cidade/lista-cidade.component';
import { NovaCidadeComponent } from './cidades/nova-cidade/nova-cidade.component';
import { AtualizarCidadeComponent } from './cidades/atualizar-cidade/atualizar-cidade.component';
import { RemoverCidadeComponent } from './cidades/remover-cidade/remover-cidade.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ListaCidadeComponent,
    NovaCidadeComponent,
    AtualizarCidadeComponent,
    RemoverCidadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    CidadeService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
