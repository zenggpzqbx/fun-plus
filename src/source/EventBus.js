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
            let index = this.eventMap[eventName].findIndex(item => item.name === callbackFun.name)
            this.eventMap[eventName].splice(index,1)
        }
    }
    emit(eventName,data){
        if (this.hasEventName(eventName)) {
            let funList = this.eventMap[eventName]
            for (const fun of funList) {
                fun.call(this,data)
            }
        }
    }
    hasEventName(eventName){
        return this.eventMap.hasOwnProperty(eventName)
    }
    clearAll() {
        this.eventMap = {}
    }
}

export default EventBus