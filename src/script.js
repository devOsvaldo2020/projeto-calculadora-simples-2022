function calcular(tipo, valor) {
    if (tipo === "valor") {
        document.getElementById("visorResultado").value += valor.toString();

    } else if (tipo === "acao") {
        // Se o botão C foi clickado, limpa o visor - id visorResultado
        if (valor === "c") {
            document.getElementById("visorResultado").value = null;
        }

        if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') {
            document.getElementById('visorResultado').value += valor;
        }

        if (valor === '=') {
            let string_conta = document.getElementById('visorResultado').value;
            let resultado_conta = eval(string_conta);

            document.getElementById('visorResultado').value = resultado_conta;
        }
    }
}