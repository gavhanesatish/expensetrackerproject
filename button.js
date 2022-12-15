studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25
	}

	function findaverageage(studentObj){

	const keysarr = Object.keys(studentobj)

	let total = 0;

	keysarr.forEach((ele) => 
	total = total + studentobj[ele]);

	var averageAge = total/keysarr.length;
	return averageAge;
}

var average = findaverageage();
console.log('Average age = '+average);