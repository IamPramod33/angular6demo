import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../config/config.service';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ClientService } from '../admin/client.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
})
export class SharedServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServiceModule,
      providers: [{
        provide: APP_INITIALIZER,
        useFactory: configInitFactory,
        deps: [
          ConfigService
        ],
        multi: true
      },
      ClientService]
    }
  }
}
export function configInitFactory(_configService: ConfigService) {
  return () => _configService.initializeApp();
}