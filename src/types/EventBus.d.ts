export default EventBus;
declare class EventBus {
    eventMap: {};
    subscribe(eventName: any, callbackFun: any): void;
    unsubscribe(eventName: any, callbackFun: any): void;
    emit(eventName: any, data: any): void;
    hasEventName(eventName: any): boolean;
    clearAll(): void;
}
//# sourceMappingURL=EventBus.d.ts.map