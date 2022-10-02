var events = require('events');
var EventEmitter = events.EventEmitter;

function getEmitter() {
    var emitter = new EventEmitter();
    // emitter.emit('start'); // race condition
    process.nextTick(function () {
        emitter.emit('start');
    });
    return emitter;
}

var myEmitter = getEmitter();
myEmitter.on('start', function () {
    console.log('Started');
});
