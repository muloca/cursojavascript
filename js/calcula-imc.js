var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');



for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var tdAltura = paciente.querySelector(".info-altura");
	var tdImc = paciente.querySelector(".info-imc");

	var peso = tdPeso.textContent;
	var altura = tdAltura.textContent;

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if(!pesoValido){
		pesoValido = false;
		paciente.classList.add('paciente-invalido');
	}

	if(!alturaValida){
		alturaValida = false;
		paciente.classList.add('paciente-invalido');	
	}

	if(pesoValido && alturaValida){
	var imc = calculaImc(peso,altura);
	tdImc.textContent = imc;
	}else{
		tdImc.textContent = "Altura e/ou peso inválido";
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso < 300){
		return true;
	} else {
		return false;
	}
}

function validaAltura(altura) {
	if(altura <= 2.50 && altura >= 0){
		return true;
	} else {
		return false;
	}
}

function calculaImc(peso, altura) {
	var imc = 0
	imc = peso/ (altura * altura);
	return imc.toFixed(2);
}