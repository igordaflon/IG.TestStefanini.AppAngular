import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cidade } from '../cidade';
import { CidadeService } from '../cidades.service';

@Component({
  selector: 'app-nova-cidade',
  templateUrl: './nova-cidade.component.html'
})
export class NovaCidadeComponent implements OnInit {

  public erros: any[];

  request: Cidade = {
    id: 0,
    nome: '',
    uf: ''
  }

  constructor(private cidadeService: CidadeService, private _route: Router) { }

  ngOnInit() {
  }

    save(){
    this.cidadeService.novaCidade(this.request)
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
