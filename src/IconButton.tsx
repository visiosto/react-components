// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import Button, { ButtonProps } from './Button';
import Icon, { Icons } from './Icon';

const ButtonIcon = styled(Icon)<{ iconMargin: number }>`
  margin: 0 0 0 ${({ iconMargin }) => iconMargin}px;
`;

export type IconButtonProps = ButtonProps & { icon: Icons; iconMargin?: number };

function IconButton({
  action = 'default',
  children,
  icon,
  iconMargin = -3,
  onClick = undefined,
  thickness = 'default',
}: IconButtonProps) {
  return (
    <Button action={action} onClick={onClick} thickness={thickness}>
      <ButtonIcon icon={icon} iconMargin={iconMargin} /> {children}
    </Button>
  );
}

export default IconButton;
