// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import createFontStack from '../createFontStack';

describe('Font stack creating utility', () => {
  it('creates font stack string', () => {
    const fonts = ['utopia-std', 'Times', 'Times New Roman', 'serif'];

    const fontStack = createFontStack(fonts);

    expect(fontStack).toBe('utopia-std, Times, "Times New Roman", serif');
  });

  it('creates font stack string for fonts without spaces', () => {
    const fonts = ['utopia-std', 'Times', 'Arial', 'serif'];

    const fontStack = createFontStack(fonts);

    expect(fontStack).toBe('utopia-std, Times, Arial, serif');
  });

  it('creates font stack string for only fonts with spaces', () => {
    const fonts = ['Helvetica Neue', 'Times New Roman', 'sans serif'];

    const fontStack = createFontStack(fonts);

    expect(fontStack).toBe('"Helvetica Neue", "Times New Roman", "sans serif"');
  });
});
