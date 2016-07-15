import { MetacriticPage } from './app.po';

describe('metacritic App', function() {
  let page: MetacriticPage;

  beforeEach(() => {
    page = new MetacriticPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
