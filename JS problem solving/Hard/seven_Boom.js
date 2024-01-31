function sevenBoom(arr) {
	let str=arr.toString();
	if(str.includes("7"))
		{
			return "Boom!";
		}
	else{
		return "there is no 7 in the array";
	}
}