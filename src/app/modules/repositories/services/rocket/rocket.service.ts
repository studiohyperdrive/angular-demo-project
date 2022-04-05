import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IRocket } from './rocket.types';

@Injectable()
export class RocketService {
  private baseUrl: string = 'https://ll.thespacedevs.com/2.0.0/config/launcher/';

  constructor(
    private http: HttpClient,
  ) {}

  public getRocket(id: number): Observable<IRocket> {
    return this.http.get<IRocket>(`${this.baseUrl}${id}`, {
      params: {
        format: 'json',
      },
    });
  }
}
