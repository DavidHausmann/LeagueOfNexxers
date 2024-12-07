import { Injectable } from '@angular/core';
import { IToken } from '../../models/common.model';
import { BehaviorSubject } from 'rxjs';

export enum StorageTypes {
  CURRENT_USER = 'current_user',
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageTypes = StorageTypes;

  constructor() { }

  get currentUser(): IToken {
    const currentUserSubject = new BehaviorSubject<IToken>(JSON.parse(sessionStorage.getItem(StorageTypes.CURRENT_USER)!));
    return currentUserSubject.value;
  }

  set currentUser(token: IToken) {
    sessionStorage.setItem(StorageTypes.CURRENT_USER, JSON.stringify(token));
  }

  sessionStorageClear(): void {
    sessionStorage.clear();
  }
}
