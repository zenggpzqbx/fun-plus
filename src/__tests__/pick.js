import {pick} from "../source";
test('第一个用例', () => {
    expect(pick({name:'abc', age:28, sex:'男'}, 'name')).toEqual({ 'name': 'abc'});
});

test('第二个用例', () => {
    expect(pick({name:'abc', age:28, sex:'男'}, ['name', 'age'])).toEqual({ 'name': 'abc', 'age': 28 });
});
