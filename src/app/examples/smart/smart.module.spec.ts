import { SmartModule } from './smart.module';

describe('SmartModule', () => {
  let smartModule: SmartModule;

  beforeEach(() => {
    smartModule = new SmartModule();
  });

  it('should create an instance', () => {
    expect(smartModule).toBeTruthy();
  });
});
