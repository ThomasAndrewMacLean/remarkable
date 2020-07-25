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

  blockquote {
    width: 75%;
    line-height: 2rem;
  }
  /* blockquote p {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: inline;
    padding: 3px;
    font-size: 20px;
    line-height: 1.6;
  
    letter-spacing: 0.6px;
    box-shadow: 7px 0 0 rgba(0, 0, 0, 0.7), -7px 0 0 rgba(0, 0, 0, 0.7);
  } */
`;

export const ButtonWrap = styled.div`
  margin-top: auto;
`;
