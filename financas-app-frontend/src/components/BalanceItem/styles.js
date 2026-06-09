import styled from "styled-components"

export const Container = styled.View`
    background-color: #${props => props.bg};
    width: 300px;
    height: 190px;
    justify-content: center;
    align-items: flex-start;
    margin-left: 14px;
    margin-right: 14px;
    border-radius: 4px;
    padding-left: 14px;
`;

export const Label = styled.Text`
    font-size: 19px;
    font-weight: bold;
    color: #FFF;
`;

export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
`;