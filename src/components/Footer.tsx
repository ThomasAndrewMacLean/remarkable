import React from 'react';
import * as Styles from './Footer.styles';
import { T } from '.';
type FooterPropsType = {};

const Footer = ({}: FooterPropsType) => {
  return (
    <Styles.FooterWrapper>
      <Styles.Content>

      <T translationKey='contacteerOns'></T>
      <address>contact</address>
      </Styles.Content>
    </Styles.FooterWrapper>
  );
};

export default Footer;
