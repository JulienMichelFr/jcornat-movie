import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { Config } from '../../config/config';
import { ConfigInterface } from '../../config/config.interface';
import { Medium } from '../../models/medium/medium.interface';

@Injectable()
export abstract class BaseMediumApiService<T extends Medium> {
  //#region Injection
  protected readonly http: HttpClient = inject(HttpClient);
  protected readonly config: ConfigInterface = inject(Config);
  //#endregion

  public abstract readonly baseUrl: string;

  public getAll(search?: string): Observable<T[]> {
    let params: HttpParams = new HttpParams();
    if (search?.length) {
      params = params.set('search', search);
    }
    return this.http.get<{ data: T[] }>(this.baseUrl, { params }).pipe(map(({ data }) => data.map((value) => this.process(value))));
  }

  public getOne(id: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`).pipe(map((value) => this.process(value)));
  }

  protected process(value: T): T {
    value.url = `${this.config.uploadUrl}/${value.id}.jpg`;
    value.urlWebp = `${this.config.uploadUrl}/${value.id}.webp`;

    return value;
  }
}
