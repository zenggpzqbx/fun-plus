(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FP = {}));
})(this, (function (exports) { 'use strict';

    /**
     * 这是一个计数函数
     * 样例1：let a = [1,2,2,2,23,4,2,3,4,5] => { '1': 1, '2': 4, '3': 2, '4': 2, '5': 1, '23': 1 }
     * @param {*} data
     * @returns
     */
    function count(data) {
        if (!Array.isArray(data)) throw new Error('该函数的第一个参数必须是数组');
        let countRes = {};
        let itemProps = [...new Set(data)];
        let str = data.toString() + ",";
        itemProps.forEach(item => {
            let reg = new RegExp(`${item},`, 'g');
            countRes[`${item}`] = str.match(reg).length;
        });
        return countRes
    }

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

    function pick(data, prop){
        let result = {};
        let propOption = [];
        if(typeof prop === 'string'){
            propOption.push(prop);
        }else if(Array.isArray(prop)){
            propOption = prop;
        }
        propOption.forEach(item => {
            if(item in data){
                result[item] = data[item];
            }else {
                result[item] = undefined;
            }
        });
        return result;
    }

    class EventBus {
        constructor() {
            this.eventMap = {};
        }
        subscribe(eventName, callbackFun) {
            if (!this.hasEventName(eventName)) {
                this.eventMap[eventName] = [];
            }
            this.eventMap[eventName].push(callbackFun);
        }
        unsubscribe(eventName, callbackFun) {
            if (this.hasEventName(eventName)) {
                let index = this.eventMap[eventName].findIndex(item => item.name === callbackFun.name);
                this.eventMap[eventName].splice(index,1);
            }
        }
        emit(eventName,data){
            if (this.hasEventName(eventName)) {
                let funList = this.eventMap[eventName];
                for (const fun of funList) {
                    fun.call(this,data);
                }
            }
        }
        hasEventName(eventName){
            return this.eventMap.hasOwnProperty(eventName)
        }
        clearAll() {
            this.eventMap = {};
        }
    }

    exports.EventBus = EventBus;
    exports.count = count;
    exports.debounce = debounce;
    exports.pick = pick;
    exports.throttle = throttle;

}));
