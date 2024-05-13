import {pick} from "../source";

describe('pick', () => {
    test('第一个用例', () => {
        expect(pick({name:'abc', age:28, sex:'男'}, 'name')).toEqual({ 'name': 'abc'});
    });

    test('第二个用例', () => {
        expect(pick({name:'abc', age:28, sex:'男'}, ['name', 'age'])).toEqual({ 'name': 'abc', 'age': 28 });
    });
    test('第三个个用例', () => {
        expect(pick({name:'abc', age:28, sex:'男'}, ['name', 'age'], true)).toEqual(['abc', 28]);
    });
    test('第四个用例', () => {
        expect(pick({name:'abc', age:28, sex:'男'}, null, true)).toEqual(['abc', 28]);
    });
});
