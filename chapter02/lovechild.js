process.on('message', function (msg) {
    console.log(`parent said: ${msg.message} ${msg.count}`);
    process.send({ message: 'hello, parent!', count: ++msg.count });
    process.exit(0);
});
