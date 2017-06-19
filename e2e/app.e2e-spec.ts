import { AleyadrPage } from './app.po';

describe('aleyadr App', function() {
  let page: AleyadrPage;

  beforeEach(() => {
    page = new AleyadrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
