/**
 * 这是一个计数函数
 * @param {*} data
 * @param {*} callback
 * @returns
 */
function countBy(data, callback) {
    if (!Array.isArray(data)) throw new Error('该函数的第一个参数必须是数组');
    let countRes = {}
    let countArray = data.map(callback)
    let itemProps = [...new Set(countArray)];
    let str = countArray.toString() + ",";
    itemProps.forEach(item => {
        let reg = new RegExp(`${item},`, 'g')
        countRes[`${item}`] = str.match(reg).length
    })
    return countRes
}
export default countBy
