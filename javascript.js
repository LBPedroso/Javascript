function helloWorld() {
    console.log("Ola mundo")
}

helloWorld()
helloWorld()

console.log("teste".toUpperCase())
console.log(parseInt(3.5))

function digaOiPara(nome) {
    console.log(Ola,$,{nome})
}

let teste
console.log(teste)

digaOiPara("Igor")
digaOiPara()

function calcularArea(x, y) {
    console.log(x * y)
}

function areaRetangulo(x, y) {
    if (x && y) {
        calcularArea(x, y)
    }
}

areaRetangulo(2, 3, "\n")

//Exercicio: crie um função que recebe um numero por parametro e informa se ele é par ou impar

function parOuImpar (x){
    if (x %2===0){console.log ("PAR")}
else{
console.log("IMPAR")
}
    
}
parOuImpar(4)
parOuImpar(7)
parOuImpar(9)
parOuImpar(8)

// Exercicio: fazer uma funcao para cada operação (soma, divisão, subtracao e multiplicação)
//soma

function soma (a, b) {
    const result = a + b
    console.log ("Valor da Soma:", result, "\n")
    return result
    }
    const resultado = soma(2, 3)
    
    
    //subtração
    function sub (a, b) {
        const result = a - b
        console.log ("Valor da Sub:", result, "\n")
        return result
        }
        const subtração = sub(2, 3)
    
        //DIVISÃO
    
        function dividir (a, b) {
            const result = a / b
            console.log ("Valor da Divisão:", result, "\n")
            return result
            }
            const divsao = dividir(6, 3)
    
            //MULTIPLICAÇÃO
    
            function multiplicar (a, b) {
                const result = a * b
                console.log ("Valor da mult:", result, "\n")
                return result
                }
                const multiplicando = multiplicar(6, 3)
    
    // Exercicio: fazer uma funcao para cada operação (soma, divisão, subtracao e multiplicação) opção 2
    
    function mais (a, b){
    return a+b
    }
    
    function menos (a, b){
    return a-b
    }
    
    function dividindo (a, b){
    return a/b
    }
    
    function multiplicai (a, b){
    return a*b
    }
    
    console.log("somando:",mais(10,10))
    console.log("subtraindo:", menos(10,10))
    console.log("dividiu:", dividindo(10,10))
    console.log("multiplicou:", multiplicai(10,10), "\n")
    
    
    //EXERCIO: FAZER UMA FUNÇÃO QUE RETORNO O MAIOR NUMERO ENTRE DOIS....
    
    function maiornumero (x, y ) {
    return x>y ? x:y
    
    }
    console.log("Maior numero é:",maiornumero(55,12,), "\n")
    
    //EXERCIO: FAZER UMA FUNÇÃO QUE RETORNO O MAIOR NUMERO ENTRE DOIS (OPÇÃO 2)
    
    function maiornumero2 (x, y){
        if (x>y) return x
        else return Y
    }
    console.log(maiornumero2 (100,55))
    
    
    //ESCREVA UMA FUNÇÃO QUE RECEBE AS 03 NOTAS DE UM ALUNO POR PARAMETRO E UMA LETRA:
    //SE A LETRA FOR A: CALCULAR A MÉDIA ARITMÉTICA DAS NOTAS DO ALUNO]
    //SE A LETRA FOR P: CALCULAR A MÉDIA PONDERADA (PESOS: 5,3 E 2)
    
    
    function media(n1, n2, n3, tipo) {
        if (tipo === 'A') {
            return (n1 + n2 + n3) / 3
        } else if (tipo === 'P') {
            return (n1 * 5 + n2 * 3 + n3 * 2) / 10
        }
    }
    
    console.log(media(8, 10, 6, 'A'))
    console.log(media(8, 10, 6, 'P'))
    
    //constante anonima das 4 operações
    
    const vamosdividir=function (x,z){
        return (x/z)
    }
    
    console.log(vamosdividir(6,2))
    
    
    const vamossomar=function (x,z){
        return (x+z)
    }
    
    console.log(vamossomar(6,2))
    
    //fução média
    
    function calcMedia (x1, x2){
        return (x1 + x2) /2
    
    }
    console.log(calcMedia(10, 30))
    
    //arrow function--ideia de simplificar funcoes
    
    const arrowfunc = () => {
        console.log ("funcao de arrow")
    }
    arrowfunc ()
    
    
    //simplificando uma função
    
    const pow = (x) =>x ** 2
    console.log(pow(9))
    
    //exerccio: fazer 04 funcoes usando ARROW FUNCTION
    
    const subtracao = (a, b) => a - b;
    console.log(subtracao(10,5));
    
    const multiplicar2 = (a, b) => a * b;
    console.log(multiplicar2(12,12));
    
    const divisao2 = (a, b) => a / b;
    console.log(divisao2(24,2));
    
    const adicao2 = (a, b) => a + b;
    console.log(adicao2(20,20));
    const pessoas = ["alex", "nayara", "pedro", "isa"]
console.log(pessoas)
console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])
console.log(pessoas[3])
console.log(pessoas[4])
console.log(pessoas[5]) //quando não existr a posição ele retorna undefine
console.log(pessoas.length) //comando lenght mostra a quantidade posições dentro do comando.

pessoas.push("juvenal") //comando PUSH adiciona um elemento na ultima posicao
console.log(pessoas)

pessoas.unshift("piu") // comando UNSHIFT adiciona um elemento no inicio
console.log(pessoas)

pessoas.pop() // comando POP remove o ultimo elemento da posicao
console.log(pessoas)

pessoas.shift () // comando SHIFT remove o primeiro elemento da posicao
console.log(pessoas)


const varios =["CERVEJA", 100, "SEXTA FEIRA", "VALEU"]
console.log(varios)
