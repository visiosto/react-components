// Copyright (c) 2021 Visiosto oy
// Licensed under the MIT License

import React from 'react';
import styled from 'styled-components';

import switchInputStyle from './style/switchInputStyle';
import switchLabelStyle from './style/switchLabelStyle';
import switchSpanStyle from './style/switchSpanStyle';

import { formClassErrorMessage } from './constants';

const SwitchInputSpan = styled.span`
  ${switchLabelStyle}

  input {
    ${switchInputStyle}
  }
`;

const SwitchSpan = styled.span`
  ${switchSpanStyle}
`;

export type SwitchCheckboxProps = {
  checked?: boolean;
  errorMessage?: string;
  handleClick: React.MouseEventHandler | undefined;
  id: string;
  label: string;
  name: string;
};

function SwitchCheckbox({
  checked = false,
  errorMessage = '',
  handleClick,
  id,
  label,
  name,
}: SwitchCheckboxProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {errorMessage !== '' ? (
        <label className={formClassErrorMessage} htmlFor={id}>
          {errorMessage}
        </label>
      ) : null}
      <SwitchInputSpan onClick={handleClick}>
        <input key={Math.random()} defaultChecked={checked} id={id} name={name} type="checkbox" />
        <SwitchSpan />
      </SwitchInputSpan>
    </>
  );
}

export default SwitchCheckbox;
