import styled from "styled-components/native";

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    width: 47%;
    height: 50px;
    flex-direction: row;
    margin-bottom: 14px;
    border-radius: 8px;
    border-width: 1.5px;
    border-color: ${ props => props.checked ? '#3B3DBF' : 'transparent' };
    justify-content: center;
    align-items: center;
    background-color: ${ props => props.checked ? '#FFF' : '#E7E7E7' }

`;

export const RegisterLabel = styled.Text`
    margin-left: 8px;
    font-size: 17px;
`;