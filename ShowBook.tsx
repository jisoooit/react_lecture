import React, {useCallback} from 'react';
import {Alert, TouchableOpacity,SafeAreaView,StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';
import {TopBar,Text, View,UnderlineText} from "./theme";
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {iBook} from './Book';
import {useTheme} from "@react-navigation/native";

// import {useTheme} from "react-native-paper";
import {useToggleContext} from "./ToggleThemeProvider";

export default function ShowBook (book: iBook){

    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {toggle,inc,dec,fSize} = useToggleContext();
    return (
        <SafeAreaView style={[styles.sav]}>
            <View card style={[styles.view,{flex:1,alignItems:"center"}]}>
            <Text style={[{fontSize:fSize,alignItems:"flex-start"}]}>책 기록 예시</Text>
                <Text style={[styles.title,{fontSize:fSize}]}>제목: {book.title}</Text>
                <Text style={[styles.story,{fontSize:fSize-5}]}>저자: {book.name}</Text>
                {/* <Text style={[styles.text,{fontSize:fSize-5}]}>{book.createdDate.toDateString()}</Text> */}
                <Text style={[styles.story,{fontSize:fSize-5}]}>줄거리: {book.story}</Text>
                <Text style={[styles.story,{fontSize:fSize-5}]}>느낀점: {book.comments}</Text>
            </View> 
        </SafeAreaView>

    );
}

const styles=StyleSheet.create({
    sav:{
        borderBottomWidth:3,
        borderBottomColor:Colors.purple200,
      
        paddingTop:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10
    },
    view:{
        padding:10,
    },
    title:{
        fontWeight:"bold",
        marginBottom:10
    },
    story:{
        marginBottom:10
    },
});