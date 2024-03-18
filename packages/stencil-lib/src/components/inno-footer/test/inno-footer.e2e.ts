import { newE2EPage } from '@stencil/core/testing';

describe('inno-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<inno-footer></inno-footer>');

    const element = await page.find('inno-footer');
    expect(element).toHaveClass('hydrated');
  });
});
