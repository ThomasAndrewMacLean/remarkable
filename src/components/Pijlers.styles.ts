import styled from 'styled-components';

export const PijlersWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin: 3rem 0;
`;

export const Card = styled.article`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  border-radius: 4px;
  background: white;
  font-size: 13px;

  padding: 1rem;
  /* width: 200px; */
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07);
`;
