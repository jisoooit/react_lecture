import React from "react";
import {View, StyleSheet, Text, Switch} from "react-native";
import {Colors} from "react-native-paper";
import {useTheme} from "@react-navigation/native";
import {useToggleContext} from "./ToggleThemeProvider";
import {NavigationContainer} from "@react-navigation/native";
import SubNavigator from "./SubNavigator";

const Book = ()=>{
    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {toggle,inc,dec,fSize} = useToggleContext();
    return (
        <SubNavigator/>
    )
    }
    const styles = StyleSheet.create({
    view: {flex:1},
    bar: {height: 50, flexDirection: "row", padding: 5, alignItems:
    "center",justifyContent: "space-around"},
    content: {flex: 1, alignItems: "center", justifyContent: "center"},
    text: {fontSize: 20, textAlign: "center"}
    })
export default Book;