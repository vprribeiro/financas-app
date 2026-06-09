import styled from "styled-components";

export const Background = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const Logo = styled.Image`
    margin-bottom: 25px;
`;
export const AreaInput = styled.View`
    flex-direction: row;

`;
export const Input = styled.TextInput`
    background-color: #FFF;
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-radius: 8px;
    color: #121212;
    margin-bottom: 15px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    justify-content: center;
    align-items: center;
    height: 45px;
    background-color: #3B3DBF;
    border-radius: 8px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 22px;
    color: #f0f0f0;
    font-weight: bold;
`;

export const Link = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    font-size: 16px;
    color: #171717;
`;
//Container, Logo, AreaInput, Input