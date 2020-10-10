import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isfilled: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;

  border: 2px solid #232129;
  color: #666360;

  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${props =>
    props.isfilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    color: #f4ede8;

    border: 0;
    background: transparent;
    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
