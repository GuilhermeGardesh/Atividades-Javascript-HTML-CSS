
function converter(){
    var algarismoRomano = document.getElementById("algarismoRomano").value
    var numerosArabicos = 0
    var valorDoAlgarismoDireita = 0
    var valorDoAlgarismoEsquerda = 0
    var valorDoAlgarismoAtual = 0        






    for (i=0 ; i <= algarismoRomano.length-1; i++) {
        algarimosPermitidos= ['I','V','X','L','C','D','M']
        
        switch (algarismoRomano.charAt(i)){
            case 'I': 
            valorDoAlgarismoAtual = 1
            break;
            case 'V': 
            valorDoAlgarismoAtual = 5
            break;
            case 'X': 
            valorDoAlgarismoAtual = 10
            break;
            case 'L': 
            valorDoAlgarismoAtual = 50
            break;
            case 'C': 
            valorDoAlgarismoAtual = 100
            break;
            case 'D': 
            valorDoAlgarismoAtual = 500
            break;
            case 'M': 
            valorDoAlgarismoAtual = 1000
            break;
        }

        switch (algarismoRomano.charAt(i-1)){
            case 'I': 
            valorDoAlgarismoEsquerda = 1
            break;
            case 'V': 
            valorDoAlgarismoEsquerda = 5
            break;
            case 'X': 
            valorDoAlgarismoEsquerda = 10
            break;
            case 'L': 
            valorDoAlgarismoEsquerda = 50
            break;
            case 'C': 
            valorDoAlgarismoEsquerda = 100
            break;
            case 'D': 
            valorDoAlgarismoEsquerda = 500
            break;
            case 'M': 
            valorDoAlgarismoEsquerda = 1000
            break;
        }

        switch (algarismoRomano.charAt(i+1)){
            case 'I': 
            valorDoAlgarismoDireita= 1
            break;
            case 'V': 
            valorDoAlgarismoDireita = 5
            break;
            case 'X': 
            valorDoAlgarismoDireita = 10
            break;
            case 'L': 
            valorDoAlgarismoDireita = 50
            break;
            case 'C': 
            valorDoAlgarismoDireita = 100
            break;
            case 'D': 
            valorDoAlgarismoDireita = 500
            break;
            case 'M': 
            valorDoAlgarismoDireita = 1000
            break;
        }

        numerosArabicos = numerosArabicos + valorDoAlgarismoAtual;

        if(valorDoAlgarismoDireita>valorDoAlgarismoAtual){
            numerosArabicos = numerosArabicos - (valorDoAlgarismoAtual*2)
        }



        // Avisos de digito errado.

        if(!algarimosPermitidos.some(item => item == algarismoRomano.charAt(i))){
            window.alert ('Algum algarismo romano foi digitado incorretamenten, por favor corrija!')
            break;
        }
    
        if(algarismoRomano.charAt(i)== algarismoRomano.charAt(i+3) && algarismoRomano.charAt(i) == algarismoRomano.charAt(i+2) && algarismoRomano.charAt(i) == algarismoRomano.charAt(i+1)){
            window.alert ('Quatro ou mais algarismos iguais foram digitados em sequência, por favor corrija!')
            break;
        }
        //A letra I é utilizada somente antes do V e do X
        if(valorDoAlgarismoAtual == 1 && valorDoAlgarismoDireita > valorDoAlgarismoAtual && valorDoAlgarismoDireita !== 5 && valorDoAlgarismoDireita !== 10){window.alert ('Algum algarismo foi digitado em ordem errada, por favor corrija!')
            break;
        }
        //A letra X é utilizada somente antes do L e do C
        if(valorDoAlgarismoAtual == 10 && valorDoAlgarismoDireita > valorDoAlgarismoAtual && valorDoAlgarismoDireita !== 50 && valorDoAlgarismoDireita !== 100){window.alert ('Algum algarismo foi digitado em ordem errada, por favor corrija!')
            break;
        }
        //A letra C é utilizada somente antes do D e do M
        if(valorDoAlgarismoAtual == 100 && valorDoAlgarismoDireita > valorDoAlgarismoAtual && valorDoAlgarismoDireita !== 505 && valorDoAlgarismoDireita !== 1000){window.alert ('Algum algarismo foi digitado em ordem errada, por favor corrija!')
            break;
        }
        
    }   
    alert('A conversão deste número romano '+ algarismoRomano +'  para arábico é: ' + numerosArabicos)

}
