import React from "react";
import {useNavigation} from "@react-navigation/native";
import MainNavigator from "./MainNavigator";
import { useCallback } from "react";
import {usegoal,usereadSet,useToggleContext} from "./ToggleThemeProvider";
import {useTheme} from "@react-navigation/native";
import {StyleSheet,Switch} from "react-native";
import {TopBar,Text, View,UnderlineText} from "./theme";
import {Colors} from "react-native-paper";

const Home = ()=>{
    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {colors}=theme;
    const {read,setRead}=usereadSet();
    const {toggle,inc,dec,fSize} = useToggleContext();
    const goal=usegoal();
    return (
    
    <View style={[styles.view]}>
        <View style={[styles.bar]}>
            <Text style={[{textAlign:"center", flex:1,fontSize:fSize,fontWeight:"bold"}]}>Book</Text>
        </View>
        <View style={styles.view2}>
            <View card style={[styles.content]}>
                <Text style={[styles.text2,{fontSize:fSize}]}>목표</Text>
                <Text style={[styles.text,{fontSize:fSize+25}]}>{goal}권</Text>
            </View>
            <View style={[{width:'100%',height:3,backgroundColor:Colors.purple400}]}></View>
            <View card style={[styles.content]}>
                <Text style={[styles.text2,{fontSize:fSize}]}>읽은 책 수</Text>
                <Text style={[styles.text,{fontSize:fSize+25}]}>{read}권</Text>
            </View>
        </View>
      
    </View>);
    }
    const styles = StyleSheet.create({
        view: {flex:1},
        view2:{flex:1,padding:15},
        bar: {height: 60, flexDirection: "row", padding: 5, alignItems:
        "center",justifyContent: "space-around",backgroundColor:Colors.purple200},
        content: {flex: 1, alignItems: "center", justifyContent: "center",padding:5,flexDirection:"column"},
        text: {fontSize: 50, textAlign: "center"},
        text2:{fontSize: 20, textAlign: "center",marginBottom:50 }
    })
export default Home;