import styled from "styled-components";

export const Container = styled.View`
    flex:1;
    background-color: rgba(34, 34, 34, 0.39);
`;

export const ModalContent = styled.View`
    flex: 2;
    background-color: #fff;
    justify-content: center;
    padding: 14px;
`;

export const ButtonFilter = styled.TouchableOpacity`
    border-radius: 4px;
    background-color: #3b3dbf;
    justify-content: center;
    align-items: center;
    height: 45px;
`;

export const ButtonFilterText = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-weight: bold;
`;