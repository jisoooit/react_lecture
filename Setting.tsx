import React, { useState,useRef } from "react";
import { StyleSheet, Switch,TextInput,Button,TouchableOpacity} from "react-native";
//import {useTheme} from "react-native-paper";
import {usegoal, usegoalSet, useToggleContext} from "./ToggleThemeProvider";
import {TopBar, View, Text, UnderlineText} from "./theme";
import {Colors} from "react-native-paper";

import {useTheme} from "@react-navigation/native";

const Setting = ()=>{
    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {toggle,inc,dec,fSize} = useToggleContext();
    const goal=usegoal();
    const setgoal=usegoalSet();
    var num=0;
    return (
    <View style={[styles.view]}>
        <View primary style={[styles.bar]}>
            <Text style={[{textAlign:"center", flex:1,fontSize:fSize,fontWeight:"bold"}]}>환경설정</Text>
        </View>
        <View style={styles.view2}>
            <View card style={[styles.bar2]}>
                <Text onPress={toggle} style={[styles.text, { fontSize:fSize}]}>Darkmode</Text>
                <View card><Switch value={theme.dark} onValueChange = {toggle}/></View>
            </View>
            <View card style={[styles.bar2]}>
                <Text style={[styles.text, {fontSize:fSize}]}>FontSize</Text>
                <View card style={styles.bar4}>
                    <Text onPress={dec} style={{fontSize:fSize}}>--   </Text>
                    <Text style={{fontSize:fSize}}>{fSize}</Text>
                    <Text onPress={inc} style={{fontSize:fSize}}>   +</Text>
                </View>
            </View>
            <View card style={[styles.bar2]}>
                <Text style={[styles.text, { fontSize:fSize}]}>목표 권수 설정</Text>
                <View card style={styles.bar4}>
                    <TextInput style = {[styles.input]}
                        placeholder = "num"
                        onChangeText = {(text:string) => {num=Number(text)}}
                        keyboardType = "default"
                    />
                    {/* <Text style={styles.text}>권</Text> */}
                    <Button title="저장" onPress={()=>setgoal(num)}/>
                </View>
            </View>
           
        </View>
        
    </View>);
    }
    const styles = StyleSheet.create({
        view: {flex:1},
        view2:{flex:1,padding:15},
        bar: {height:60, flexDirection: "row", padding: 5, alignItems:
        "center",justifyContent: "space-between",backgroundColor:Colors.purple200},
        bar2: {flex:1, flexDirection: "row", padding: 5, alignItems:
        "center",justifyContent: "space-between"},
        // bar3: {flex:1, width:100,flexDirection: "row", padding: 5, alignItems:
        // "center",justifyContent: "space-evenly"},
        bar4:{width:100,flexDirection:"row",justifyContent:"flex-start"},
        content: {flex: 1, alignItems: "center", justifyContent: "center"},
        text: {fontSize: 20 , left:20},
        input:{width:50},
    })
export default Setting;