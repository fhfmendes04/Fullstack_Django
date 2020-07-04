var Elevator = {
	floor: 0,
	total: 3,
	up(){
		if(this.floor < this.total){
			this.floor++;
		}
		this.print();
	},
	down(){
		if(this.floor > 0){
			this.floor--;
		}
		this.print();
	},
	print(){
		console.log(`Andar: ${this.floor}`);
	}
}

Elevator.print();