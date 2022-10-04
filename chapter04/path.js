var path = require('path');

console.log(path.normalize('../one////two/./three.html'));
console.log(path.join("../", "one", "two", "three.html"));
console.log(path.dirname("../one/two/three.html"));
console.log(path.basename("../one/two/three.html"));
console.log(path.basename("../one/two/three.html", ".html"));
console.log(path.extname("../one/two/three.html"));
console.log(path.relative("/one/two/three/four", "/one/two/thumb/war"));
console.log(path.resolve('/one/two', '/three/four'));
console.log(path.resolve('/one/two/three', '../', 'four', '../../five'));
