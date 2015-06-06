/**
 *  Calculate nearest distance from point to line segment.
 *  @param {number} px Point x coord
 *  @param {number} py Point y coord
 *  @param {number} x1 Line segment endpoint 1 x coord
 *  @param {number} y1 Line segment endpoint 1 y coord
 *  @param {number} x2 Line segment endpoint 2 x coord
 *  @param {number} y2 Line segment endpoint 2 y coord
 *  @return Minimum distance from point to line segment.
 */
module.exports = function( px, py, x1, y1, x2, y2 ) {

	// squared length of line segment
	var lsq = distSq(x1, y1, x2, y2);

	// if segment length is 0, treat as a single point and we're done.
	if( lsq <= 0 )
		return dist(x1, y1, px, py);

	// intersection
	var r = (((px - x1) * (x2 - x1)) +
	         ((py - y1) * (y2 - y1))) / lsq;

	// If perpendicular intersection is beyond lineseg ends
	// return distance to nearest endpoint..
	if( r < 0.0 )
		return dist( x1, y1, px, py );
	else if( r > 1.0 )
		return dist( x2, y2, px, py );

	// perpendicular intersection is within line seg, so
	// the point is closer to the line than the endpoints.
	// Calc dist from point to this intersection...
	r = ( ((y1 - py) * (x2 - x1)) -
	      ((x1 - px) * (y2 - y1)) ) / Math.sqrt(lsq);

	// Note: don't perform abs if you want to know what side of the line x,y is on.
	// TODO: Useful to have an output object that can store side sign?
	return Math.abs(r);

};

function dist( x1, y1, x2, y2 ) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return Math.sqrt(dx * dx + dy * dy);
}

function distSq( x1, y1, x2, y2 ) {
	var dx = x2 - x1;
	var dy = y2 - y1;
	return dx * dx + dy * dy;
}
