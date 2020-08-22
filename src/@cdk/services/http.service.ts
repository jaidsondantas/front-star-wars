import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Params} from '../models/Params';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class HttpService {
  baseUrl: string;


  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = environment.baseUrl;
  }

  getId(id: number, path: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}${path}/${id}`);
  }

  get(path: string, params: Params = new Params()): Observable<any> {
    const httpParams = this.createHttpParams(params);
    return this.httpClient.get(`${this.baseUrl}${path}`, {params: httpParams});
  }

  createHttpParams(params: Params): any {
    const httpParams = {};

    if (params.search) {
      httpParams['search'] = params.search;
    }
    if (params.page) {
      httpParams['page'] = params.page;
    }


    return new HttpParams({fromObject: httpParams});
  }

}
