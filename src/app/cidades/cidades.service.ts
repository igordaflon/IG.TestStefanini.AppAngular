import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Cidade } from "./cidade";
import { Observable } from "rxjs";

@Injectable()
export class CidadeService{

    constructor(private http: HttpClient){}

    protected UrlServiceV1: string = "https://localhost:7024/api/Cidade";

    obterCidades() : Observable<Cidade[]>{
        return this.http.get<Cidade[]>(this.UrlServiceV1)        
    }

    novaCidade(request: Cidade) : Observable<Cidade>{
        return this.http.post<Cidade>(this.UrlServiceV1, request)
    }

    obterCidade(id: number) : Observable<Cidade>{
        const _url = `${this.UrlServiceV1}/${id}`;
        return this.http.get<Cidade>(_url);
    }

    atualizarCidade(id: number, request: Cidade) : Observable<Cidade>{
        const _url = `${this.UrlServiceV1}/${id}`;
        return this.http.put<Cidade>(_url, request)
    }

    removerCidade(id: number) : Observable<any>{
        const _url = `${this.UrlServiceV1}/${id}`;
        return this.http.delete<any>(_url)
    }
}