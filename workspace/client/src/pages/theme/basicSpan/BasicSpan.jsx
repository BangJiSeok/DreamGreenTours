import React from 'react';
import Span from './style';
const BasicSpan = ({style1,children, size,color,...rest}) => {
  return (
    <Span size={size} style1={style1} color={color} {...rest}>
        {children}
    </Span>
);
};

export default BasicSpan;