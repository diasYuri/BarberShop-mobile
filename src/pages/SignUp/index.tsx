/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {Container, BackToSignIn, BackToSignInText, Title} from './styles';

import logoImg from '../../assets/logo.png';
import Input from '../../components/input';
import Button from '../../components/button';

const SignUp: React.FC = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Crie sua conta</Title>
            </View>
            <Input name="name" icon="user" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="senha" icon="lock" placeholder="Senha" />
            <Button>Criar conta</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn>
        <Icon name="arrow-left" size={20} color="#fff" />
        <BackToSignInText>Volta para SignIn</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default SignUp;
