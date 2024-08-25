function mostrarNum(num){
    const nomeDaminhaCaixa = document.getElementById('label').innerHTML
    document.getElementById('label').innerHTML = nomeDaminhaCaixa + num
}
function calcular(){
    let label = document.getElementById('label').innerHTML
    if(label){
        document.getElementById('label').innerHTML = eval(label)
    }else{
        document.getElementById('label').innerHTML = ""
    }

}
function deletar(){
    const label = document.getElementById('label').innerHTML
    document.getElementById('label').innerHTML = label.slice(0, -1);
}
function reset(){
    document.getElementById('label').innerHTML = ""
}