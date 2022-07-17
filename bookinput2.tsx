import React,{useCallback,useMemo,useRef} from "react";
import {StyleSheet,TextInput,Button,Alert,SafeAreaView,TouchableOpacity} from "react-native";
import {TopBar,Text,View, UnderlineText} from "./theme";
import {Colors} from "react-native-paper";
import {useTheme} from "@react-navigation/native";
import {usebooklist, usereadSet, useToggleContext,usewriteContext} from "./ToggleThemeProvider";
import {useNavigation} from "@react-navigation/native";
import { createBook } from "./createBook";

const bookinput = ()=>{
    const navigation = useNavigation();
    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {colors}=theme;
    const {toggle,inc,dec,fSize} = useToggleContext();
    let {ti,na,da,st,fe,setna,setti,setst,setfe}=usewriteContext();
    const {read,setRead}=usereadSet();
    const {bookList,bookInput}=usebooklist();
    const goBack = useCallback(()=>navigation.canGoBack() && navigation.goBack(),[]);
    const gobookhome = useCallback(()=>{
        navigation.navigate("읽은 책");
       },[]);
    const action = () => {
        Alert.alert("Aleart","저장하시겠습니까?",[
            {text: "Yes", onPress:()=>{
                setRead(); 
                var book2=createBook(ti,na,st,fe);
                bookInput(book2);
                //console.log(bookList);
                setti("");
                setna("");
                setst("");
                setfe("");
                gobookhome();
                }
            },
            {text: "No", onPress: ()=>{
             
            }}
        ]);
       }
    const storyref=useRef<TextInput|null>(null);
    const feelref=useRef<TextInput|null>(null);
    return (
    <SafeAreaView style={[styles.view]}>
        <View style={[styles.view]}>
            <View style={{flex:1,padding:8}}>
                <Text onPress={()=>{storyref.current?.focus()}} style={styles.text}>줄거리: </Text>
                <TextInput ref={storyref} style = {[styles.input,{flexShrink:1,color:colors.text,fontSize:fSize-3}]} multiline ={true}
                    placeholder = "Enter the story"
                    onChangeText = {(text: string) =>setst(text)}
                    keyboardType = "default"
                />
                <Text onPress={()=>{feelref.current?.focus()}} style={styles.text}>느낀점: </Text>
                <TextInput ref={feelref} style = {[styles.input,{flexShrink:1,color:colors.text,fontSize:fSize-3}]} multiline ={true}
                    placeholder = "Enter the feeling"
                    onChangeText = {(text: string) => setfe(text)}
                    keyboardType = "default"
                />
            </View>
            {/* <Button title="Submit" onPress={action}/> */}
            <TouchableOpacity style = {styles.button} onPress = {action}>
                    <Text style = {styles.text}>submit</Text>
           </TouchableOpacity>
    </View>
    </SafeAreaView>
    );
    }
    const styles = StyleSheet.create({
        view: {flex:1,padding:10},
        bar: {height: 60, flexDirection: "row", padding: 5, alignItems:
        "center",justifyContent: "space-around"},
        content: {flex: 1, alignItems: "center", justifyContent: "center",
        flexDirection:"column"},
        text: {fontSize: 18},
        input:{height:100,marginBottom:20},
        button: {
            width: '100%',
            height: 35,
            borderWidth: 1,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:Colors.purple50
        },
    })
    
export default bookinput;