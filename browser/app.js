function Unit(x, y){
	var path = new Path.Rectangle({
		point: [100, 50],
		size: [75, 150],
		strokeColor: 'black'
	});
}


function onResize(event){
	path.position = view.center;
}

function onFrame(event){
	path.rotate(0);
}