/**
 *
 * @param  callbackFun - 回调函数
 * @param  interval - 时间间隔，单位毫秒
 * @param  immediate - 是否立即执行
 * @returns
 */
function throttle(callbackFun, interval, immediate = false) {
    let startTime = null;
    let timeoutId = null;
    if (immediate) {
        return function runImmediate(data) {
            if (!startTime || Date.now() - startTime >= interval) {
                startTime = Date.now();
                callbackFun.call(undefined, data);
            }
        };
    } else {
        return function noRunImmediate(data) {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    callbackFun.call(undefined, data);
                    timeoutId = null;
                }, interval);
            }
        };
    }
}
export default throttle;
