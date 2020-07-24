import styled from 'styled-components';

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  display: 'inline-flex',
  'justify-content': 'center',
  'align-items': 'center',
  background: 'var(--btn-color)',
  border: 'none',
  cursor: 'pointer',
  'font-size': 'inherit',
  'font-family': 'inherit',
  'border-radius': '30px',
  'text-transform': 'uppercase',
  transition: 'background-color 200ms ease-out',
};
const buttonHoverStyle = {
  background: 'var(--btn-border)',
  color: 'white',
};
export const ButtonWrapper = styled.button`
  ${buttonStyle}

  &:hover {
    ${buttonHoverStyle}
  }
`;

export const LinkWrapper = styled.a`
  ${buttonStyle}
  &:hover {
    ${buttonHoverStyle}
  }
`;
