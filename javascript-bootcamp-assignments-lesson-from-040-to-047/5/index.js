let needle = "JS";
let haystack = ["PHP", "JS", "Python"];


for (i = 0; i < haystack.length; i++)
{
	if (haystack[i] == needle)
	{
		console.log('Found');
	}
}


if(haystack.indexOf(needle))  
{  
        console.log("Found")  
}


if(haystack.includes(needle))  
{  
        console.log("Found")  
}