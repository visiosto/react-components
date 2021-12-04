// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Button, { ButtonProps } from './Button';
import Icon, { Icons } from './Icon';

export type IconButtonProps = ButtonProps & { icon: Icons };

function IconButton({
  action = 'default',
  children,
  icon,
  onClick = undefined,
  thickness = 'default',
}: IconButtonProps) {
  return (
    <Button action={action} onClick={onClick} thickness={thickness}>
      <Icon icon={icon} /> {children}
    </Button>
  );
}

export default IconButton;
