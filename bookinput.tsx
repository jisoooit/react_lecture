import React,{useCallback,useRef} from "react";
import {StyleSheet,TextInput,Button,Alert,SafeAreaView,TouchableOpacity} from "react-native";
import {TopBar,Text,View, UnderlineText} from "./theme";
import {Colors} from "react-native-paper";
import {useTheme} from "@react-navigation/native";
import {useToggleContext, usewriteContext} from "./ToggleThemeProvider";
import {useNavigation} from "@react-navigation/native";

const bookinput = ()=>{
    const navigation = useNavigation();
    const theme = useTheme();
    //const {fonts, colors} = theme;
    const {colors}=theme;
    const {toggle,inc,dec,fSize} = useToggleContext();
    let {ti,setti,na,setna,da,st,fe}=usewriteContext();
    const goBack = useCallback(()=>navigation.canGoBack() && navigation.goBack(),[]);
    const goinput2 = useCallback(()=>navigation.navigate("책 저장하기"), []);

    const action = () => {
        Alert.alert("Aleart","저장하시겠습니까?",[
            {text: "Yes", onPress: ()=>{console.log("Yes")}},
            {text: "No", onPress: ()=>{console.log("No")}}
        ]);
       }
    
    const titleref=useRef<TextInput|null>(null);
    const nameref=useRef<TextInput|null>(null);
    return (
    <SafeAreaView style={[styles.view]}>
        <View style={[styles.view]}>
            <View style={{flex:1,padding:8}}>
                <Text onPress={()=>{titleref.current?.focus()}} style={styles.text}>제목: </Text>
                <TextInput ref={titleref} style = {[styles.input,{flexShrink:1,color:colors.text,fontSize:fSize-3}]} multiline ={true}
                    placeholder = "Enter the title"
                    onChangeText = {(text: string) => setti(text)}
                    keyboardType = "default"
                />
                <Text onPress={()=>{nameref.current?.focus()}} style={styles.text}>저자: </Text>
                <TextInput ref={nameref} style = {[styles.input,{flexShrink:1,color:colors.text,fontSize:fSize-3}]} multiline ={true}
                    placeholder = "Enter the writer"
                    onChangeText = {(text: string) => setna(text)}
                    keyboardType = "default"
                />
            
            
            </View>
           {/* <Button title="next" onPress={goinput2}/> */}
           <TouchableOpacity style = {styles.button} onPress = {goinput2}>
                    <Text style = {styles.text}>다음 페이지</Text>
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