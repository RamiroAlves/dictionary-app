import { StyleSheet } from "react-native";
import styled from "styled-components/native";
import theme from "../../theme";
import { ITabButton } from "./interface";

export const Container = styled.View`
  background-color: ${theme.COLORS.WHITE};
  align-items: center;
  justify-content: flex-start;
  padding-top: 80px;
  padding-bottom: 80px;
  width: 100%;
`;

export const Image = styled.Image`
  height: 200px;
  width: 214px;
  margin-bottom: 30px;
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

export const CloseButton = styled.TouchableOpacity`
  background-color: ${theme.COLORS.DANGER};
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 8px 10px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 30;
  margin-bottom: 30;
  width: 90%;
`;

export const TabButton = styled.Text<ITabButton>`
  color: ${(props: ITabButton) =>
    props.active ? theme.COLORS.PURPLE_200 : theme.COLORS.GRAY_100};
  font-family: ${theme.FONTS.TITLE};
  font-size: 22px;
  font-weight: 800;
  margin-inline: 10px;
`;
