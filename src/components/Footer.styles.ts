import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  font-size: 0.8rem;
  background-color: #353334;
  color: white;
  display: grid;
  grid-template-columns: ${(props) => `1fr ${props.theme.maxWidth} 1fr`};
`;

export const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
`;
