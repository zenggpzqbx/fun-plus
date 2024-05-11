/**
 * 这是一个计数函数
 * @param  data - [1,2,2,2,23,4,2,3,4,5]
 * @returns
 */
function count(data) {
    if (!Array.isArray(data)) throw new Error('该函数的第一个参数必须是数组');
    let countRes = {}
    let itemProps = [...new Set(data)];
    let str = data.toString() + ",";
    itemProps.forEach(item => {
        let reg = new RegExp(`${item},`, 'g')
        countRes[`${item}`] = str.match(reg).length
    })
    return countRes
}
export default count
