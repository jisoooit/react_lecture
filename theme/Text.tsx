import React from "react";
import type {FC, ComponentProps} from "react";
import {Text as RNText} from "react-native";
import {useTheme} from "@react-navigation/native";
import {useToggleContext} from "../ToggleThemeProvider";
export type TextProps = ComponentProps<typeof RNText>;

export const Text: FC<TextProps> = ({style, ...props}) => {
    const {colors} = useTheme();
    //const Font=useFont();
    const {toggle,inc,dec,fSize} = useToggleContext();
    return <RNText style = {[{color: colors.text,fontSize:fSize}, style]} {...props}/>;
}

//없는거 새로 만든거임. 밑줄있는거
export const UnderlineText: FC<TextProps> = ({style, ...props}) => {
    const {colors} = useTheme();
    return (
        <RNText style = {[{
        textDecorationLine: "underline",
        color: colors.text,
        textDecorationColor: colors.text
        }, style]} {...props}/>
    );
}