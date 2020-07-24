import React from 'react';
import * as Styles from './Button.styles';
import { T } from '../.';
type ButtonPropsType = {
  style?: any;
  onClick?: (e: any) => void;
  link?: string;
  label: string;
  primary?: boolean;
};
const Button = ({ style, onClick, label, link, primary }: ButtonPropsType) => {
  if (link) {
    return (
      <Styles.LinkWrapper primary={primary} style={{ ...style }} href={link}>
        <T translationKey={label}></T>
      </Styles.LinkWrapper>
    );
  } else {
    return (
      <Styles.ButtonWrapper
        primary={primary}
        style={{ ...style }}
        onClick={onClick}
      >
        <T translationKey={label}></T>
      </Styles.ButtonWrapper>
    );
  }
};

export default Button;
