function min(numbers){
	var min = numbers[0];
	for(var i = 0; i < numbers.length; i++){
		if(numbers[i] < min){
			min = numbers[i];
		}
	}
	return min;
}