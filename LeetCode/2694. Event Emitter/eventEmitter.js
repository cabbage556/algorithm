class EventEmitter {
    eventMap = new Map();

    subscribe(event, cb) {
        // event: the name of an event as a string
        // cb: a callback function

        if (this.eventMap.has(event)) {
            const eventCb = this.eventMap.get(event);
            eventCb.push(cb);
            this.eventMap.set(event, eventCb);
        } else {
            this.eventMap.set(event, [cb]);
        }

        return {
            unsubscribe: () => {
                let eventCb = this.eventMap.get(event);
                eventCb = eventCb.slice(1);
                this.eventMap.set(event, eventCb);
            },
        };
    }

    emit(event, args = []) {
        // event: the name of an event as a string
        // args: an optional array of arguments that will be passed to the callback

        const eventCallbacks = this.eventMap.get(event);
        if (!eventCallbacks) {
            return [];
        }

        return eventCallbacks.map((eventCb) => eventCb(...args));
    }
}

const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function cb1() {
//     return 5;
// });
// emitter.subscribe("firstEvent", function cb2() {
//     return 6;
// });
// console.log(emitter.emit("firstEvent"));

// emitter.subscribe("firstEvent", function cb1(...args) {
//     return args.join(",");
// });
// console.log(emitter.emit("firstEvent", [1, 2, 3]));
// console.log(emitter.emit("firstEvent", [4, 5, 6]));

// const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));
// console.log(emitter.emit("firstEvent", [1, 2, 3]));
// sub.unsubscribe();
// console.log(emitter.emit("firstEvent", [4, 5, 6]));

const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
sub1.unsubscribe();
console.log(emitter.emit("firstEvent", [5]));
