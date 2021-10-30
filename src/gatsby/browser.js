// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import checkHash from './anchor-link/checkHash';
import scroller from './anchor-link/scroller';

// Based on code by Chase Ohlson.
// Original code is available at https://github.com/brohlson/gatsby-plugin-anchor-links.

export default function checkScrollOnRouteUpdate({ location }, { offset = 0, duration = 1000 }) {
  const isBrowser = typeof window !== 'undefined';

  const windowHash = isBrowser ? window.visiostoScrollHash : undefined;

  if (isBrowser) {
    window.visiostoScrollOffset = offset;
    window.visiostoScrollDuration = duration;
  }

  if (windowHash) {
    scroller(windowHash, offset);
  } else {
    checkHash(location, offset);
  }

  if (isBrowser && windowHash) {
    window.visiostoScrollHash = undefined;
  }
}
