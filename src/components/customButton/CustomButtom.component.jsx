import { CustomButtonContainer } from './CustomButton.styles'
import React from 'react';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;