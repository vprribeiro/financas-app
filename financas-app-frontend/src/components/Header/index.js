import React from "react";
import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native'

import { Container, Title , ButtonMenu} from "./styles";


export default function Header({ title }){
    const navigation = useNavigation()

    return(
        <Container>
            <ButtonMenu onPress={() => navigation.openDrawer()}>
                <AntDesign name="menu" size={35} color="#121212" />
            </ButtonMenu>
            {title && (
                <Title>
                    {title}
                </Title>
            )}
        </Container>
    )
}