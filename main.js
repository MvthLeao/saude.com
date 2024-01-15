function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var aceitoTermos = document.getElementById('aceito-termos').checked;

    if (nome === '' || isNaN(peso) || isNaN(altura) || !aceitoTermos) {
        alert('Por favor, preencha todos os campos e aceite os termos.');
        return;
    }

    var imc = peso / (altura * altura);

    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<h3>Resultado</h3>' +
        '<p>Nome: ' + nome + '</p>' +
        '<p>IMC: ' + imc.toFixed(2) + '</p>';
}
