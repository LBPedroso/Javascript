const nums = [-10, 2, 100, -1, 40, -2, 0]

let qtdNumsNegativos = 0
let soma = 0
for(let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num < 0){
        qtdNumsNegativos++
    }   else{
        soma += num
    }
}
console.log("Soma dos numeros positivos é:", soma);
console.log("qtd dos numeros negativos é:", qtdNumsNegativos);

