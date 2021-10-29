// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled, { css } from 'styled-components';

const Span = styled.span<{ size: number }>`
  ${(props) => {
    if (props.size === 18) {
      return css`
        margin: 0;
        vertical-align: -5px;
      `;
    }

    if (props.size === 24) {
      return css`
        margin: 0;
        vertical-align: -6px;
      `;
    }

    return null;
  }}
`;

export type IconProps = {
  className?: string | undefined;
  icon:
    | 'arrow_back'
    | 'arrow_forward'
    | 'auto_awesome'
    | 'cancel'
    | 'check'
    | 'done'
    | 'event'
    | 'navigate_before'
    | 'navigate_next'
    | 'open_in_new'
    | 'public'
    | 'search'
    | 'send'
    | 'tune';
  size?: 18 | 24 | 36 | 48 | 64;
};

function Icon({ className = undefined, icon, size = 24 }: IconProps) {
  if (className) {
    return (
      <Span className={`material-icons md-${size} ${className}`} size={size}>
        {icon}
      </Span>
    );
  }

  return (
    <Span className={`material-icons md-${size}`} size={size}>
      {icon}
    </Span>
  );
}

export default Icon;
