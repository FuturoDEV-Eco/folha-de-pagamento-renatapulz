const readline = require('readline');
const calcularINSS = require('./calculo_inss');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Insira o salário bruto para calcular o valor a ser pago de INSS: ', (salarioBruto) => {
    const valorINSS = calcularINSS(parseFloat(salarioBruto));
    if (valorINSS != 0) {
        console.log("Valor a ser pago de INSS:", valorINSS.toFixed(2));
    }
    input.close();
    });
