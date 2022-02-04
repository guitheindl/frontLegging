$(document).ready(async function () {

	const queryString = window.location.href;
	const parametros = queryString.split('/');
	const cpfUrl = parametros[parametros.length - 1];

	const result = await requisicao(cpfUrl);

	$('#resultado').html(result);

	async function requisicao(cpf) {
		try {
			const urlAPI = `http://localhost:3000/buscaentrega?CPF=${cpf}`;

			const response = await fetch(urlAPI, { method: 'GET' });

			return response.text();
		} catch (error) {
			console.error(error);
		}
	}

	$('#btnConsultar').click(async function () {
		window.location.href = $('#nroBusca').val();
	});

	$('.tabs-left > ul > li > a').html('');
	$('.navbar-default').css('border-color', '#ff225b');
	$('.tabs-left').css('margin-left', '25%')

});