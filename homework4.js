//POW

const pow = function(base, n) {
	if (base < 1 || n < 1) {
		return;
	}
	if (n === 1) {
		return base;
	}
	return base * pow(base, n-1);

};
console.log(pow(2, 10));

//Triangle Stars


const triangleStars = function(height) {
if(height <= 0){
    return "";
  }
  
  const stars = function(numSpaces , numStars){
  if(numStars <= 0){return ""}
    
    
    const printSpaces = function(numSpaces){
      if(numSpaces <= 0){return ""}
      
      return " " + printSpaces(numSpaces - 1);
    };
    
    
    const printStars = function(numStars){
      if(numStars <= 0) {return "";}
      
      return "*" + printStars(numStars - 1);
    };
    
    console.log(printSpaces(numSpaces) + printStars(numStars));
    stars(numSpaces + 1, numStars - 2);
  };
  
 stars(0 , 2 *  height - 1);
  
}

triangleStars(30);

//Reverse

const reverse = function (str){
	const length = str.length;
const myReverse = function (str , num){
	if (num <= 0) {return ""}

	return str[num -1] + myReverse(str ,num - 1);
}
return myReverse(str, length);
}

console.log(reverse("Narek"));

//CheckerBoard

const stars = function (numStars){
	if (numStars <= 0) {return ""}


		return "* " + stars(numStars - 1);
};

const spaces = function(numSpaces){
	if (numSpaces <= 0) {return ""}


		return " *" + spaces(numSpaces - 1);
};

const checkb = function(num, height){
	if (height <= 0) {return ""}

	
		console.log(stars(num));
		console.log(spaces(num));
		return checkb(num, height - 1);
};

const checkerboard = function(size){
	if (size % 2 === 0) {
		return checkb(size , size / 2);
	}
	if (size % 2 !== 0) {
		return checkb(size , (size - 1)/ 2) + stars(size);
	}

};

console.log(checkerboard(9));

