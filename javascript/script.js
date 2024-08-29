function mostrarNum(num){
    const label = document.getElementById('label').innerHTML
    document.getElementById('label').innerHTML = label + num

    const historico = document.getElementById('historico').innerHTML
    document.getElementById('historico').innerHTML =  historico + num
    atualizarArrayNumeros()
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
    document.getElementById('historico').innerHTML = ""
}

function alternarSinal() {
    // Obtém o valor atual da label
    let label = document.getElementById('label').innerHTML;
    
    // Verifica se a label não está vazia
    if (label) {
        // Se o valor começa com um "-", remove-o para tornar o número positivo
        if (label.startsWith('-')) {
            document.getElementById('label').innerHTML = label.substring(1);
        } else {
            // Caso contrário, adiciona um "-" no início para tornar o número negativo
            document.getElementById('label').innerHTML = '-' + label;
        }
    }
}