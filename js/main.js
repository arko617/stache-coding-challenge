var local = window.location.href;

for(var i = local.length-1; i > 0; i--){
	if(local[i] == "/"){
		local = local.substring(0, i+1);
		break;
	}
}

console.log(local);