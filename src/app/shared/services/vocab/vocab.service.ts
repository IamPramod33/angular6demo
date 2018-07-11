import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(
    private _httpClient: HttpClient,
    private _config: ConfigService
  ) { }

  public getVocabSources()  {
    if (this._config.config.useMockData) {
      return this._httpClient.get('assets/vocab-source.json');
    }
  }
}
