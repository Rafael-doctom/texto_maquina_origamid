
// const textoImprime = document.querySelector("h1");


// function textoMaquina(elemento){
//     const textoCorta = elemento.innerHTML.split("")
//     elemento.innerHTML = ""

//     textoCorta.forEach((letra, i) => {
//         setTimeout(function(){
//             elemento.innerHTML += letra;
//         }, 75 * i)
//     });
// }


// textoMaquina(textoImprime)






























const texto = document.querySelector("h1");

function TextoMaquina(elemento){
    const textoCorta = elemento.innerHTML.split("");

    elemento.innerHTML= "";

    textoCorta.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra;
        },75*i)
    });

}


TextoMaquina(texto)

