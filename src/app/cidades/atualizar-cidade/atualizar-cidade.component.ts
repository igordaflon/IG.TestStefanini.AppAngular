import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../cidade';
import { CidadeService } from '../cidades.service';

@Component({
  selector: 'app-atualizar-cidade',
  templateUrl: './atualizar-cidade.component.html'

})
export class AtualizarCidadeComponent implements OnInit {

  id: number;
  request: Cidade;
  public erros: any[];

  constructor(private cidadeService: CidadeService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id']
    this.cidadeService.obterCidade(this.id).subscribe(res => {
      this.request ={
        id: res.id,
        nome: res.nome,
        uf: res.uf
      }
    });
  }

  atualizar(){
    this.cidadeService.atualizarCidade(this.id, this.request)
    .subscribe({
      next: p => {
        this._route.navigate(['/cidades'])

      },
      error: error => {
        this.erros = error.error.errors;  
        alert(this.erros);     
      }        
    });
  }

}
