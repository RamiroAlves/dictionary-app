import styled from "styled-components/native";
import theme from "../../theme";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    border-radius: 10px;
    height: 100px;
    margin-top: 30px;
    min-height: 150px;
    padding: 8px 6px;
    width: 82%;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled.Text`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONTS.TITLE};
    font-size: 32px;
    font-weight: 800;
    text-transform: capitalize;
    width: 80%;
`;

export const Subtitle = styled.Text`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONTS.TEXT};
    font-size: 22px;
    font-weight: 300;
`;

export const styles = StyleSheet.create({
    background: {
        borderRadius: 10,
        minHeight: 150,
        paddingHorizontal: 18,
        paddingVertical: 14,
    },
});