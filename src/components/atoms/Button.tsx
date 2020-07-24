import React from 'react';
import * as Styles from './Button.styles';
import { T } from '../.';
type ButtonPropsType = {
  style?: any;
  onClick?: (e: any) => void;
  link?: string;
  label: string;
};
const Button = ({ style, onClick, label, link }: ButtonPropsType) => {
  if (link) {
    return (
      <Styles.LinkWrapper style={{ ...style }} href={link}>
        <T translationKey={label}></T>
      </Styles.LinkWrapper>
    );
  } else {
    return (
      <Styles.ButtonWrapper style={{ ...style }} onClick={onClick}>
        <T translationKey={label}></T>
      </Styles.ButtonWrapper>
    );
  }
};

export default Button;
