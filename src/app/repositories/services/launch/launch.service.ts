import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPaginatedResponse } from '../../repositories.types';

import { ILaunch } from './launch.types';

@Injectable()
export class LaunchService {
  private baseUrl: string = 'https://ll.thespacedevs.com/2.0.0/launch/';

  constructor(
    private http: HttpClient,
  ) {}

  public getLaunches(offset: number = 0): Observable<IPaginatedResponse<ILaunch>> {
    return this.http.get<IPaginatedResponse<ILaunch>>(this.baseUrl, {
      params: {
        format: 'json',
        offset,
      }
    });
  }
}
