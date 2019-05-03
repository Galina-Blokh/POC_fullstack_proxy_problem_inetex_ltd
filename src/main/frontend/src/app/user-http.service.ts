import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import User from "./model/User";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  constructor(private httpClient: HttpClient) { }

getUsersObservable(): Observable<User[]>{
  return this.httpClient.get<User[]>("/users");
}

}
