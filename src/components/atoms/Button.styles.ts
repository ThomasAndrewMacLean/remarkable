import styled from 'styled-components';

const buttonStyle = {
  padding: '0.6rem 1.2rem',
  display: 'inline-flex',
  'justify-content': 'center',
  'align-items': 'center',
  border: 'none',
  cursor: 'pointer',
  'font-size': 'inherit',
  'font-family': 'inherit',
  'border-radius': '30px',
  'text-transform': 'uppercase',
  transition: 'background-color 200ms ease-out',
};

export const ButtonWrapper = styled.button<{ primary?: boolean }>`
  ${buttonStyle}
  background-color: ${(props) =>
    props.primary ? 'var(--btn-dark)' : 'var(--btn-light)'};

 color: ${(props) => (props.primary ? 'white' : 'var(--btn-dark)')};
  &:hover {
    background-color: ${(props) =>
      props.primary ? 'var(--btn-light)' : 'var(--btn-dark)'};

 color: ${(props) => (props.primary ? 'var(--btn-dark)' : 'white')};

  }
`;

export const LinkWrapper = styled.a<{ primary?: boolean }>`
  ${buttonStyle}
  background-color: ${(props) =>
    props.primary ? 'var(--btn-dark)' : 'var(--btn-light)'};

 color: ${(props) => (props.primary ? 'white' : 'var(--btn-dark)')};
  &:hover {
    background-color: ${(props) =>
      props.primary ? 'var(--btn-light)' : 'var(--btn-dark)'};

 color: ${(props) => (props.primary ? 'var(--btn-dark)' : 'white')};

  }
`;
