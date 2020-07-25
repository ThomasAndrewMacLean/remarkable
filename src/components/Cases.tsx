import React, { useContext } from 'react';
import * as Styles from './Cases.styles';
import { ExtraContext } from '../utils/contexts';

type CasesPropsType = {};
const Cases = ({}: CasesPropsType) => {
  const extrasContext = useContext(ExtraContext) || [];
  const { cases } = extrasContext;
  console.log(extrasContext);
  return (
    <Styles.CasesWrapper>
      Cases
      {cases.map((c) => {
        return (
          <div>
            <h3>{c.brand}</h3>
            <img src={c.image[0].thumbnails.small.url}></img>
            <h4>{c.title}</h4>
            <p>{c.text}</p>
          </div>
        );
      })}
    </Styles.CasesWrapper>
  );
};

export default Cases;
