const calculateSquare = (n, callback) => {
    setTimeout(function () {
        if (typeof n !== 'number') {
            callback(new Error('Argument of type number is expected'));
            return;
        }
        const result = n * n;
        callback(null, result);
    }, 1000);
}