import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ILoginPayload } from 'src/app/pages/login/login.component';
import { Champion, IRegisterPayload } from '../../models/common.model';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'https://lol2-4vk5.onrender.com';
  private championSelected: any;
  constructor(
    private httpClient: HttpClient,
    private storage: StorageService,
  ) {
  }

  getChampionSelected(): Champion {
    return this.championSelected;
  }

  setChampionSelected(champion: Champion | null): void {
    this.championSelected = champion;
  }

  getChampions(): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${this.storage.currentUser}`,
    });
    return this.httpClient.get<any>(`${this.baseUrl}/champions`, {headers});
  }

  postLogin(data: ILoginPayload): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/login`, data);
  }

  postRegister(data: IRegisterPayload): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/register`, data);
  }
}
