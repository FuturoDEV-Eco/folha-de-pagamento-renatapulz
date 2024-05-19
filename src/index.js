const readline = require('readline');
const calcularINSS = require('./calculo_inss');
const calcularIR = require('./calculo_imposto_renda.js');
const calcularSalario = require('./calculo_salario_liquido.js');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('Para iniciar, digite seu nome: ', (nome) => {
    input.question('Digite seu CPF: ', (cpf) => {
        input.question('Digite o mês de pagamento (de 1 a 12): ', (mesPgto) => {
            input.question('Insira seu salário bruto: ', (salarioBruto) => {
                const valorINSS = calcularINSS(parseFloat(salarioBruto));
                const valorIR = calcularIR(parseFloat(salarioBruto));
                const salario = calcularSalario(parseFloat(salarioBruto), valorINSS, valorIR);

                console.log("--- Folha de Pagamento ---");
                console.log("Nome: ", nome);
                console.log("CPF: ", cpf);
                console.log("Salário Bruto: R$", salarioBruto);

                if (valorINSS == 0) {
                    console.log("INSS: O salário bruto excede o limite da tabela do INSS de R$ 7.786,02.\nConsulte site para ver o desconto dessa faixa salarial.");
                } else {
                    console.log("INSS: R$", valorINSS.toFixed(2));
                }

                if (valorIR == 0) {
                    console.log("Imposto de Renda: R$ 0");
                } else {
                    console.log("Imposto de Renda: R$", valorIR.toFixed(2));
                }

                console.log("Salário Líquido: R$", salario.toFixed(2));
                input.close();
            });
        });
    });
});
