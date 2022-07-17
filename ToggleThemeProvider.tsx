import React, {createContext, useContext} from "react";
import type {FC} from "react";
export type ToggleContextType = {
 toggle: ()=>void,
 inc:()=>void,
 dec:()=>void,
 fSize:number,
 
 goal:number,
 setgoal:(a:number)=>void,
 read:number,
 setRead:()=>void

 ti:string,
 setti:(s:string)=>void,
 na:string,
 setna:(s:string)=>void,
 da:string,
 st:string,
 setst:(s:string)=>void,
 setfe:(s:string)=>void,
 fe:string,
 bookList:Array<any>,
 bookInput:(s:any)=>void

};
const defaultContext = {
 toggle: ()=>{},
 inc:()=>{},
 dec:()=>{},
 fSize:20,
 goal:5,
 setgoal:()=>{},
 read:5,
 setRead:()=>{},

 ti:"",
 setti:()=>{},
 na:"",
 setna:()=>{},
 da:"",
 st:"",
 setst:()=>{},
 setfe:()=>{},
 fe:"",
 bookList:[],
 bookInput:()=>{}

};
const ToggleContext = createContext<ToggleContextType>(defaultContext);
type ToggleContextProperties = {
 toggle: ()=>void,
 inc:()=>void,
 dec:()=>void,
 fSize:number,
 goal:number,
 setgoal:(a:number)=>void,
 read:number,
 setRead:()=>void

 ti:string,
 setti:(s:string)=>void,
 na:string,
 setna:(s:string)=>void,
 da:string,
 st:string,
 setst:(s:string)=>void,
 setfe:(s:string)=>void,
 fe:string,
 bookList:Array<any>,
 bookInput:(s:any)=>void

};
export const ToggleProvider:FC<ToggleContextProperties> = ({children, toggle,inc,dec,fSize,goal,setgoal,read,setRead,ti,setti,na,setna,da,st,setst,setfe,fe,bookList,bookInput}) =>
{
 const value = {toggle,inc,dec,fSize,goal,setgoal,read,setRead,ti,setti,na,setna,da,st,setst,setfe,fe,bookList,bookInput};
    return (
    <ToggleContext.Provider value = {value}>
        {children}
    </ToggleContext.Provider>
    );
}
export const useToggleContext = () => {
 const {toggle,inc,dec,fSize} = useContext(ToggleContext);
 return {toggle,inc,dec,fSize};
}
export const usegoal = () => {
    const {goal} = useContext(ToggleContext);
    return goal;
}
export const usegoalSet = () => {
    const {setgoal} = useContext(ToggleContext);
    return setgoal;
}
export const usereadSet = () => {
    const {read, setRead} = useContext(ToggleContext);
    return {read, setRead};
}
export const usewriteContext = () => {
    const {ti,setti,na,setna,da,st,setst,setfe,fe} = useContext(ToggleContext);
    return {ti,setti,na,setna,da,st,setst,setfe,fe};
}
export const usebooklist = () => {
    const {bookList,bookInput} = useContext(ToggleContext);
    return {bookList,bookInput};
}