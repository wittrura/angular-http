import { AngularHttpClientPage } from './app.po';

describe('angular-http-client App', () => {
  let page: AngularHttpClientPage;

  beforeEach(() => {
    page = new AngularHttpClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
