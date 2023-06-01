let valor = parseInt(prompt("ingrese un valor 1 u 0"));

switch (valor) {
	case 0:
		sup();
		break;
	default:
		supt();
		break;
}

function supt() {
	let ladoA = parseInt(prompt("ingrese el lado A"));
	let ladoB = parseInt(prompt("ingrese el lado B"));
	const k = 2;
	let supf = (ladoA * ladoB) / k;
	alert("la superficie del triangulo es" + " " + supf);
	for (let i = 0; i < 3; i++) {
		alert("ya utilizaste tus" +""+ i +""+ "intentos");
		
	}
}

function sup() {
	let ladoA = parseInt(prompt("ingrese el lado A"));
	let ladoB = parseInt(prompt("ingrese el lado B"));
	let supf = ladoA * ladoB;
	alert("la superficie del cuadrado es" + " " + supf + "" + "m3");
	for (let i = 0; i < 3; i++) {
		alert("ya utilizaste tus"+""+i+"intentos");
		
	}
}







/*let ladoA=parseInt(prompt("ingrese el lado A"))
let ladoB=parseInt(prompt("ingrese el lado B"))
const k=2

let valor=parseInt(prompt("ingrese un valor 1 u 0"))

switch (valor) {
    case 0:
        sup()
    default:
        supt()
        break;
}



function supt(ladoA, ladoB) {
    let supf=ladoA*ladoB/k
    alert("la superficie del triangulo es" +" "+ supf)
}

supt(ladoA, ladoB, k)





function sup(ladoA, ladoB) {
    let supf=ladoA*ladoB
    alert("la superficie del cuadrado es" +" "+ supf)
}
sup(ladoA, ladoB)*/