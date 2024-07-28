import React from "react";
import { PropsWithChildren } from "react";
import { View } from "react-native";
import { RowDefaultStyle } from "./style";

interface props extends PropsWithChildren {
  style?: object | null | undefined;
}
export function Row({ children, style = {} }: props) {
  return (
    <View style={{ ...RowDefaultStyle.container, ...style }}>{children}</View>
  );
}
