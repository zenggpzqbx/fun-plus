/**
 *
 * @param  callbackFun - 回调函数
 * @param  delay - 延迟事件，单位是毫秒
 * @returns
 */
function debounce(callbackFun, delay) {
    let timeoutId = null;
    function run(data) {
        if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        timeoutId = setTimeout(() => {
            callbackFun.call(undefined, data);
        }, delay);
    }
    return run;
}
export default debounce;
