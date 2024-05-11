/**
 *
 * @param  data - 一个对象：{a:1,b:2, c:3}
 * @param  prop - 可以是一个字符串，也可以是字符串数组
 * @returns
 */
function pick(data, prop){
    let result = {}
    let propOption = []
    if(typeof prop === 'string'){
        propOption.push(prop)
    }else if(Array.isArray(prop)){
        propOption = prop
    }
    propOption.forEach(item => {
        if(item in data){
            result[item] = data[item]
        }else{
            result[item] = undefined
        }
    })
    return result;
}
export default pick
