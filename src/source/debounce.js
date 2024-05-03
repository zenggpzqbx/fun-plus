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