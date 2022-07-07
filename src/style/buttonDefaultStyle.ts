// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import { css } from 'styled-components';

const buttonDefaultStyle = css`
  background-color: var(--color-link);
  color: var(--color-text-inverted);

  &:hover,
  &:focus {
    background-color: var(--color-link-hover);
    color: var(--color-text);
  }
`;

export default buttonDefaultStyle;
