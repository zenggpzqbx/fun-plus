import isString from './typeCheck/isString';
import isArray from './typeCheck/isArray';

function normalization(value) {
    if (isString(value)) {
        return [value];
    } else if (isArray(value)) {
        return value
    } else {
        throw new TypeError('Expected an array or string');
    }
}

/**
 *
 * @param {Object} data - 一个对象：{a:1,b:2, c:3}
 * @param {(String/String[])} prop - 可以是一个字符串，也可以是字符串数组
 * @param {Boolean} returnArray
 * @returns {(Object/Array)}
 *
 * @example
 *
 * pick({a:1,b:2, c:3}, 'a')
 * => {a:1}
 *
 * pick({a:1,b:2, c:3}, ['a', 'b'])
 * => {a:1, b:2}
 *
 * pick({a:1,b:2, c:3}, 'a', true)
 * => [1]
 *
 */
function pick(data, prop, returnArray = false) {
    let result = {}
    let propOption = normalization(prop)
    propOption.forEach(item => {
        if (item in data) {
            result[item] = data[item]
        } else {
            result[item] = undefined
        }
    })
    if (returnArray){
        result = Object.values(result)
    }
    return result;
}

export default pick
