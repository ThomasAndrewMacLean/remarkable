import React from 'react';
import * as Styles from './Pijlers.styles';

import { services } from '../constants';
import { T } from '.';

type PijlersPropsType = {};
const Pijlers = ({}: PijlersPropsType) => {
  return (
    <Styles.PijlersWrapper>
      {services.map((s, i) => {
        return (
          <Styles.Card key={i}>
            <h3>
              <T translationKey={s.id + 'Title'}></T>
            </h3>

            <T translationKey={s.id + 'Text'}></T>
          </Styles.Card>
        );
      })}
    </Styles.PijlersWrapper>
  );
};

export default Pijlers;
