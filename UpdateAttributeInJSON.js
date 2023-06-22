function updateJSON(ob, key, modifier){
	for(let k in ob){
	 if(typeof ob[k] == 'object'){
	   updateJSON(ob[k], key, modifier)
	 }else if(k === key){
		 ob[k] = modifier;
		 return;
	 }
	}
}

let jsonObj = {'a':{'b':{'c':'test'}}};

updateJSON(jsonObj, 'c', 'xyz');

console.log(JSON.stringify(jsonObj));
