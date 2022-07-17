

interface Observable {
    subscribe(observer: Observer): Subscription
}
interface Observer {
    next(v: any): void;
    error(e: Error): void;
    complete(): void;
}
interface Subscription {
    unsubscribe(): void;
}