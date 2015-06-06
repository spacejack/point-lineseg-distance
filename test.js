var pldist = require('./index');

//  Test various cases of distance from point to line segment.
//  (pointX, pointY, lineX1, lineY1, lineX2, lineY2)

console.log(pldist(0,0, 1,-1,1,1));   // perpendicular distance is 1
console.log(pldist(0,0, -1,-1,1,1));  // point on line (0 distance)
console.log(pldist(1.5,-33, 2.5,-10,0.3,45));  // arbitrary line, point
console.log(pldist(0,0.1, -10000000,-100,10000000,100));  // long line but close distance to point
console.log(pldist(0,-0.1, -10000000,-100,10000000,100)); // point on other side, same dist
console.log(pldist(0,-0.1, 10000000,-100,-10000000,100)); // mirrored line segment
console.log(pldist(0,0, -20000000,0,-10000000,0)); // point is far past the right line endpoint
console.log(pldist(1,1, 0,0,0,0)); // 0 length line
console.log(pldist(0,0, 0,0,0,0)); // 0 length line, 0 distance
