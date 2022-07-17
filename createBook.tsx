import faker from 'faker';
import {iBook} from './Book';
import {useToggleContext,usewriteContext} from "./ToggleThemeProvider";

export const createBook = (ti:string, na:string, st:string, fe:string) => {
 const n = faker.name.findName();

 return {
    id:ti,
    title:ti,
    name: na,
    story:st,
    comments: fe,
 };
}