// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';

import Icon from './Icon';

type ExternalLinkProps = {
  children: React.ReactNode;
  to: string;
};

function ExternalLink({ children, to }: ExternalLinkProps) {
  return (
    <a href={to} rel="noopener noreferrer" target="_blank">
      {children} <Icon icon="open_in_new" size={18} />
    </a>
  );
}

export default ExternalLink;
