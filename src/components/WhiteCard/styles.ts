import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import theme from "../../theme";

export const Container = styled.View`
  background-color: ${theme.COLORS.WHITE};
  border-radius: 10px;
  height: 100px;
  margin-top: 30px;
  min-height: 150px;
  height: auto;
  padding: 14px 18px;
  width: 80%;
`;

export const Title = styled.Text`
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONTS.TITLE};
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  width: 80%;
`;

export const Subtitle = styled.Text`
  color: ${theme.COLORS.BLACK};
  font-family: ${theme.FONTS.TEXT};
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 4px;
`;

export const styles = StyleSheet.create({
  shadow: {
    borderRadius: 10,
    minHeight: 150,
    shadowColor: `${theme.COLORS.BLACK}`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
