import React from "react";
import { FlexContainer, TextInput } from "./styles";
import { IInput } from "./interface";
import Ionicons from '@expo/vector-icons/Ionicons';
import theme from "../../theme";

const Input: React.FC<IInput> = ({ value, onChangeText }) => {
    return (
        <FlexContainer>
            <Ionicons name="search" size={24} color={theme.COLORS.GRAY_200} />
            <TextInput value={value} onChangeText={onChangeText} />
        </FlexContainer>
    )
}

export default Input