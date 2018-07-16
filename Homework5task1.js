
const rand = function(num) {
	return Math.floor(Math.random() * num) + 1;
};

const colorArray = ['red', 'yellow', 'green'];

const createPoints = function(count, canvasWidth, canvasHeight){

	const points = [];
    

	
 	const GcenqArrayLol = function(num){
 		if (num < 1) {return ""}
 	

 			points.push({
 				x: rand(canvasWidth - 30),
 				y: rand(canvasHeight - 30),
 				width: 30,
 				height: 30,
 				yDelta: 1,
 				xDelta: 1,
 				color: colorArray[rand(3)-1]
 			});
 		GcenqArrayLol(num - 1);
 	};

 	GcenqArrayLol(count);
 	return points;
  };

     
      