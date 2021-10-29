// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import boxShadowHoverStyle from './style/boxShadowHoverStyle';
import boxShadowStyle from './style/boxShadowStyle';

const Article = styled.article<{ centered?: boolean; smallerPadding?: boolean }>`
  border-radius: 0.5rem;
  padding: ${(props) => (props.smallerPadding ? 0 : '2rem')};
  transition: box-shadow 100ms ease-in;
  text-align: ${(props) => (props.centered ? 'center' : 'left')};

  ${boxShadowStyle}

  &:hover {
    ${boxShadowHoverStyle}
  }
`;

export type CardProps = { centered?: boolean; children: React.ReactNode; smallerPadding?: boolean };

function Card({ centered = false, children, smallerPadding = false }: CardProps) {
  return (
    <Article centered={centered} smallerPadding={smallerPadding}>
      {children}
    </Article>
  );
}

export default Card;
