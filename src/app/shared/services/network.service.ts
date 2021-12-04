import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private http: HttpClient) {

  }

  public get(url: string, entidade: string,): Observable<Object> {
    return this.http.get(`${url}/${entidade}`).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: HttpErrorResponse) {
        let excecao
        try {
            if (error.error && error.error['error']) {
                excecao = error.error.error.message
            } else if(error.message) {
                excecao = error.message
            } else {
                excecao = JSON.stringify(error)
            }
        } catch (e) {
            excecao = 'Erro no sistema'
        }
        return throwError(excecao.toString().replace(/\\r/g, '\\n'))

    }
}
