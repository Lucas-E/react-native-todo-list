import { isEmpty } from "lodash";
import React from "react";
import { TextInput } from "react-native";
import { defaultStyle } from "./style";

interface props {
  onChangeText: (text: string) => void;
  value: string;
  style: object | null;
  placeholder: string;
}

export function Input({
  onChangeText,
  value,
  style = null,
  placeholder,
}: props) {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={isEmpty(style) ? defaultStyle.input : style}
      placeholder={placeholder}
    />
  );
}
