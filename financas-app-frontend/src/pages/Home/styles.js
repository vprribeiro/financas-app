import styled from "styled-components";

export const Background = styled.SafeAreaView`
    flex: 1;
    background-color: '#F0F4FF';
`;

export const ListBalance = styled.FlatList`
    max-height: 190px;
`;

export const Area = styled.View`
    background-color: #FFF;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    flex-direction: row;
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 14px;
    padding-bottom: 10px;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
    align-items: center;
`;

export const Title = styled.Text`
    margin-left: 5px;
    font-size: 20px;
    font-weight:bold;
    color: '#121212';
`;

export const List = styled.FlatList`
    flex: 1;
    background-color: #fff;
    margin-left: 15px;
    margin-right: 15px;
    margin-bottom: 1px;
    border-bottom-left-radius: 15px;;
    border-bottom-right-radius: 15px;;
`;
