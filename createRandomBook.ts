import faker from 'faker';
import {iBook} from './Book';

export const createRandomBook = ():iBook => {
 const n = faker.name.findName();
 return {
    id:faker.datatype.uuid(),
    title:faker.lorem.words(),
    name: n,
    story:faker.lorem.paragraph(),
    comments: faker.lorem.paragraph(),
 };
}