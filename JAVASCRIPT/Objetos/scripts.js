var myObj = {
	length: 15, 
	color: 'yellow',
	write: function(){
		console.log("teste");
	} 
}

var myArray = [5, 8, 4, 12];

// transformar object em Json
//JSON.stringify(myObj)

//transformar Json em object
// JSON.parse()

var a = myArray[0],
	b = myArray[1]
	c = myObj.color;

function sum(n1, n2){
	return n1 + n2;
}

var myArray2 = [5, 20];

console.log(sum(myArray2[0], myArray2[1]))

console.log(sum(...myArray2));

for (let a in myArray){
	console.log(myArray[a]);

}

var myObj2 = {
	d: 10,
	e: 20,
	f: 30
}

for (let b in myObj2){
	console.log(myObj2[b]);
} // let dentro do for

for (var a of myArray){
	console.log(a)
}
