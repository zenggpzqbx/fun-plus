/**
 * 这是一个计数函数
 * 样例2：let b = [{zmb:'123'}, {zmb:'123'}, {zmb:'12344'}] => { '123': 2, '12344': 1 }
 * @param {*} data
 * @param {*} prop
 * @returns
 */
function countByProp(data,prop) {
    if (!Array.isArray(data)) throw new Error('该函数的第一个参数必须是数组');
    let countRes = {}
    let countArray = data.map(item => item[prop])
    let itemProps = [...new Set(countArray)];
    let str = countArray.toString() + ",";
    itemProps.forEach(item => {
        let reg = new RegExp(`${item},`, 'g')
        countRes[`${item}`] = str.match(reg).length
    })
    return countRes
}
export default countByProp