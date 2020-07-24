import React from 'react';
import * as Styles from './Hero.styles';
import { Image, T, Button } from '.';

type HeroPropsType = {};
const Hero = ({}: HeroPropsType) => {
  return (
    <Styles.HeroWrapper>
      <Styles.Content>
        {/* <Image imageKey="hero-image"></Image> */}
        <T translationKey="introText"></T>
        <Styles.ButtonWrap>
          <Button
            // style={{ backgroundColor: '#ef9000', color: '#fff' }}
            label="cta"
            primary={true}
            onClick={() => console.log('hello')}
          ></Button>
        </Styles.ButtonWrap>
      </Styles.Content>
    </Styles.HeroWrapper>
  );
};

export default Hero;
