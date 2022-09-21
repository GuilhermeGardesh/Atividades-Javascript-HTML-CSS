function somar() {
    var num = document.getElementById("numero").innerHTML;
    document.getElementById("numero").innerHTML = parseInt(num) + 1;
}
function subtrair() {
    var num = document.getElementById("numero").innerHTML;
    if(parseInt(num)<=0){
        alert("Não é possível utilizar um número negativo...")
        resetar();
    }else
    document.getElementById("numero").innerHTML = parseInt(num) - 1;
    
}
function resetar(){
    document.getElementById("numero").innerHTML = 0;
}