/**
 * @return {Function}
 */
var createHelloWorld = function () { () => "Hello World" };

f = createHelloWorld()
f([])
f([28, 48, null, {}])

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
