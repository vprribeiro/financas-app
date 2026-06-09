import 'react-native-gesture-handler';
//import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';

import styled from 'styled-components/native';
import { NavigationContainer } from "@react-navigation/native"

import Routes from './src/routes/index';

import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#F0F4FF' barStyle="dark-content"/>
        <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}

const Container = styled.View`
flex: 1;
justify-content: center;
align-items: center;
`;

const Titulo = styled.Text`
font-size: 25px;

`;