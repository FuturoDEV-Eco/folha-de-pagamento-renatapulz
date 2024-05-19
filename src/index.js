const readline = require('readline');
const calcularINSS = require('./calculo_inss');
const calcularIR = require('./calculo_imposto_renda.js');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Insira o salário bruto para calcular o valor a ser pago de INSS: ', (salarioBruto) => {
    const valorINSS = calcularINSS(parseFloat(salarioBruto));
    const valorIR = calcularIR(parseFloat(salarioBruto));
    if (valorINSS == 0) {
        console.log("Atenção: O salário bruto excede o limite da tabela do INSS de R$ 7.786,02.");
    } else {
        console.log("Valor a ser pago de INSS:", valorINSS.toFixed(2));
    }
    
    if (valorIR == 0) {
        console.log("Isento de imposto de renda");
    } else {
        console.log("Valor a ser pago de Imposto de renda:", valorIR.toFixed(2));
    }
    
    input.close();
    });
