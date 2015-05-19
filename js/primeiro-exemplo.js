// comentario de 1 linha

/* O codigo abaixo demonstra 
como exibir uma mensagem na
tela do usuario, utilizando "alert"
*/

//alert("Olá Mundo!!!");

//A mensagem aparece na aba console do browser
console.log("Iniciando aplicacao");

//ctrl+; -> comenta todo um bloco (previamente selecionado)
// function primeiraFuncao(){
// 	console.log("Dentro da primeira funcao");
// };

// primeiraFuncao();

//Atualmente a forma abaixo eh a mais usada
var novaFuncao = function(){
	console.log("Dentro da nova funcao");

	var idade = 18;
	if(idade >= 18){
		console.log("Maior de Idade...");
	}else{
		console.log("Menor de Idade...");
	}
};


novaFuncao();


var carro1 = {
	modelo: "BMW",
	cor: "Preta"
};

var carro2 = {
	modelo: "HB20",
	cor: "Cinza"
};

var carros = [];
carros.push(carro1);
carros.push(carro2);

//nao sou obrigado a declarar a variavel "i" abaixo, 
//mas seria o ideal
for (i = 0; i < carros.length; i++){
	console.log(carros[i].modelo);
};

var j = 0;
while(j<carros.length){
	console.log(carros[j].modelo);
	j++;
}


