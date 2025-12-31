
// O tipo é definido no VALOR e NÃO NA VARIÁVEL!

// let texto = "Olá";      // string
// let numero = 10;       // number
// let ligado = true;     // boolean
// let vazio = null;      // null
// let indefinido;        // undefined
// let lista = [];        // object (array / lista de valores)
// let objeto = {};       // object


// console.log(texto + numero)

/* 'console.log' = print*/ 

/*document = HTML */
/* querySelector = seleciona algo no HTML */

let imagem = document.querySelector(".copo-grande")

function trocaImagem(endereco){
    imagem.src = endereco
}