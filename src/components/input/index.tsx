import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon} from './styled';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({placeholder, icon, ...rest}) => (
  <Container>
    <Icon name={icon} size={20} color="#666360" />
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#666360"
      placeholder={placeholder}
      {...rest}
    />
  </Container>
);

export default Input;
