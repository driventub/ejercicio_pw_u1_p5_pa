var resultado = 0;

function cambiarX(id){
    document.getElementById(id).innerHTML = "X";
}    

function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

function calcular(id) {
  const valor = getRandomInt();
  resultado = resultado + valor;
  document.getElementById(id).innerHTML = getRandomInt();
  document.getElementById(id).style.fontSize = "100%"
  respuesta();
}

function respuesta() {
  document.getElementById("resultado").innerHTML = resultado;
}
