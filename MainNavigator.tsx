import {useTheme} from "@react-navigation/native";
import React,{useCallback} from "react";
import {StyleSheet, SafeAreaView, Switch} from "react-native";
import {View,TopBar,Text,UnderlineText} from "./theme";
// import {createDrawerNavigator, DrawerContentScrollView} from "@react-navigation/drawer";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
// import AntIcon from "react-native-vector-icons/AntDesign";
// import FontawesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import type {RouteProp, ParamListBase} from "@react-navigation/native";
import {Colors} from "react-native-paper";
import Home from "./Home";
import Bookpage from "./Bookpage";
import Setting from "./Setting";

const Tab = createBottomTabNavigator();
type TabBarIconProps = {focused: boolean, color: string, size: number};
const icons: Record<string, string[]> = {
    Home: ["home-circle", "home-circle-outline"],
    Bookpage: ["book-open-page-variant", "book-open-variant"],
    Setting: ["cog", "cog-outline"]
   };
const MainNavigator=()=>{
    const screenOptions = useCallback(({route}: {route: RouteProp<ParamListBase, string>})=>{
        return {
           
            headerShown: true,
            tabBarIcon: ({focused, color, size}:TabBarIconProps) => {
                const {name} = route;
                const focusedSize = focused ? size+6 : size;
                const focusedColor = focused ? Colors.purple300 : color;
                const [icon, iconOutline] = icons[name];
                const iconName = focused ? icon : iconOutline;
                return <Icon name = {iconName} size = {focusedSize} color = {focusedColor}/>;
            
            },
         
           
        }
    },[]);
     return (
     <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name = "Home" component = {Home} 
        options={{
            tabBarLabel: "홈",
        }}/>
        <Tab.Screen name = "Bookpage" component = {Bookpage} options={{tabBarLabel: "읽은 책",}}/>
        <Tab.Screen name = "Setting" component = {Setting} options={{tabBarLabel: "환경설정",}}/>
     </Tab.Navigator>);
    
}

export default MainNavigator;