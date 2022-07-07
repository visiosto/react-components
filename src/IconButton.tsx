// Copyright (c) 2021 Visiosto oy
// Licensed under the Apache License, Version 2.0

import React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from './Button';
import Icon, { IconName, IconStyle } from './Icon';

const ButtonIconLeft = styled(Icon)<{ iconMargin: number }>`
  margin: 0 0 0 ${({ iconMargin }) => iconMargin}px;
`;

const ButtonIconRight = styled(Icon)<{ iconMargin: number }>`
  margin: 0 ${({ iconMargin }) => iconMargin}px 0 0;
`;

export type IconButtonProps = ButtonProps & {
  icon: IconName;
  iconAlignment?: 'left' | 'right';
  iconMargin?: number;
  iconStyle?: IconStyle;
};

function IconButton({
  action = 'default',
  children,
  icon,
  iconAlignment = 'left',
  iconMargin = -3,
  iconStyle = 'filled',
  onClick = undefined,
  thickness = 'default',
}: IconButtonProps) {
  return (
    <Button action={action} onClick={onClick} thickness={thickness}>
      {(() => {
        if (iconAlignment === 'left') {
          return (
            <>
              <ButtonIconLeft icon={icon} iconMargin={iconMargin} iconStyle={iconStyle} />{' '}
              {children}
            </>
          );
        }

        if (iconAlignment === 'right') {
          return (
            <>
              {children}{' '}
              <ButtonIconRight icon={icon} iconMargin={iconMargin} iconStyle={iconStyle} />
            </>
          );
        }

        return null;
      })()}
    </Button>
  );
}

export default IconButton;
