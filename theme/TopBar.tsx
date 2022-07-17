import React from "react";
import type {FC} from "react";
import {StyleSheet, Switch} from "react-native";
import {useTheme} from "@react-navigation/native";
import {View} from "./View";
import type {ViewProps} from "./View";
import {Colors} from "react-native-paper";
import {useToggleContext} from "../ToggleThemeProvider";
//딱히 추가할 타입이 없어서 아까거 갖다씀.
//component안쪽에 있는게 children
export type TopBarProps = ViewProps & {};

export const TopBar:FC<TopBarProps> = ({children, style, ...props}) => {
    const theme = useTheme();
    const toggleTheme = useToggleContext();
    return (
    <View style = {[styles.topbar]} {...props}>
        {children}
    </View>);
    // <Switch value={theme.dark} onValueChange={toggleTheme}/>

}
const styles = StyleSheet.create({
    topbar:{
        width: "100%", 
        flexDirection: "row", 
        padding: 5, 
        alignItems:"flex-end",
        justifyContent: "space-between",
        backgroundColor:Colors.purple100
    }
})

// 이게 메인에서 <View primary style = {[styles.topBar]}>
// <Switch value={theme.dark} onValueChange={toggleTheme}/>
// </View> 요 내용이다.