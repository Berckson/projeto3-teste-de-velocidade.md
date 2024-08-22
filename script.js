let veiculo1 = prompt('Digite o nome do primeiro do veiculo')
let veiculo2 = prompt("digite o nome do segundo veiculo" )
let veiculo1VL = parseInt(prompt(`Velocidade de ${veiculo1}`))
let veiculo2VL = parseInt(prompt(`Velocidade de ${veiculo2}`))
if (veiculo1VL > veiculo2VL) {
    alert(`O ${veiculo1} está a ${veiculo1VL}km , e está mais rapido que o ${veiculo2} \n, que está a ${veiculo2VL}km`)
} else if (veiculo2VL > veiculo1VL) {
    alert(`o ${veiculo2} está a ${veiculo2VL}km , e está mais rapido que o ${veiculo1} \n , que está a ${veiculo1VL}`)
} else {
    alert(`tanto ${veiculo1} quanto ${veiculo2} estão na mesma velocidade de ${veiculo1VL}`)
}