import {useTheme} from "@react-navigation/native";
import React from "react";
import {StyleSheet, SafeAreaView, Switch} from "react-native";
import {View,TopBar,Text,UnderlineText} from "./theme";
import {Colors} from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";
import bookinput from "./bookinput";
import Bookhome from "./Bookhome";
import bookinput2 from "./bookinput2";
import {useToggleContext} from "./ToggleThemeProvider";


const Stack = createStackNavigator();

export default function SubNavigator(){
 const theme = useTheme();
 const {toggle,inc,dec,fSize} = useToggleContext();

 return (
     <Stack.Navigator  screenOptions = {{
        headerStyle:{
            backgroundColor: Colors.purple200
        },
        // headerTintColor: Colors.blue500,/
        headerTitleStyle: {
            fontWeight: "bold"
        },
        headerShown: true}}
    >
        <Stack.Screen name="읽은 책" component={Bookhome}></Stack.Screen>
        <Stack.Screen name="책 추가하기" component={bookinput}></Stack.Screen>
        <Stack.Screen name="책 저장하기" component={bookinput2}></Stack.Screen>
     </Stack.Navigator>
 )
}
const styles = StyleSheet.create({
 safe: {flex: 1},
 view: {flex:1, alignItems: "center", justifyContent: "space-between"},
 text: {fontSize: 20}
});
