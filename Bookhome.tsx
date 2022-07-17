import React ,{useCallback,useMemo }from "react";
import {StyleSheet, SafeAreaView} from "react-native";
import {TopBar,Text, View,UnderlineText} from "./theme";
import { useNavigation } from "@react-navigation/core";
import { ScrollView } from "react-native-gesture-handler";
import ShowBook from "./ShowBook";
import { createRandomBook } from "./createRandomBook";
import {useTheme} from "@react-navigation/native";
import {usebooklist,usereadSet,useToggleContext,usewriteContext} from "./ToggleThemeProvider";
import {createBook} from "./createBook";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from "react-native-paper";

export default function Bookhome(){
    const navigation = useNavigation();
    const goRight = useCallback(()=>navigation.navigate("책 추가하기"), []);
    
    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {toggle,inc,dec,fSize} = useToggleContext();
    let {ti,na,da,st,fe}=usewriteContext();
    const {read,setRead}=usereadSet();
    const book = useMemo(() => {return new Array(1).fill(null).map(createRandomBook)}, [])
  
    const {bookList,bookInput}=usebooklist();
   
    const bl=bookList.map((b,index)=>{
        return (

             <SafeAreaView key={index} style={[styles.sav]}>
             <View card style={[styles.view3,{flex:1,alignItems:"center"}]}>
                 <Text style={[styles.title,{fontSize:fSize}]}>제목: {b.title}</Text>
                 <Text style={[styles.story,{fontSize:fSize-5}]}>저자: {b.name}</Text>
                 <Text style={[styles.story,{fontSize:fSize-5}]}>줄거리: {b.story}</Text>
                 <Text style={[styles.story,{fontSize:fSize-5}]}>느낀점: {b.comments}</Text>
             </View> 
         </SafeAreaView>
        );
    })
   
    return (<SafeAreaView style = {styles.safe}>
        <View style = {[styles.view]}>
            <TopBar>
                <Text></Text>
                <Icon name="book-plus-multiple" size={30} color={Colors.purple500} onPress={goRight}/>
                {/* <Text onPress={goRight} style = {styles.text}>기록</Text> */}
            </TopBar>
            <View style = {styles.view2}>
                <ScrollView style={{width:'100%'}}>
                   {ShowBook(book[0])}
                   {bl}
                </ScrollView>
                
            </View>
        </View>
    </SafeAreaView>);
}
const styles = StyleSheet.create({
 safe: {flex: 1},
 view: {width:'100%',flex:1, alignItems: "center",padding:8},
 view2: {width:'100%',flex:1, alignItems: "center"},
 text: {fontSize: 20},
 sav:{
    borderBottomWidth:3,
    borderBottomColor:Colors.purple200,
    // borderLeftWidth:2,
    // borderLeftColor:Colors.purple100,
    // borderRightWidth:2,
    // borderRightColor:Colors.purple100,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:10
},
view3:{
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