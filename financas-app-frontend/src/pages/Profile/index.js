import React, { useContext } from "react";

import {Container, Message, Name, NewLink, NewText, LogoutButton, LogoutText} from './styles'
import Header from '../../components/Header'

import { AuthContext } from '../../contexts/auth'

import { useNavigation } from '@react-navigation/native'

export default function Profile(){
    const { user, signOut} = useContext(AuthContext)
    const navigation = useNavigation()

    return(
        <Container>
            <Header title={"Meu perfil"}/>
            <Message>Bem vindo</Message>
            <Name >
                {user && user.name}
            </Name>
            <NewLink onPress={ () => navigation.navigate('Registrar')} >
                <NewText>Fazer novo registro</NewText>
            </NewLink>
            <LogoutButton onPress={ () => signOut() }>
                <LogoutText>Sair da conta</LogoutText>
            </LogoutButton>

        </Container>
    )
}