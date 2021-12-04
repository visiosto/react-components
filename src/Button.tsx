// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import buttonDefaultStyle from './style/buttonDefaultStyle';
import buttonDefaultThinStyle from './style/buttonDefaultThinStyle';
import buttonStyle from './style/buttonStyle';
import buttonThinStyle from './style/buttonThinStyle';

const Span = styled.span`
  ${buttonStyle}
`;

const SpanThin = styled.span`
  ${buttonThinStyle}
`;

const SpanDefault = styled(Span)`
  ${buttonDefaultStyle}
`;

const SpanAccept = styled(Span)`
  background-color: var(--color-accept);
  color: var(--color-text-inverted);

  &:hover,
  &:focus {
    background-color: var(--color-accept-inverted);
    color: var(--color-text);
  }
`;

const SpanCancel = styled(Span)`
  background-color: var(--color-error);
  color: var(--color-text-inverted);

  &:hover,
  &:focus {
    background-color: var(--color-error-inverted);
    color: var(--color-text);
  }

  @media screen and (prefers-color-scheme: dark) {
    background-color: var(--color-link);
    color: var(--color-text-inverted);

    &:hover,
    &:focus {
      background-color: var(--color-link-hover);
      color: var(--color-text);
    }
  }
`;

const SpanDefaultThin = styled(SpanThin)`
  ${buttonDefaultThinStyle}
`;

export type ButtonProps = {
  action?: 'accept' | 'cancel' | 'default';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
  thickness?: 'default' | 'thin';
};

function Button({
  action = 'default',
  children,
  onClick = undefined,
  thickness = 'default',
}: ButtonProps) {
  if (action === 'accept') {
    return <SpanAccept onClick={onClick}>{children}</SpanAccept>;
  }

  if (action === 'cancel') {
    return <SpanCancel onClick={onClick}>{children}</SpanCancel>;
  }

  if (thickness === 'thin') {
    return <SpanDefaultThin onClick={onClick}>{children}</SpanDefaultThin>;
  }

  return <SpanDefault onClick={onClick}>{children}</SpanDefault>;
}

export default Button;
