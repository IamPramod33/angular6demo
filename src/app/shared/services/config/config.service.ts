import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config: Config;
  get config() {
      return this._config;
  }
  set config(config: Config) {
      this._config = config;
  }
  constructor(private _httpClient: HttpClient) {
    
  }

  initializeApp(): Promise<any> {
    const promise = this._httpClient.get('assets/config.json')
      .toPromise()
      .then(configData => {
          this.config = <Config>configData;
          return configData;
      });

    return promise;
  }
}
export interface Config {
  useMockData: boolean
}