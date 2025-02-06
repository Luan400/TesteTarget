//1 - O valor da variavel SOMA será 91, pois a variavel acumula os valores em K
// conforme é incrementado de 1 até 13. Então a variavel vai somar os primeiros 13 numeros naturais.//

//2 -
function verificarFibonacci(num) {
    let a = 0,
        b = 1;

    //ver se é 0 ou 1
    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }


    while (b < num) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    // verifica se o num pertence 
    if (b === num) {
        return `${num} pertence à sequência de Fibonacci.`;
    } else {
        return `${num} NÃO pertence à sequência de Fibonacci.`;
    }
}


let numero = 21; // Altere este número para testar outros casos
console.log(verificarFibonacci(numero));

//3 -
// faturamento mensal em formato JSON
const faturamento = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

// calcula as informações solicitadas
function calcularFaturamento(faturamento) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;


    faturamento.forEach(dia => {
        if (dia.valor > 0) {

            somaFaturamento += dia.valor;

            if (dia.valor < menorFaturamento) {
                menorFaturamento = dia.valor;
            }

            if (dia.valor > maiorFaturamento) {
                maiorFaturamento = dia.valor;
            }

            diasComFaturamento++;
        }
    });

    // calcula a média de faturamento
    let mediaFaturamento = somaFaturamento / diasComFaturamento;


    let diasAcimaDaMedia = 0;
    faturamento.forEach(dia => {
        if (dia.valor > mediaFaturamento) {
            diasAcimaDaMedia++;
        }
    });


    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}


const resultado = calcularFaturamento(faturamento);
console.log("Menor Faturamento: R$", resultado.menorFaturamento);
console.log("Maior Faturamento: R$", resultado.maiorFaturamento);
console.log("Dias com faturamento superior à média:", resultado.diasAcimaDaMedia);

//4 -

// Dados 
const faturamentos = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// faturamento total
const totalFaturamento = Object.values(faturamentos).reduce((acc, valor) => acc + valor, 0);


const participacoes = Object.keys(faturamentos).map(estado => {
    const percentual = (faturamentos[estado] / totalFaturamento) * 100;
    return {
        estado: estado,
        percentual: percentual.toFixed(2) + '%'
    };
});

// Exibir resultados
console.log(`Faturamento Total: R$${totalFaturamento.toFixed(2)}`);
participacoes.forEach(item => {
    console.log(`${item.estado}: ${item.percentual}`);
});

//5 -


function inverterString(str) {
    let strInvertida = "";

    // Percorrer a string de trás para frente e construir a string invertida
    for (let i = str.length - 1; i >= 0; i--) {
        strInvertida += str[i];
    }

    return strInvertida;
}

// Exemplo 
const entrada = prompt("Digite uma string para inverter:");


const resultadoInvert = inverterString(entrada);
console.log("String invertida:", resultadoInvert);