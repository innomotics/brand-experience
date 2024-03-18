import { newSpecPage } from '@stencil/core/testing';
import { InnoFooter } from '../inno-footer';

describe('inno-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InnoFooter],
      html: `<inno-footer></inno-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <inno-footer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </inno-footer>
    `);
  });
});
