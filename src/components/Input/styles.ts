import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  display: flex;
  color: #666360;

  align-items: center;

  & + div {
    margin-top: 8px;
  }
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