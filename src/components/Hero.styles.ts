import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background-color: var(--highlight);
  background: url('https://scripts.remarkable.be/image/1650-0/11d78c239eb618ea39e895f19c7a279b14.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  padding: 15rem 0 5rem;
  width: 100vw;
  margin-left: ${(props) => `calc(-50vw + ${props.theme.halfMaxWidth})`};
  display: grid;
  grid-template-columns: ${(props) => `1fr ${props.theme.maxWidth} 1fr`};
  margin-bottom: 4rem;
`;

export const Content = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  padding: 2rem 0;
  justify-content: space-between;
  color: white;
  text-shadow: 0px 0px 5px black;
`;

export const ButtonWrap = styled.div`
  margin-top: auto;
`;
