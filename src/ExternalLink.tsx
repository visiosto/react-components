// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Icon from './Icon';

export type ExternalLinkProps = {
  children: React.ReactNode;
  className?: string;
  noIcon?: boolean;
  to: string;
};

function ExternalLink({ children, className = undefined, noIcon = false, to }: ExternalLinkProps) {
  if (noIcon) {
    return <a className={className} href={to} rel="noopener noreferrer" target="_blank">{children}</a>;
  }

  return (
    <a className={className} href={to} rel="noopener noreferrer" target="_blank">
      {children} <Icon icon="open_in_new" size={18} />
    </a>
  );
}

export default ExternalLink;
