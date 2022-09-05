const inputText = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputText.value = " ";
}


function encriptar(stringEncriptda){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptda = stringEncriptda.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptda.includes(matrizCodigo[i][0])){
            stringEncriptda = stringEncriptda.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptda;
} 

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputText.value);
    mensaje.value = textoEncriptado;
    inputText.value = " ";
}


function desencriptar(stringDesencriptda){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptda = stringDesencriptda.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptda.includes(matrizCodigo[i][1])){
            stringDesencriptda = stringDesencriptda.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringDesencriptda;
} 

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
}