import { UiTreeModule } from './ui-tree.module';

describe('UiTreeModule', () => {
  let uiTreeModule: UiTreeModule;

  beforeEach(() => {
    uiTreeModule = new UiTreeModule();
  });

  it('should create an instance', () => {
    expect(uiTreeModule).toBeTruthy();
  });
});
