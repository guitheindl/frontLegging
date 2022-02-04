$(document).ready(async function(){

	const cpf = '904.935.591-91';
	const testerequisicao = await requisicao();

	$('#resultado').html(testerequisicao);
	console.log(testerequisicao);

	async function requisicao() {
		try {
		  const urlAPI = `http://localhost:3000/buscaentrega?CPF=${cpf}`;
	  
		  const response = await fetch(urlAPI, {method : 'GET'});
	  
		  return response.text();
		} catch (error) {
		  console.error(error);
		}
	}

});