var EventEmitter = require('events').EventEmitter;

var Counter = function (init) {
    this.init = init;
    this.increment = function () {
        this.init++;
        this.emit('incremented', this.init);
    }
}
Counter.prototype = new EventEmitter();

var counter = new Counter(10);
counter.on('incremented', function (count) {
    console.log(count);
});

counter.increment();
counter.increment();
