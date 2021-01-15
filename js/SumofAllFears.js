var givenArray = new Array();
var allSumsArray = new Array();

function sumOfAllFearsSorted(givenArray, value) {
	let target = value;
	let result = 0;
	var unsortedArray = [...givenArray];
	//sort the array
	unsortedArray.sort(function(a, b) {
		return a-b;
	})

	let lIndex = 0;
	let hIndex = (unsortedArray.length-1);

	do {
		result = (unsortedArray[lIndex] + unsortedArray[hIndex])
		if(target == result) {
			return true;
		} if(target < result) {
			hIndex--;
		} if(target > result) {
			lIndex++;
		}
		//console.log(result);
	} while (lIndex != hIndex)

	return false;
}

function displaySum() {
	

	if(givenArray.length == 0) {
		givenArray = [10, 15, 3, 7];
	}

	let value = document.getElementById("value").value;
	document.getElementById("givenArray").innerHTML = givenArray.toString();
	let result = sumOfAllFearsSorted(givenArray, value);
	document.getElementById("result").innerHTML = result.toString();

}

function reset() {
	document.getElementById("givenArray").innerHTML = "---";
	document.getElementById("result").innerHTML = '';
	document.getElementById("value").value = '';
	givenArray = [];
}

function getRandomValue() {
	let max = 49;
	var num = Math.floor(Math.random() * Math.floor(max));
	document.getElementById("value").value = num+1;
}

function getRandomArraySize() {
	let max = 8;
	var num = Math.floor(Math.random() * Math.floor(max));
	return num;
}

function getRandomArrayValue() {
	let max = 49;
	var num = Math.floor(Math.random() * Math.floor(max));
	return num;
}

function getRandomArray() {
	givenArray = [];
	//arraySize range(2,50)
	let arraySize = (getRandomArraySize()+2);
	for(x=0; x<arraySize; x++){
		//array values range(1,50)
		givenArray.push(getRandomArrayValue()+1);
	}
	document.getElementById("givenArray").innerHTML = givenArray.toString();
}