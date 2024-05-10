import {countBy} from "../source";
test('第一个用例', () => {
    expect(countBy([{zmb:'123'}, {zmb:'123'}, {zmb:'12344'}],  item => item.zmb)).toEqual({ '123': 2, '12344': 1 });
});
test('第二个用例', () => {
    expect(countBy([6.1, 4.2, 6.3],  Math.floor)).toEqual({'6': 2,'4': 1});
})
