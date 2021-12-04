// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from './Button';
import Icon, { Icons } from './Icon';

const ButtonIconLeft = styled(Icon)<{ iconMargin: number }>`
  margin: 0 0 0 ${({ iconMargin }) => iconMargin}px;
`;

const ButtonIconRight = styled(Icon)<{ iconMargin: number }>`
  margin: 0 ${({ iconMargin }) => iconMargin}px 0 0;
`;

export type IconButtonProps = ButtonProps & {
  icon: Icons;
  iconAlignment?: 'left' | 'right';
  iconMargin?: number;
};

function IconButton({
  action = 'default',
  children,
  icon,
  iconAlignment = 'left',
  iconMargin = -3,
  onClick = undefined,
  thickness = 'default',
}: IconButtonProps) {
  return (
    <Button action={action} onClick={onClick} thickness={thickness}>
      {(() => {
        if (iconAlignment === 'left') {
          return (
            <>
              <ButtonIconLeft icon={icon} iconMargin={iconMargin} /> {children}
            </>
          );
        }

        if (iconAlignment === 'right') {
          return (
            <>
              {children} <ButtonIconRight icon={icon} iconMargin={iconMargin} />
            </>
          );
        }

        return null;
      })()}
    </Button>
  );
}

export default IconButton;
