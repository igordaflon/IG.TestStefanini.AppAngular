import { Routes } from "@angular/router";
import { AtualizarCidadeComponent } from "./cidades/atualizar-cidade/atualizar-cidade.component";
import { ListaCidadeComponent } from "./cidades/lista-cidade/lista-cidade.component";
import { NovaCidadeComponent } from "./cidades/nova-cidade/nova-cidade.component";
import { RemoverCidadeComponent } from "./cidades/remover-cidade/remover-cidade.component";
import { HomeComponent } from "./navegacao/home/home.component";

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cidades', component: ListaCidadeComponent},
    {path: 'cidades/nova-cidade', component: NovaCidadeComponent},
    {path: 'cidades/atualizar-cidade/:id', component: AtualizarCidadeComponent},
    {path: 'cidades/remover-cidade/:id', component: RemoverCidadeComponent}

];