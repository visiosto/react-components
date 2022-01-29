// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Icon from './Icon';

export type ExternalLinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

function ExternalLink({ children, className = undefined, to }: ExternalLinkProps) {
  return (
    <a className={className} href={to} rel="noopener noreferrer" target="_blank">
      {children} <Icon icon="open_in_new" size={18} />
    </a>
  );
}

export default ExternalLink;
