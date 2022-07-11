import { Component, OnInit } from '@angular/core';
import { Cidade } from '../cidade';
import { CidadeService } from '../cidades.service';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html'

})
export class ListaCidadeComponent implements OnInit {

  constructor(private produtoService: CidadeService) { }

  public cidades: Cidade[];

  ngOnInit() {
    this.produtoService.obterCidades()
    .subscribe({
      next: p => {
        this.cidades = p;
        console.log(p);
      },
      error: error => {
        console.log(error);     
      }        
    });
  }

}
