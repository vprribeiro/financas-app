import React from "react";
import {Container, Tipo, IconView, TextView, TipoText, ValorText} from './style'
import Icon from '@expo/vector-icons/Feather';
import {Alert, TouchableWithoutFeedback} from 'react-native';

export default function HistoricoList({ data , deleteItem }){

    function handleDeleteItem(){
        Alert.alert(
            'Atenção',
            'Deseja deletar este item?',
            [
                {
                    text:'Cancelar',
                    style:'cancel'
                },
                {
                    text:'Confirmar',
                    onPress: () => deleteItem(data.id)
                }
            ]
        )
    } 

    return(
        <TouchableWithoutFeedback onLongPress={handleDeleteItem}>
            <Container>
                <Tipo>
                    <IconView tipo={data.type}>
                        <Icon 
                            name= {data.type === 'despesa' ? 'arrow-down' : 'arrow-up'} 
                            size={20} 
                            color={"#FFF"} 
                        />
                        <TipoText> {data.type} </TipoText>
                    </IconView>
                </Tipo>
                <TextView>
                    <ValorText>
                        {data.description} 
                    </ValorText>
                    <ValorText>
                        {data.value.toLocaleString('pt-BR',{
                            style: 'currency',
                            currency: 'BRL',
                        })}
                    </ValorText>
                </TextView>
            </Container>
        </TouchableWithoutFeedback>
    )
}