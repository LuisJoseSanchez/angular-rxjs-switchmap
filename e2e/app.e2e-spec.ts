import { AngularRxjsSwitchmapPage } from './app.po';

describe('angular-rxjs-switchmap App', () => {
  let page: AngularRxjsSwitchmapPage;

  beforeEach(() => {
    page = new AngularRxjsSwitchmapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
