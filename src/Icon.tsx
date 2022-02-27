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

export type IconName =
  | 'arrow_back'
  | 'arrow_forward'
  | 'auto_awesome'
  | 'business'
  | 'cancel'
  | 'check'
  | 'cloud'
  | 'done'
  | 'download'
  | 'event'
  | 'file_download'
  | 'language'
  | 'navigate_before'
  | 'navigate_next'
  | 'open_in_new'
  | 'public'
  | 'search'
  | 'send'
  | 'tune';

export type IconStyle = 'outlined' | 'filled' | 'round' | 'sharp' | 'two-tone';

export type IconProps = {
  className?: string;
  icon: IconName;
  iconStyle?: IconStyle;
  size?: 18 | 24 | 36 | 48 | 64;
};

function Icon({ className = undefined, icon, iconStyle = 'filled', size = 24 }: IconProps) {
  const materialIconClass =
    iconStyle === 'filled' ? `material-icons` : `material-icons-${iconStyle}`;

  if (className) {
    return (
      <Span className={`${materialIconClass} md-${size} ${className}`} size={size}>
        {icon}
      </Span>
    );
  }

  return (
    <Span className={`${materialIconClass} md-${size}`} size={size}>
      {icon}
    </Span>
  );
}

export default Icon;
