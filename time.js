let counter = 0;

function timeout() {
    setTimeout(function() {
        console.log('hi ' + counter++);
        timeout();
    }, 1000);
}

timeout();