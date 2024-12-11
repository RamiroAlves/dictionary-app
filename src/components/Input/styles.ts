import styled from "styled-components/native";
import theme from "../../theme";
import { StyleSheet } from "react-native";

export const FlexContainer = styled.View`
    background-color: ${theme.COLORS.WHITE};
    /* border: 1px solid ${theme.COLORS.GRAY_200}; */
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    height: 60px;
    width: 80%;
    padding-inline: 8px;
`;

export const TextInput = styled.TextInput`
    color: ${theme.COLORS.GRAY_100};
    font-size: 24px;
    width: 80%;
`;

export const styles = StyleSheet.create({
    shadow: {
        shadowColor: `${theme.COLORS.BLACK}`,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})