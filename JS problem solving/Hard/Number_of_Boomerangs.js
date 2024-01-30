function countBoomerangs(arr) {
	let c=0;
	for(let i=0;i<arr.length-2;i++)
		{
			if(arr[i]==arr[i+2] && arr[i]!=arr[i+1])
				{
					c++;
				}
		}
	return c;
}