import styled from "styled-components/native";
import theme from "../../theme";

export const FlexContainer = styled.View`
    background-color: ${theme.COLORS.BACKGROUND};
    border: 1px solid ${theme.COLORS.GRAY_200};
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
`;