import { ErlymonWebPage } from './app.po';

describe('erlymon-web App', () => {
  let page: ErlymonWebPage;

  beforeEach(() => {
    page = new ErlymonWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
