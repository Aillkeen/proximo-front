import { TrapiaFrontPage } from './app.po';

describe('trapia-front App', () => {
  let page: TrapiaFrontPage;

  beforeEach(() => {
    page = new TrapiaFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
