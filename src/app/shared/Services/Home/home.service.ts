import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public urlBase=environment.url_api+'Home';
  constructor(private http: HttpClient) { }

  public ListarSimuladores():Observable<any>{
    return this.http.get<any>(this.urlBase+'/ListarSimuladores');
  }
}
