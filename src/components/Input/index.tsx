import React from "react";
import { FlexContainer, styles, TextInput } from "./styles";
import { IInput } from "./interface";
import Ionicons from "@expo/vector-icons/Ionicons";
import theme from "../../theme";
import { TouchableOpacity } from "react-native";

const Input: React.FC<IInput> = ({ value, onChangeText, iconCallback }) => {
  return (
    <FlexContainer style={styles.shadow}>
      <Ionicons name="search" size={24} color={theme.COLORS.GRAY_200} />
      <TextInput value={value} onChangeText={onChangeText} />
      <TouchableOpacity onPress={iconCallback}>
        <Ionicons name="send-sharp" size={24} color={theme.COLORS.GRAY_200} />
      </TouchableOpacity>
    </FlexContainer>
  );
};

export default Input;
