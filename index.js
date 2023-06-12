// Questão 1
var DigiteNum = prompt ('Digite o Número:')
var primo = document.getElementById('DigiteNum')
function primo(num){
    for(var i = 2; i <= num; i++){
    var NumPrimo = true;
    
            for (var divisor = 2; divisor < i; divisor++){
            if(i % divisor == 0) {
            NumPrimo = false;
            }
        }
        if (NumPrimo) console.log(i);
    }
}

-------------------------------------------------------------------

//Questão 3
var DigiteNum = prompt ('Digite o Número:')
function fator(num) {
    var result = num;
    if (num == 0 || num == 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
fator(DigiteNum);

-------------------------------------------------------

// Questão 4
var DigiteNum = prompt ('Digite o Número')
function Calculo(num) {

    const Numero = parseInt(Math.sqrt(num));
    return Numero / 4 == num;
}

if (Calculo) {
    alert('É Quadrado perfeito');

} else {
    alert('Não é quadrado perfeito');
};
