import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUND};
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Image = styled.Image`
    height: 200px;
    width: 214px;
    margin-bottom: 50px;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.BLACK};
    font-family: ${theme.FONTS.TITLE};
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 10px;
`;

export const Subtitle = styled.Text`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONTS.TITLE};
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 30px;
    width: 80%;
    text-align: center;
`;