document.querySelector('.list-item').textContent = 'Treinaweb'

//document.queryselector('.list-item').innerHTML = "<b>abc</b>"

var myLi = document.createElement('li')

myLi.innerText = 'Treinaweb2'

document.querySelector('ul').appendChild(myLi)

//var a = document.querySelector('#myInput').cloneNode(true)

//document.querySelector('#myInput').setAttribute('type', 'radio')

var myFunc = function(){
	console.log('elemento clicado')
	}


document.querySelector('#myInput').addEventListener('click', myFunc)
