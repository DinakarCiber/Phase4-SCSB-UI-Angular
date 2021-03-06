import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { appHeaders } from '@config/headers';
import { urls } from '@config/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonitoringService {
  constructor(private httpClient: HttpClient) { }
  PREFIX = urls.MONITORING;

  pullData(): Observable<any> {
    return this.httpClient.get<any>(this.PREFIX + "/properties",
      {
        headers: appHeaders.getHeaders()
      });
  }
}
