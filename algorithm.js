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
