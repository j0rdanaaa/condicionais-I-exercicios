/*let idade
let ehMaiorIdade
let cursandoOutraFaculdade

if(){
    let idade = Number (prompt("Qual a sua idade"))
    let ehMaiorIdade = Boolean(prompt("concluiu o ensino médio? responda true ou false"))
    let cursandoOutraFaculdade = Boolean(prompt("esta cursando a faculdade? responda true ou false"))

    
    if(idade >= 18 ){
    console.log ("tem 18 anos")
    }else{
    
    }
        console.log ("tem menos de 18 anos")	
    }
    if (terminou === true){
        console.log ("terminou o ensino médio")
    } else {
        console.log ("não terminou o ensino médio")
    } 
    if (faculdade === false){
    console.log ("está cursando alguma faculdade")
    } else{ 
        console.log ("está cursando nehuma faculdade")
    
    
    }
*/
    const verificarPessoa = (idade, ensMed, faculdade) => {
        if(Number(idade) >=18) {
            console.log("a pessoa tem mais de 18 anos")
        } else {
            console.log("a pessoa tem menos de 18 anos.")
        }
        if (ensMed === true){
            console.log("a pessoa concluiu o ensino médio")
        } else {
            console.log("a pessoa não concluiu o ensino médio")
        }
        if (faculdade === true){
            console.log("a pessoa está cursando a faculdade")

        }else {
            console.log("a pessoa não está cursando a faculdade")
        }
    }
    verificarPessoa(10)
    verificarPessoa(33)
