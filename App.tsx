import React, {useCallback, useState} from "react";
import {NavigationContainer, DefaultTheme, DarkTheme} from "@react-navigation/native";
import {ToggleProvider} from "./ToggleThemeProvider"
import {useColorScheme} from "react-native-appearance";
import MainNavigator from "./MainNavigator";
const App = ()=>{
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme == "dark" ? DarkTheme : 
  DefaultTheme);
  const toggleTheme = useCallback(()=>{
    setTheme(({dark}) => {
    return dark ? DefaultTheme : DarkTheme;
    });
  }, []);
  const [value,modify]=useState(20);
  const increse=useCallback(() => { 
    return modify((a:number) => {return ++a;});
    }, []);
  const decrese=useCallback(() => { 
    return modify((a:number) => {return --a;});
    }, []);
  const [goal,setGoal]=useState(5);
  const [read,setr]=useState(0);
  const setRead=useCallback(() => { 
    return setr((a:number) => {return ++a;});
    }, []);
  const [ti,setti]=useState("");
  const [na,setna]=useState("");
  const [st,setst]=useState("");
  const [fe,setfe]=useState("");
  let da=""; 

  const [bookList,setbookList]=useState(new Array<any>());
  const bookInput = useCallback((s:any)=>{
    setbookList(()=>{return [... bookList,s]});
   }, [bookList.length]);
  

 return (
 <ToggleProvider toggle = {toggleTheme} inc={increse} dec={decrese} fSize={value} goal={goal} setgoal={setGoal} read={read} setRead={setRead}
  ti={ti} setti={setti} na={na} setna={setna} da={da} st={st} setst={setst} setfe={setfe} fe={fe} bookList={bookList} bookInput={bookInput}>
    <NavigationContainer theme = {theme}>
      <MainNavigator/>
      {/* <DrawerNavigator></DrawerNavigator> */}
    </NavigationContainer>
 </ToggleProvider>);
}
export default App;