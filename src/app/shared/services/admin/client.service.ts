import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn:  'root'
  })
export class ClientService {

  constructor(
    private _httpClient: HttpClient,
    private _config: ConfigService
  ) { }

  public getClients()  {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/clients-list.json');
    }
  }

  public getClientDetails()  {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/client-info.json');
    }
  }
}
