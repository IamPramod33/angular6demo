import { ElementSetupModule } from './element-setup.module';

describe('ElementSetupModule', () => {
  let elementSetupModule: ElementSetupModule;

  beforeEach(() => {
    elementSetupModule = new ElementSetupModule();
  });

  it('should create an instance', () => {
    expect(elementSetupModule).toBeTruthy();
  });
});
