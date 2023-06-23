/*

function suaNacionalidade () {
const nacionalidade = prompt ("Escreva aqui a sua nacionalidade").toLowerCase();

if (nacionalidade === "brasileira" ){
    console.log ("A sua nacionalidade é do Brasil")
} else if (nacionalidade === "argentina") {
    console.log ("A sua nacionalidade é da Argentina")
} else if (nacionalidade === "uruguaia" ) {
    console.log ("A sua nacionalidade é do Uruguai")
} else if (nacionalidade === "chilena") {
    console.log ("A sua nacionalidade é do Chile")
} else if (nacionalidade === "colombiana") {
    console.log ("A sua nascionalidade é da Colombia")
} else {
    console.log ("nacionalidade não encontrada")
}
*/

const nacionalidade = prompt("Digite a sua nacionalidade")

function verificarNacionalidade (nac){
    if (nac.toLowerCase() === "brasileira" || nac.toLowerCase() === "argentina" || nac.toLowerCase() === "uruguaia" || nac.toLowerCase() === "chilena" || nac.toLowerCase() === "colombiana")
{
    console.log(`A sua nacionalidade é: ${nac}`)

}else {
    console.log(`Não encontrei a sua nacionalidade`)
}
}

verificarNacionalidade(nacionalidade)