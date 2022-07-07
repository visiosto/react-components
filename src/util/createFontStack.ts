// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

// Modified from primer/react repository.
// The original code is available at https://github.com/primer/react

export default function createFontStack(fonts: string[]) {
  return fonts.map((font) => (font.includes(' ') ? `"${font}"` : font)).join(', ');
}
