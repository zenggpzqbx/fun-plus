import {count} from "../source";
test('count', () => {
    expect(count([1,2,2,2,23,4,2,3,4,5])).toEqual({ '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '23': 1 });
});
