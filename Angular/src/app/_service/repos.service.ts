import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'}),
  withCredentials: true,
};

const REPO_API = `${environment.apiUrl}/repositories`;
const RELEASE_API = `${environment.apiUrl}/releases/`;

@Injectable({
  providedIn: 'root'
})
export class ReposService {

  constructor(private http: HttpClient) {}

  paginate(options: any): Observable<any> {
    return this.http.post(REPO_API , options, httpOptions);
  }

  getRelease(repoId: number): Observable<any> {
    return this.http.get(RELEASE_API + repoId, httpOptions);
  }
}
