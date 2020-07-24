import React from 'react';
import * as Styles from './Pijlers.styles';

import { services } from '../constants';
import { T } from '.';
import Button from './atoms/Button';

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

            <T
              style={{ marginBottom: '2rem' }}
              translationKey={s.id + 'Text'}
            ></T>

            <Button
              style={{ marginTop: 'auto' }}
              link={s.url}
              label="readMore"
            ></Button>
          </Styles.Card>
        );
      })}
    </Styles.PijlersWrapper>
  );
};

export default Pijlers;
