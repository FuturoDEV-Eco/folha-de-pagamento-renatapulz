function calcularSalario(salarioBruto, valorINSS, valorIR) {

    const valeTransporte = salarioBruto * 0.06;
    const unimed = 25.00;
    
    const salario = salarioBruto - valorINSS - valorIR - valeTransporte - unimed;
    return salario;
}

module.exports = calcularSalario;